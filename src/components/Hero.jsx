import { ButtonBlue, ButtonGray } from "../components/Button";

function Hero() {
  return (
    <div
      className="flex flex-col 2xl:flex-row w-full h-[48rem] 2xl:justify-around items-center relative dark:bg-dark-primary pt-6 2xl:pt-0
    "
    >
      <div className="order-2 2xl:order-1">
        <h1
          className="2xl:text-6xl font-semibold text-very-dark-blue 2xl:leading-[4rem] dark:text-dark-grayish-blue text-3xl text-center 2xl:text-left mt-6 2xl:mt-0
        md:text-4xl"
        >
          A Simple Bookmark <br /> Manager
        </h1>
        <p className="text-grayish-blue 2xl:text-xl my-8 dark:text-white text-center 2xl:text-left md:text-lg">
          A clean and simple interface to organize
          <span className="block 2xl:hidden leading-[0.5rem]">
            <br />
          </span>
          your favourite
          <span className="2xl:block hidden 2xl:leading-[0.5rem]">
            <br />
          </span>{" "}
          websites. Open a new
          <span className="block 2xl:hidden leading-[0.5rem]">
            <br />
          </span>
          browser tab and see your sites load
          <span className="block leading-[0.5rem]">
            <br />
          </span>
          instantly. Try it for free.
        </p>
        <div className="flex gap-5">
          <ButtonBlue text="Get it on Chrome" />
          <ButtonGray text="Get it on Firefox" />
        </div>
      </div>
      <div className="order-1 2xl:order-2 flex">
        <img
          src="./src/assets/images/illustration-hero.svg"
          alt="preview-browser"
          className="2xl:w-[800px] h-auto z-20 relative w-[500px] md:w-[700px]"
        ></img>
        <div
          className="absolute 2xl:bottom-20 right-0 bg-soft-blue 2xl:w-[42rem] 2xl:h-[27.5rem] rounded-l-full z-0 w-[20rem] h-[11.5rem] bottom-[30rem]
          md:w-[36rem] md:h-[20rem] md:bottom-[19rem] dark:bg-dark-very-dark-blue"
        ></div>
      </div>
    </div>
  );
}

export default Hero;
