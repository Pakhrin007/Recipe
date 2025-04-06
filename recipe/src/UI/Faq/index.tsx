import React, { useState } from "react";

const Faq: React.FC = () => {
  // State to track which accordion item is open
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to handle accordion toggle
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {/* Accordion Item 1 */}
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-blue-800 dark:border-blue-300 dark:text-gray-400 hover:bg-gray-100  gap-3"
          onClick={() => toggleAccordion(1)}
          aria-expanded={activeIndex === 1}
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is RecipeNest?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${activeIndex === 1 ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${activeIndex === 1 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 ">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            RecipeNest is a platform that allows you to find and share recipes.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-blue-800 dark:border-blue-300 dark:text-gray-400 hover:bg-gray-100  gap-3"
          onClick={() => toggleAccordion(2)}
          aria-expanded={activeIndex === 2}
          aria-controls="accordion-collapse-body-2"
        >
          <span>Is there a Figma file available?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${activeIndex === 2 ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${activeIndex === 2 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design equivalent
            in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-blue-800 dark:border-blue-300 dark:text-gray-400 hover:bg-gray-100  gap-3"
          onClick={() => toggleAccordion(3)}
          aria-expanded={activeIndex === 3}
          aria-controls="accordion-collapse-body-3"
        >
          <span>What are the differences between Flowbite and Tailwind UI?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${activeIndex === 3 ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`${activeIndex === 3 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0  dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and
            even Tailwind UI as there is no technical reason stopping you from
            using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;