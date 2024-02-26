import { useState } from "react";
import { FeatureData } from "../assets/data/Features";
import { ButtonBlue } from "./Button";
import { useDarkMode } from "../context/DarkModeContext";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-screen flex flex-col mb-40 items-center">
        <div
          className="flex flex-col lg:flex-row text-grayish-blue 2xl:text-xl 2xl:h-20 2xl:w-[50rem] lg:gap-0 text-lg w-[20rem] gap-5 justify-evenly
         dark:text-dark-grayish-blue md:w-[32rem] lg:w-[47rem]"
        >
          {FeatureData.map((tab) => {
            return (
              <button
                key={tab.id}
                className={`hover:text-soft-red lg:px-[3.33rem] 2xl:pb-0 border-b border-grayish-blue pb-5 ${
                  activeTab === tab.id
                    ? "text-very-dark-blue border-b-4 border-soft-red dark:text-white dark:border-dark-soft-red"
                    : ""
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
        {FeatureData.map((tab) => {
          return (
            <div key={tab.id}>
              {activeTab === tab.id && (
                <div className="flex lg:flex-row flex-col justify-center 2xl:gap-40 gap-16 mt-20 items-center lg:gap-10">
                  <img
                    src={tab.img}
                    className="relative z-10 2xl:w-[38rem] w-[21rem] 2xl:left-none md:w-[32rem] lg:w-[30rem]"
                  ></img>
                  <div
                    className="absolute 2xl:top-[90rem] left-0 bg-soft-blue 2xl:w-[42rem] 2xl:h-[27.5rem] rounded-r-full z-0 
                  dark:bg-dark-very-dark-blue w-[20rem] h-[13.5rem] top-[91rem] md:w-[34rem] md:h-[20rem] md:top-[100rem]
                  lg:w-[34rem] lg:h-[20rem] lg:top-[77rem]"
                  ></div>
                  <div className="flex flex-col 2xl:w-[500px] 2xl:h-[390px] justify-center w-full items-center 2xl:items-start">
                    <h2 className="text-very-dark-blue 2xl:text-4xl font-semibold my-6 dark:text-dark-grayish-blue text-2xl md:text-3xl">
                      {tab.heading}
                    </h2>
                    <p
                      className="text-grayish-blue 2xl:text-xl 2xl:w-fit 2xl:text-left 2xl:leading-9 text-md mb-8 dark:text-white w-[320px] text-center leading-8 
                    md:text-lg md:leading-9 md:w-[480px] lg:w-[350px]"
                    >
                      {tab.content}
                    </p>
                    <div className="2xl:w-36">
                      <ButtonBlue text="More Info" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;
