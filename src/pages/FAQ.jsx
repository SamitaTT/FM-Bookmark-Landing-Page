import Accordion from "../components/Accordion";
import { ButtonBlue } from "../components/Button";
import { FaqData } from "../assets/data/FAQs";
import { useDarkMode } from "../context/DarkModeContext";

function FAQ() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col items-center bg-white dark:bg-dark-primary">
        <h2
          className="text-very-dark-blue 2xl:text-4xl font-semibold 2xl:my-6 mb-4 dark:text-dark-grayish-blue text-2xl 2xl:w-fit w-[250px] text-center
        md:text-3xl md:w-[500px]"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-grayish-blue 2xl:text-xl text-md mb-14 text-center dark:text-white leading-8 2xl:w-fit w-[320px] md:text-lg md:w-[500px]">
          Here are some of our FAQs. If you have any other Questions
          <span className="2xl:block hidden 2xl:leading-[0.5rem]">
            <br />
          </span>{" "}
          you'd like answered please feel free to email us.
        </p>
        {FaqData.map((item) => {
          return (
            <div
              key={item.id}
              className=" bg-white 2xl:p-4 2xl:w-[40rem] border-y border-neutral-100 dark:bg-dark-primary dark:border-dark-dark-grayish-blue w-[20rem] py-2
              md:w-[30rem]"
            >
              <Accordion title={item.title} answer={item.answer} />
            </div>
          );
        })}
        <div className="mt-14 2xl:mb-40 mb-28">
          <ButtonBlue text="More Info" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
