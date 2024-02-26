import { ButtonBlue, ButtonGray } from "../components/Button";

function Hero() {
  return (
    <div
      className="flex flex-col 2xl:flex-row w-full h-[48rem] justify-around items-center relative pl-10 dark:bg-dark-primary
    "
    >
      <div className="order-2 2xl:order-1">
        <h1 className="text-6xl font-semibold text-very-dark-blue leading-[4rem] dark:text-dark-grayish-blue">
          A Simple Bookmark <br /> Manager
        </h1>
        <p className="text-grayish-blue text-xl my-8 dark:text-white">
          A clean and simple interface to organize your favourite <br />
          websites. Open a new browser tab and see your sites load <br />
          instantly. Try it for free.
        </p>
        <div className="flex gap-5">
          <ButtonBlue text="Get it on Chrome" />
          <ButtonGray text="Get it on Firefox" />
        </div>
      </div>
      <div className="order-1 2xl:order-2">
        <img
          src="./src/assets/images/illustration-hero.svg"
          alt="preview-browser"
          className="w-[800px] h-auto z-20 relative"
        ></img>
        <div
          className="absolute bottom-20 right-0 bg-soft-blue w-[42rem] h-[27.5rem] rounded-l-full z-0 
        dark:bg-dark-very-dark-blue"
        ></div>
      </div>
    </div>
  );
}

export default Hero;

// <div
// className="flex flex-row w-full h-[48rem] justify-around items-center relative pl-10 dark:bg-dark-primary
// "
// >
// <div className="md-order-1">
//   <h1 className="text-6xl font-semibold text-very-dark-blue leading-[4rem] dark:text-dark-grayish-blue">
//     A Simple Bookmark <br /> Manager
//   </h1>
//   <p className="text-grayish-blue text-xl my-8 dark:text-white">
//     A clean and simple interface to organize your favourite <br />
//     websites. Open a new browser tab and see your sites load <br />
//     instantly. Try it for free.
//   </p>
//   <div className="flex gap-5">
//     <ButtonBlue text="Get it on Chrome" />
//     <ButtonGray text="Get it on Firefox" />
//   </div>
// </div>
// <div className="md:order-2">
//   <img
//     src="./src/assets/images/illustration-hero.svg"
//     alt="preview-browser"
//     className="w-[800px] h-auto z-20 relative"
//   ></img>
//   <div
//     className="absolute bottom-20 right-0 bg-soft-blue w-[42rem] h-[27.5rem] rounded-l-full z-0
//   dark:bg-dark-very-dark-blue"
//   ></div>
// </div>
// </div>
