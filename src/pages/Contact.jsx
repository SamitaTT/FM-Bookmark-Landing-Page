import { ButtonRedNoShadow } from "../components/Button";
import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

function Contact() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { darkMode } = useDarkMode();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      alert("Thank You for Visiting! 😀");
    } else {
      console.error("Invalid Email");
    }
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-soft-blue h-[25rem] flex flex-col items-center dark:bg-dark-tertiary">
        <div>
          <h4 className="text-white 2xl:text-xl text-md tracking-[0.4rem] mt-16 2xl:mb-12 mb-2 text-center">
            35,000+ ALREADY JOINED
          </h4>
          <h1 className="text-white 2xl:text-4xl text-[1.7rem] font-semibold text-center 2xl:leading-[3rem]">
            Stay up-to-date with what <br />
            we’re doing
          </h1>
        </div>
        <form
          className="flex 2xl:flex-row flex-col gap-4 mt-10"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="email"
              name="email"
              value={email}
              className={`text-black focus:outline-none w-[19rem] h-14 rounded-md p-4 ${
                isValidEmail === false && email !== ""
                  ? "border-2 border-soft-red bg-[url('src/assets/images/icon-error.svg')] bg-no-repeat bg-[center_right_1rem] rounded-b-none"
                  : ""
              }`}
              placeholder="Enter your email address"
              onChange={handleChange}
            ></input>
            {!isValidEmail && email !== "" && (
              <p className="italic text-white text-xs bg-soft-red w-[19rem] h-6 rounded-b-md pl-2 pt-1 dark:bg-dark-soft-red">
                Whoops, make sure it's an email
              </p>
            )}
          </div>
          <ButtonRedNoShadow
            text="Contact Us"
            className="shadow-none"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
