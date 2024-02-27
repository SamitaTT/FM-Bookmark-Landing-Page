import { useState } from "react";

function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
        className="flex justify-between w-full text-very-dark-blue 2xl:text-lg text-md hover:text-soft-red group transition duration-300
        dark:text-dark-grayish-blue dark:hover:text-dark-soft-red"
      >
        <span className="text-very-dark-blue dark:text-dark-grayish-blue hover:text-soft-red dark:hover:text-dark-soft-red">
          {title}
        </span>
        {accordionOpen ? (
          <div className="bg-[url('/images/icon-arrow.svg')] w-auto h-4 bg-no-repeat transition duration-200 ease-out rotate-180 group-hover:bg-[url('/images/icon-arrow-red.svg')]">
            <p className="opacity-0">TT</p>
          </div>
        ) : (
          <div className="bg-[url('/images/icon-arrow.svg')] w-auto h-4 bg-no-repeat transition duration-200 ease-out group-hover:bg-[url('/images/icon-arrow-red.svg')]">
            <p className="opacity-0">TT</p>
          </div>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-very-dark-blue
  ${
    accordionOpen
      ? "grid-rows-[1fr] opacity-100 mt-6"
      : "grid-rows-[0fr] opacity-0"
  }`}
      >
        <div className="overflow-hidden text-grayish-blue dark:text-white 2xl:leading-normal leading-7">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
