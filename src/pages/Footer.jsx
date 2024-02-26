import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode && "dark"}`}>
      <footer
        className="bg-very-dark-blue h-[24rem] w-full flex lg:flex-row flex-col items-center dark:bg-dark-primary
         lg:h-[8rem] lg:justify-evenly xl:justify-start xl:pl-32"
      >
        <a href="#">
          <img
            src="./src/assets/images/logo-bookmark-footer.svg"
            alt="bookmark-logo"
            className="w-auto 2xl:h-8 h-7 my-10"
          ></img>
        </a>
        <ul className="text-white flex lg:flex-row flex-col gap-6 text-lg text-center xl:pl-12 2xl:pl-14 2xl:gap-14">
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
        <div className="flex flex-row lg:gap-14 text-white 2xl:ml-[52rem] gap-10 mt-20 lg:mt-0 xl:ml-96">
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
