import { ButtonRed } from "../components/Button";
import "../index.css";

function Navbar() {
  return (
    <nav className="w-full h-44 flex flex-row justify-between pl-44 pr-44 items-center">
      <img
        src="./src/assets/images/logo-bookmark.svg"
        alt="bookmark-logo"
        className="w-auto h-8"
      ></img>
      <div className="text-very-dark-blue flex flex-row gap-12 text-lg items-center">
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
      </div>
    </nav>
  );
}

export default Navbar;
