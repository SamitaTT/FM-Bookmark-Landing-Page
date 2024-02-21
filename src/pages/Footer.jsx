import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode && "dark"}`}>
      <footer className="bg-very-dark-blue h-32 w-full flex flex-row pl-44 pr-44 items-center dark:bg-dark-primary">
        <a href="#">
          <img
            src="./src/assets/images/logo-bookmark-footer.svg"
            alt="bookmark-logo"
            className="w-auto h-8"
          ></img>
        </a>
        <ul className="text-white flex flex-row gap-12 text-lg ml-14">
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
        <div className="flex flex-row gap-14 text-white ml-[52rem]">
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
