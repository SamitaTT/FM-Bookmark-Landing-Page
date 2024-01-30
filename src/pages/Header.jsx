import { ButtonSmall } from "../components/button";

function Header() {
  return (
    <nav>
      <img
        src="./src/assets/images/logo-bookmark.svg"
        alt="bookmark-logo"
      ></img>
      <span className="text-blue-400 underline"> Features</span>
      <span> Pricing</span>
      <span>Contact</span>
      <ButtonSmall text="Login" />
      <ButtonSmall text="Dark Mode" />
    </nav>
  );
}

export default Header;
