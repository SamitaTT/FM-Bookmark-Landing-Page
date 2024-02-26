import Tabs from "./Tabs";

function Features() {
  return (
    <div className="flex flex-col items-center h-[1050px] bg-white dark:bg-dark-primary md:pt-24">
      <h1 className="text-very-dark-blue 2xl:text-4xl font-semibold my-6 dark:text-dark-grayish-blue text-3xl md:text-4xl">
        Features
      </h1>
      <p className="text-grayish-blue 2xl:text-xl mb-14 text-center dark:text-white md:text-lg">
        Our aim is to make it quick and easy for you
        <span className="block lg:hidden leading-[0.5rem]">
          <br />
        </span>
        to access your
        <span className="lg:block hidden lg:leading-[0.5rem]">
          <br />
        </span>{" "}
        favourite websites. Your
        <span className="block lg:hidden leading-[0.5rem]">
          <br />
        </span>
        bookmarks sync between your devices
        <span className="lg:block hidden lg:leading-[0.5rem]">
          <br />
        </span>
        <span className="block lg:hidden leading-[0.5rem]">
          <br />
        </span>
        so you can access them on the go.
      </p>
      <Tabs />
    </div>
  );
}

export default Features;
