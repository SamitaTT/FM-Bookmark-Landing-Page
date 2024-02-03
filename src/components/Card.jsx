import { ButtonBlue } from "./Button";

function Card(prop) {
  return (
    <div className="rounded-xl w-[17.5rem] h-[23.125rem] flex flex-col items-center shadow-[0_10px_15px_-1px_rgba(228,232,250,0.8)]">
      <img
        src={prop.img}
        alt={`${prop.title}-logo`}
        className="w-[6.375rem] h-[6.25rem] mt-10 mb-8"
      ></img>
      <h3 className="text-very-dark-blue text-xl font-semibold">
        Add to {prop.title}
      </h3>
      <p className="text-grayish-blue mt-2 mb-8">
        Minimum version {prop.version}
      </p>
      <img src="./src/assets/images/bg-dots.svg" alt="bg-dots"></img>
      <br />
      <ButtonBlue text="Add & Install Extension" />
    </div>
  );
}

export default Card;
