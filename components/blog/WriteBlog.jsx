"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { db, storage } from "@/config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function SimpleBlogFormWithFirebase() {
  const { register, handleSubmit, control, reset, setValue, watch } = useForm({
    defaultValues: { sections: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sections",
  });

  const [imgFile, setImgFile] = useState(null);
  const [authorImgFile, setAuthorImgFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file, path) => {
    const imageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
    await uploadBytes(imageRef, file);
    return getDownloadURL(imageRef);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const imgUrl = imgFile ? await uploadImage(imgFile, "blogImages") : "";
      const authorImgUrl = authorImgFile ? await uploadImage(authorImgFile, "authorImages") : "";

      const sections = data.sections.map((sec) => {
        const contentArray = [sec.textContent];
        if (sec.list?.length) {
          contentArray.push({ list: sec.list });
        }
        return { title: sec.title, content: contentArray };
      });

      const blogData = {
        category: data.category,
        imgSrc: imgUrl,
        imgCaption: data.imgCaption,
        title: data.title,
        authorImg: authorImgUrl,
        authorName: data.authorName,
        desc: data.desc,
        date: new Date().toLocaleDateString(),
        content: {
          intro: data.intro ? [data.intro] : [],
          sections,
        },
        timestamp: Timestamp.now(),
      };

      await addDoc(collection(db, "v5", process.env.NEXT_PUBLIC_DOC_ID, "blogs"), blogData);
      alert("Blog published successfully!");
      reset();
      setImgFile(null);
      setAuthorImgFile(null);
    } catch (err) {
      console.error(err);
      alert("Error publishing blog.");
    }
    setLoading(false);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input className="form-control" placeholder="Category" {...register("category", { required: true })} />
        </div>

        <div className="mb-3">
          <label className="form-label">Main Image</label>
          <input type="file" className="form-control" onChange={(e) => setImgFile(e.target.files[0])} />
        </div>

        <div className="mb-3">
          <label className="form-label">Image Caption</label>
          <input className="form-control" placeholder="Image Caption" {...register("imgCaption")} />
        </div>

        <div className="mb-3">
          <label className="form-label">Blog Title</label>
          <input className="form-control" placeholder="Title" {...register("title", { required: true })} />
        </div>

        <div className="mb-3">
          <label className="form-label">Author Image</label>
          <input type="file" className="form-control" onChange={(e) => setAuthorImgFile(e.target.files[0])} />
        </div>

        <div className="mb-3">
          <label className="form-label">Author Name</label>
          <input className="form-control" placeholder="Author Name" {...register("authorName", { required: true })} />
        </div>

        <div className="mb-3">
          <label className="form-label">Short Description</label>
          <textarea className="form-control" placeholder="Short Description" {...register("desc", { required: true })} />
        </div>

        <div className="mb-4">
          <label className="form-label">Intro (Optional)</label>
          <textarea className="form-control" placeholder="Intro" {...register("intro")} />
        </div>

        <h5>Sections</h5>
        {fields.map((section, secIndex) => {
          const listWatch = watch(`sections.${secIndex}.list`) || [];

          return (
            <div key={section.id} className="border p-3 mb-4 bg-light rounded">
              <div className="mb-3">
                <label className="form-label">Section Title</label>
                <input
                  className="form-control"
                  placeholder="Section Title"
                  {...register(`sections.${secIndex}.title`, { required: true })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Text Content</label>
                <textarea
                  className="form-control"
                  placeholder="Text Content"
                  {...register(`sections.${secIndex}.textContent`, { required: true })}
                />
              </div>

              <h6>List Items (Optional)</h6>
              {listWatch.map((item, itemIndex) => (
                <div key={itemIndex} className="d-flex align-items-center mb-2 gap-2">
                  <span>{itemIndex + 1}.</span>
                  <input
                    className="form-control"
                    {...register(`sections.${secIndex}.list.${itemIndex}`)}
                    placeholder="List Item"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      const updatedList = [...listWatch];
                      updatedList.splice(itemIndex, 1);
                      setValue(`sections.${secIndex}.list`, updatedList);
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="d-flex gap-2 mt-3 mb-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() =>
                    setValue(`sections.${secIndex}.list`, [...listWatch, ""])
                  }
                >
                  + Add List Item
                </button>

                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => remove(secIndex)}
                >
                  Remove Section
                </button>
              </div>
            </div>
          );
        })}

        <div className="d-flex mb-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => append({ title: "", textContent: "", list: [] })}
          >
            + Add Section
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success px-4" disabled={loading}>
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
