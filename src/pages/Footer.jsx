import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <img
        src="./src/assets/images/logo-bookmark.svg"
        alt="bookmark-logo"
      ></img>
      <span> Features</span>
      <span> Pricing</span>
      <span>Contact</span>
      <FaFacebookSquare className="h-[50px] w-[50px] color-blue-300" />
      <FaTwitter className="h-[50px] w-[50px]" />
    </footer>
  );
}

export default Footer;
