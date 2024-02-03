import { ButtonRedNoShadow } from "../components/Button";

function Contact() {
  return (
    <div className="bg-soft-blue h-[25rem] flex flex-col items-center">
      <div>
        <h4 className="text-white text-xl tracking-[0.4rem] mt-16 mb-12 text-center">
          35,000+ ALREADY JOINED
        </h4>
        <h1 className="text-white text-4xl font-semibold text-center leading-[3rem]">
          Stay up-to-date with what <br />
          we’re doing
        </h1>
      </div>
      <div className="flex gap-4 mt-10">
        <input
          type="email"
          name="email"
          className="text-black focus:outline-none w-[19rem] h-14 rounded-md p-4"
          placeholder="Enter your email address"
        ></input>
        <ButtonRedNoShadow text="Contact Us" className="shadow-none" />
      </div>
    </div>
  );
}

export default Contact;
