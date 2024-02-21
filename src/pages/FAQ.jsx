import Accordion from "../components/Accordion";
import { ButtonBlue } from "../components/Button";
import { FaqData } from "../assets/data/FAQs";
import { useDarkMode } from "../context/DarkModeContext";

function FAQ() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col items-center bg-white dark:bg-dark-primary">
        <h2 className="text-very-dark-blue text-4xl font-semibold my-6 dark:text-dark-grayish-blue">
          Frequently Asked Questions
        </h2>
        <p className="text-grayish-blue text-xl mb-14 text-center dark:text-white">
          Here are some of our FAQs. If you have any other questions <br />
          you'd like answered please feel free to email us.
        </p>
        {FaqData.map((item) => {
          return (
            <div
              key={item.id}
              className=" bg-white p-4 w-[40rem] border-y border-neutral-100 dark:bg-dark-primary dark:border-dark-dark-grayish-blue"
            >
              <Accordion title={item.title} answer={item.answer} />
            </div>
          );
        })}
        <div className="mt-14 mb-40">
          <ButtonBlue text="More Info" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
