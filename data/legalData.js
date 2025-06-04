
import { FileText, ShieldCheck, ArrowLeftRight } from "lucide-react";
export const legalData = {
  title: "Legal Information & Policies",
  description: "Please review the following legal documents that govern your use of the Spacenos website and services.",
  policies: [
    {
      id: "terms-of-service",
      title: "Terms of Service",
      icon: FileText,
      iconColor: "text-blue-600 dark:text-blue-400",
      description: "Rules and guidelines for using our platform",
      lastUpdated: "June 1, 2023",
      sections: [
        {
          title: "1. Use of the Platform",
          content: [
            "You must be at least 18 years old to use the Platform. By using the Platform, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.",
            "The platform is provided to you for your personal, non-commercial use only. You may not use the Platform for any other purpose, including any commercial purpose, without our express written consent.",
            "You may not use the Platform in any way that violates any applicable law or regulation, or that infringes any intellectual property rights or other proprietary rights of any person."
          ]
        },
        {
          title: "2. User Content",
          content: [
            "The Platform allows users to submit, upload, publish, and share content, including text, images, videos, and other materials. You retain all rights in, and are solely responsible for, the User Content you post to the Platform."
          ]
        },
        {
          title: "3. Intellectual Property",
          content: [
            "The Platform and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Spacenos, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
          ]
        }
      ]
    },
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      icon: ShieldCheck,
      iconColor: "text-green-600 dark:text-green-400",
      description: "How we collect and protect your data",
      lastUpdated: "June 1, 2023",
      sections: [
        {
          title: "1. Information We Collect",
          content: [
            "We collect several types of information from and about users of our Platform, including:",
            {
              list: [
                "Personal information such as name, email address, phone number",
                "Demographic information such as age, gender, location",
                "Technical information about your device and internet connection",
                "Usage details about how you interact with our Platform"
              ]
            }
          ]
        },
        {
          title: "2. How We Use Your Information",
          content: [
            "We use information that we collect about you or that you provide to us:",
            {
              list: [
                "To present our Platform and its contents to you",
                "To provide you with information, products, or services",
                "To fulfill any other purpose for which you provide it",
                "To notify you about changes to our Platform",
                "For any other purpose with your consent"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "refund-policy",
      title: "Refund Policy",
      icon: ArrowLeftRight,
      iconColor: "text-purple-600 dark:text-purple-400",
      description: "Our policy on returns and refunds",
      lastUpdated: "June 1, 2023",
      sections: [
        {
          title: "1. Digital Products",
          content: [
            "Due to the nature of digital products, we generally do not offer refunds once a purchase is completed. However, if you experience technical issues that prevent you from accessing the product, please contact our support team within 14 days of purchase."
          ]
        },
        {
          title: "2. Subscription Services",
          content: [
            "For subscription-based services, you may cancel your subscription at any time. Refunds for unused portions of the subscription period will be granted on a pro-rated basis if requested within 7 days of the billing date."
          ]
        },
        {
          title: "3. Exceptions",
          content: [
            "Refund requests will be considered on a case-by-case basis and granted at the sole discretion of Spacenos. To request a refund, please contact our customer support team with your order details and reason for the request."
          ]
        }
      ]
    }
  ]
};