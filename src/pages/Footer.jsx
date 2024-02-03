import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-very-dark-blue h-32 w-full flex flex-row pl-44 pr-44 items-center">
      <img
        src="./src/assets/images/logo-bookmark-footer.svg"
        alt="bookmark-logo"
        className="w-auto h-8"
      ></img>
      <div className="text-white flex flex-row gap-12 text-lg ml-14">
        <span className=" hover:text-soft-red transition duration-300">
          FEATURES
        </span>
        <span className="hover:text-soft-red transition duration-300">
          PRICING
        </span>
        <span className="hover:text-soft-red transition duration-300">
          CONTACT
        </span>
      </div>
      <div className="flex flex-row gap-14 text-white ml-[52rem]">
        <a href="https://www.facebook.com/">
          <FaFacebookSquare className="h-[30px] w-[30px] hover:text-soft-red transition duration-300" />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter className="h-[30px] w-[30px] hover:text-soft-red transition duration-300" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
