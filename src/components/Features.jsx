import Tabs from "./Tabs";

function Features() {
  return (
    <div className="flex flex-col items-center h-[1050px]">
      <h1 className="text-very-dark-blue text-4xl font-semibold my-6">
        Features
      </h1>
      <p className="text-grayish-blue text-xl mb-14 text-center">
        Our aim is to make it quick and easy for you to access your <br />
        favourite websites. Your bookmarks sync between your devices <br />
        so you can access them on the go.
      </p>
      <Tabs />
    </div>
  );
}

export default Features;
