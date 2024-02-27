import Card from "../components/Card";

function Download() {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-dark-primary">
      <h1 className="text-very-dark-blue 2xl:text-4xl font-semibold 2xl:my-6 dark:text-dark-grayish-blue text-2xl mt-44 md:text-3xl md:mt-80 lg:mt-6">
        Download the extension
      </h1>
      <p
        className="text-grayish-blue 2xl:text-xl text-md mb-14 text-center dark:text-white 2xl:w-fit w-[300px] leading-8 2xl:mt-0 mt-2 
      md:w-[500px] md:text-lg md:leading-9"
      >
        We’ve got more browsers in the pipeline. Please do let us know if
        <span className="2xl:block hidden 2xl:leading-[0.5rem]">
          <br />
        </span>{" "}
        you’ve got a favourite you’d like us to prioritize.
      </p>
      <div className="flex lg:flex-row flex-col 2xl:gap-8 mb-28 lg:gap-5 lg:w-fit lg:justify-center xl:gap-6">
        <div className="">
          <Card title="Chrome" version="62" img="/images/logo-chrome.svg" />
        </div>
        <div className="2xl:mt-10 mt-10">
          <Card title="Firefox" version="55" img="/images/logo-firefox.svg" />
        </div>
        <div className="lg:mt-20 mt-10">
          <Card title="Opera" version="46" img="/images/logo-opera.svg" />
        </div>
      </div>
    </div>
  );
}

export default Download;
