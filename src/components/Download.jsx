import Card from "../components/Card";

function Download() {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-dark-primary">
      <h1 className="text-very-dark-blue text-4xl font-semibold my-6 dark:text-dark-grayish-blue">
        Download the extension
      </h1>
      <p className="text-grayish-blue text-xl mb-14 text-center dark:text-white">
        We’ve got more browsers in the pipeline. Please do let us know if <br />
        you’ve got a favourite you’d like us to prioritize.
      </p>
      <div className="flex gap-8 mb-28">
        <div className="">
          <Card
            title="Chrome"
            version="62"
            img="./src/assets/images/logo-chrome.svg"
          />
        </div>
        <div className="mt-10">
          <Card
            title="Firefox"
            version="55"
            img="./src/assets/images/logo-firefox.svg"
          />
        </div>
        <div className="mt-20">
          <Card
            title="Opera"
            version="46"
            img="./src/assets/images/logo-opera.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Download;
