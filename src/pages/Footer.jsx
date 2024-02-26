import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode && "dark"}`}>
      <footer
        className="bg-very-dark-blue 2xl:h-32 h-[24rem] w-full flex lg:flex-row flex-col 2xl:pl-44 2xl:pr-44 items-center dark:bg-dark-primary
         lg:h-[8rem] 2xl:justify-normal gap-10 lg:justify-evenly"
      >
        <a href="#">
          <img
            src="./src/assets/images/logo-bookmark-footer.svg"
            alt="bookmark-logo"
            className="w-auto 2xl:h-8 h-7 2xl:py-0 my-10 2xl:my-0"
          ></img>
        </a>
        <ul className="text-white flex lg:flex-row flex-col 2xl:gap-12 gap-6 text-lg 2xl:ml-14 text-center">
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
        <div className="flex flex-row lg:gap-14 text-white 2xl:ml-[52rem] gap-10 mt-0 ">
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
