"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "@/config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function Contact1() {
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send message");
  const [buttonState, setButtonState] = useState("default"); // default, success, error

  const dropdownOptions = [
    { value: "", label: "Select a category " },
    { value: "Careers", label: "Careers" },
    { value: "Sales", label: "Sales" },
    { value: "Support", label: "Support" },
    { value: "Partnership", label: "Partnership" },
    { value: "Investment", label: "Investment" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

 const onSubmit = async (data) => {
  setLoading(true);
  setButtonText("Sending...");
  setButtonState("default");

  try {
    await addDoc(collection(db, "contacts"), {
      ...data,
      category: selectedOption,
      timestamp: Timestamp.now(),
    });

    setButtonText("Sent Successfully");
    setButtonState("success");
    reset();
    setSelectedOption("");
  } catch (error) {
    console.error("Firebase Error:", error);
    setButtonText("Try Again in 5 Minutes");
    setButtonState("error");
  }

  setLoading(false);

  setTimeout(() => {
    setButtonText("Send message");
    setButtonState("default");
  }, 5000);
};


  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      {/* Background */}
      <div className="position-absolute top-0 start-0 end-0 min-h-screen bg-secondary dark:bg-primary-700 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black overflow-hidden lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
        <div className="position-absolute rotate-45" style={{ top: "30%", left: "18%" }}>
          <Image className="w-32px text-gray-900 dark:text-white" width={193} height={216} alt="star-1" src="/assets/images/template/star-1.svg" />
          <Image className="w-32px text-gray-900 dark:text-white dark:hidden" width={193} height={216} alt="star-1" src="/assets/images/template/dark-star-1.svg" />
        </div>
        <div className="position-absolute rotate-45" style={{ top: "15%", right: "18%" }}>
          <Image className="w-24px text-gray-900 dark:text-white" width={69} height={95} alt="star-2" src="/assets/images/template/star-2.svg" />
          <Image className="w-32px text-gray-900 dark:text-white dark:hidden" width={193} height={216} alt="star-1" src="/assets/images/template/dark-star-1.svg" />
        </div>
      </div>

      {/* Content */}
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0" data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Let's Build, Grow, or Support Together
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                We're excited to connect with you — whether you're here to build an empire, explore a career, invest in the future, or just need help. We've built this page to guide you to the right place with minimal waiting.
              </p>
            </div>

            <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
              <div className="panel row child-cols-12 lg:child-cols-6 g-0">
                
                <div className="order-0 lg:order-0">
                  <div className="panel overflow-hidden rounded-3 h-100 min-h-350px">
                    <figure className="panel h-100 m-0 rounded">
                      <canvas className="h-100 w-100" />
                      <Image className="media-cover image" alt="Hero image" src="/assets/images/template/hero-contact.jpg" width="1500" height="1000" />
                    </figure>
                    <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:p-9">
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-50" />
                      <div className="panel z-1">
                        <div className="vstack gap-3">
                          <p className="fs-5 xl:fs-4 fw-medium">
                            "This software simplifies the website building process, making it a breeze to manage our online presence."
                          </p>
                          <div className="vstack gap-0">
                            <p className="fs-6 lg:fs-5 fw-medium">David Larry</p>
                            <span className="fs-7 opacity-80">Founder &amp; CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="order-1 lg:order-1">
                  <form onSubmit={handleSubmit(onSubmit)} className="vstack gap-2 p-3 sm:p-6 xl:p-8">
                    
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                      This form connects you directly to Spacenos leadership for AI strategy, investment and partnerships. Expect a confidential and focused response
                    </p>

                    <div className="row child-cols-12 sm:child-cols-6 g-2">
                      <div>
                        <input
                          className={`form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white ${errors.name ? "is-invalid" : ""}`}
                          type="text"
                          placeholder="Full name"
                          {...register("name", { required: "Full name is required" })}
                        />
                        {errors.name && <div className="invalid-feedback d-block">{errors.name.message}</div>}
                      </div>
                      <div>
                        <input
                          className={`form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white ${errors.email ? "is-invalid" : ""}`}
                          type="email"
                          placeholder="Your email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email format",
                            },
                          })}
                        />
                        {errors.email && <div className="invalid-feedback d-block">{errors.email.message}</div>}
                      </div>
                    </div>

                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      type="text"
                      placeholder="Subject"
                      {...register("subject")}
                    />

                    <select
                      className={`form-control h-50px w-full bg-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white ${errors.category ? "is-invalid" : ""}`}
                      value={selectedOption}
                      {...register("category", { required: "Please select a category" })}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      {dropdownOptions.map((option) => (
                        <option key={option.value} value={option.value} className="dark:bg-gray-800 dark:text-white">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.category && <div className="invalid-feedback d-block">{errors.category.message}</div>}

                    <textarea
                      className={`form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white ${errors.message ? "is-invalid" : ""}`}
                      placeholder="Your message.."
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && <div className="invalid-feedback d-block">{errors.message.message}</div>}

                    <button
                      className={`btn btn-md text-white mt-2 ${buttonState === "error" ? "btn-danger" : "btn-primary"}`}
                      type="submit"
                      disabled={loading}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      )}
                      {buttonText}
                    </button>

                    <p className="text-center">
                      Or drop us a message via <a className="m-1 uc-link" href="mailto:support@spacenos.com">email</a>.
                    </p>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
