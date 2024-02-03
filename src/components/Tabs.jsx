import { useState } from "react";
import { FeatureData } from "../assets/data/Features";
import { ButtonBlue } from "./Button";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full flex flex-col mb-40 items-center">
      <div className="flex text-grayish-blue text-xl h-20 w-[50rem]  justify-evenly">
        {FeatureData.map((tab) => {
          return (
            <button
              key={tab.id}
              className={`hover:text-soft-red px-20 border-b border-grayish-blue${
                activeTab === tab.id
                  ? "text-very-dark-blue border-b-4 border-soft-red"
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
              <div className="flex justify-center gap-40 mt-20">
                <img src={tab.img} className="relative z-10 w-[38rem]"></img>
                <div className="absolute top-[90rem] left-0 bg-soft-blue w-[42rem] h-[27.5rem] rounded-r-full z-0"></div>
                <div className="flex flex-col w-[500px] h-[390px] justify-center">
                  <h2 className="text-very-dark-blue text-4xl font-semibold my-6">
                    {tab.heading}
                  </h2>
                  <p className="text-grayish-blue text-xl mb-8">
                    {tab.content}
                  </p>
                  <div className="w-36">
                    <ButtonBlue text="More Info" />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
