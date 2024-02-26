import { ButtonRed, ButtonRedNoShadow } from "../components/Button";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../index.css";
import { useDarkMode } from "../context/DarkModeContext";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <nav className="w-full h-28 gap-40 flex flex-row 2xl:pl-44 2xl:pr-44 2xl:h-44 lg:gap-0 justify-around xl:justify-between items-center bg-white dark:bg-dark-primary">
        {isMenuOpen === false && (
          <a href="#">
            <img
              src={
                darkMode
                  ? "./src/assets/images/logo-bookmark-footer.svg"
                  : "./src/assets/images/logo-bookmark.svg"
              }
              alt="bookmark-logo"
              className={
                darkMode ? "lg:w-auto 2xl:h-8 h-6" : "lg:w-auto 2xl:h-8"
              }
            ></img>
          </a>
        )}
        <ul className="text-very-dark-blue lg:flex flex-row gap-12 text-lg items-center dark:text-white hidden">
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
        {isMenuOpen ? (
          <div className="lg:hidden">
            <ul
              className="bg-[#1e2240]/95 text-white w-screen h-screen flex flex-col gap-5 text-md items-center dark:text-white absolute left-0 top-0 z-30
            md:gap-8"
            >
              <li className="flex flex-row pt-8 pb-2 w-full justify-around">
                <a href="#">
                  <img
                    src={
                      darkMode
                        ? "./src/assets/images/logo-bookmark-footer.svg"
                        : "./src/assets/images/logo-bookmark-footer.svg"
                    }
                    alt="bookmark-logo"
                    className="w-auto h-7 mr-36"
                  ></img>
                </a>
                <button className="text-xl font-semibold" onClick={toggleMenu}>
                  X
                </button>
              </li>
              <hr className="w-80 opacity-30 md:w-[34rem]" />
              <li>
                <a
                  href="#"
                  className="text-white hover:text-soft-red dark:text-white text-xl "
                >
                  FEATURES
                </a>
              </li>
              <hr className="w-80 opacity-30 md:w-[34rem]" />
              <li>
                <a
                  href="#"
                  className="text-white hover:text-soft-red dark:text-white text-xl "
                >
                  PRICING
                </a>
              </li>
              <hr className="w-80 opacity-30 md:w-[34rem]" />
              <li>
                <a
                  href="#"
                  className="text-white hover:text-soft-red dark:text-white text-xl "
                >
                  CONTACT
                </a>
              </li>
              <hr className="w-80 opacity-30 md:w-[34rem]" />
              <li>
                <button className="text-xl border-2 rounded-md w-80 h-12 hover:text-soft-red hover:border-soft-red">
                  LOGIN
                </button>
              </li>
              <li>
                {!darkMode ? (
                  <MdDarkMode
                    className="h-[50px] w-[50px] text-white  "
                    onClick={toggleDarkMode}
                  />
                ) : (
                  <MdLightMode
                    className="h-[50px] w-[50px] text-white  "
                    onClick={toggleDarkMode}
                  />
                )}
              </li>
              <li className="absolute bottom-14">
                <div className="flex flex-row gap-14 text-white">
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare
                      className="h-[30px] w-[30px] hover:text-soft-red 
            dark:hover:text-dark-soft-red"
                    />
                  </a>
                  <a href="https://twitter.com/">
                    <FaTwitter
                      className="h-[30px] w-[30px] hover:text-soft-red 
            dark:hover:text-dark-soft-red"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <img
                src="./src/assets/images/icon-hamburger.svg"
                alt="open-menu"
                className="w-4 h-4 hover:cursor-pointer"
              ></img>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
