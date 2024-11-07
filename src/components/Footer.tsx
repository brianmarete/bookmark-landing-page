import Logo from "../assets/logo-bookmark-white-footer.svg";
import { ImFacebook2, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-very-dark-blue w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex flex-col md:flex-row md:items-center py-6">
          <img
            src={Logo}
            alt=""
            className="md:mr-14 mb-6 md:mb-0 text-2xl md:inline"
          />
          <ul className="flex flex-col items-center md:inline-block space-y-4 md:space-x-12 uppercase text-base md:text-xs tracking-widest text-grayish-blue">
            <li className="md:inline">
              <a href="#" className="hover:text-soft-red">
                features
              </a>
            </li>
            <li className="md:inline">
              <a href="#" className="hover:text-soft-red">
                pricing
              </a>
            </li>
            <li className="md:inline">
              <a href="#" className="hover:text-soft-red">
                contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex py-6">
          <ImFacebook2 className="mr-6 md:mr-14 text-2xl text-white md:inline hover:text-soft-red" />
          <ImTwitter className="text-2xl text-white md:inline hover:text-soft-red" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
