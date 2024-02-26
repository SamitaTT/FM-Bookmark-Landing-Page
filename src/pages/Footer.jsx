import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode && "dark"}`}>
      <footer className="bg-very-dark-blue 2xl:h-32 h-[22rem] w-full flex 2xl:flex-row flex-col 2xl:pl-44 2xl:pr-44 items-center dark:bg-dark-primary">
        <a href="#">
          <img
            src="./src/assets/images/logo-bookmark-footer.svg"
            alt="bookmark-logo"
            className="w-auto 2xl:h-8 h-7 2xl:py-0 my-10 2xl:my-0"
          ></img>
        </a>
        <ul className="text-white flex 2xl:flex-row flex-col 2xl:gap-12 gap-6 text-lg 2xl:ml-14 text-center">
          <li>
            <a
              href="#"
              className="hover:text-soft-red transition duration-300
            dark:hover:text-dark-soft-red"
            >
              FEATURES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-soft-red transition duration-300
            dark:hover:text-dark-soft-red"
            >
              PRICING
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-soft-red transition duration-300
            dark:hover:text-dark-soft-red"
            >
              CONTACT
            </a>
          </li>
        </ul>
        <div className="flex flex-row 2xl:gap-14 text-white 2xl:ml-[52rem] gap-10 2xl:mt-0 mt-10">
          <a href="https://www.facebook.com/">
            <FaFacebookSquare
              className="h-[30px] w-[30px] hover:text-soft-red transition duration-300
            dark:hover:text-dark-soft-red"
            />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter
              className="h-[30px] w-[30px] hover:text-soft-red transition duration-300
            dark:hover:text-dark-soft-red"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

{
  /* <div className="text-white flex flex-row gap-12 text-lg ml-14">
<span className=" hover:text-soft-red transition duration-300">
  FEATURES
</span>
<span className="hover:text-soft-red transition duration-300">
  PRICING
</span>
<span className="hover:text-soft-red transition duration-300">
  CONTACT
</span>
</div> */
}
