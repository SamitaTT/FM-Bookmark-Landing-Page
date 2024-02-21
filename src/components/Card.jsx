import { ButtonBlue } from "./Button";
import { useDarkMode } from "../context/DarkModeContext";

function Card(prop) {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div
        className="bg-white rounded-xl w-[17.5rem] h-[23.125rem] flex flex-col items-center shadow-[0_10px_15px_-1px_rgba(228,232,250,0.8)] 
      dark:shadow-none dark:bg-dark-tertiary"
      >
        <img
          src={prop.img}
          alt={`${prop.title}-logo`}
          className="w-[6.375rem] h-[6.25rem] mt-10 mb-8"
        ></img>
        <h3 className="text-very-dark-blue text-xl font-semibold dark:text-dark-grayish-blue">
          Add to {prop.title}
        </h3>
        <p className="text-grayish-blue mt-2 mb-8 dark:text-white">
          Minimum version {prop.version}
        </p>
        <img src="./src/assets/images/bg-dots.svg" alt="bg-dots"></img>
        <br />
        <ButtonBlue text="Add & Install Extension" />
      </div>
    </div>
  );
}

export default Card;
