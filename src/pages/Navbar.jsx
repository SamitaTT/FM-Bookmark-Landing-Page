import { ButtonRed, ButtonRedNoShadow } from "../components/Button";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../index.css";
import { useDarkMode } from "../context/DarkModeContext";

function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode && "dark"}`}>
      <nav className="w-full h-44 flex flex-row justify-between pl-44 pr-44 items-center bg-white dark:bg-dark-primary">
        <a href="#">
          <img
            src={
              darkMode
                ? "./src/assets/images/logo-bookmark-footer.svg"
                : "./src/assets/images/logo-bookmark.svg"
            }
            alt="bookmark-logo"
            className="w-auto h-8"
          ></img>
        </a>
        <ul className="text-very-dark-blue flex flex-row gap-12 text-lg items-center dark:text-white">
          <li>
            <a
              href="#"
              className="text-very-dark-blue hover:text-soft-red transition duration-300 dark:hover:text-dark-soft-red dark:text-white"
            >
              FEATURES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-very-dark-blue hover:text-soft-red transition duration-300 dark:hover:text-dark-soft-red dark:text-white"
            >
              PRICING
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-very-dark-blue hover:text-soft-red transition duration-300 dark:hover:text-dark-soft-red dark:text-white"
            >
              CONTACT
            </a>
          </li>
          <li>
            <ButtonRed text="LOGIN" />
          </li>
          <li>
            {!darkMode ? (
              <MdDarkMode
                className="h-[50px] w-[50px] text-very-dark-blue hover:text-soft-red transition duration-300 dark:hover:text-dark-soft-red"
                onClick={toggleDarkMode}
              />
            ) : (
              <MdLightMode
                className="h-[50px] w-[50px] text-white hover:text-soft-red transition duration-300 dark:hover:text-dark-soft-red"
                onClick={toggleDarkMode}
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

{
  /* <div className="text-very-dark-blue flex flex-row gap-12 text-lg items-center">
        <span className="hover:text-soft-red transition duration-300">
          FEATURES
        </span>
        <span className="hover:text-soft-red transition duration-300">
          PRICING
        </span>
        <span className="hover:text-soft-red transition duration-300">
          CONTACT
        </span>
        <ButtonRed text="LOGIN" />
        <ButtonRed text="DARK MODE" />
      </div> */
}
