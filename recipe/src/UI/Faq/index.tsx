import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is RecipeNest?",
      answer:
        "RecipeNest is a community-driven platform where users can discover, share, and save recipes for all occasions. Whether you're a home cook or a professional chef, RecipeNest helps you find your next favorite dish.",
    },
    {
      question: "Is RecipeNest free to use?",
      answer:
        "Yes! RecipeNest is completely free to use. You can browse, upload, and save recipes without any charges. We also offer premium features for chefs and creators in the future.",
    },
    {
      question: "Can I upload my own recipes?",
      answer:
        "Absolutely! Once you're signed in, you can create and publish your own recipes. Add ingredients, steps, cooking tips, and even images to make your recipe shine.",
    },
    {
      question: "How do I save recipes to view later?",
      answer:
        "Just click the 'Save' button on any recipe card. It will be added to your personal collection in your profile, so you can access it anytime.",
    },
    {
      question: "Is there a mobile app for RecipeNest?",
      answer:
        "We're currently developing a mobile app for iOS and Android! Until then, you can use our responsive web app which works great on all devices.",
    },
  ];

  return (
    <div className="w-screen  ml-[100px] p-6 bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-6 font-title  ">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4 font-body">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-700 hover:bg-red-50 transition-colors font-body"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`${activeIndex === index ? "block" : "hidden"} px-5 pb-5 text-gray-600 font-body`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
