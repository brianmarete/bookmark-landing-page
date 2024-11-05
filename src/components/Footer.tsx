import Logo from "../assets/logo-bookmark-white.svg";
import { ImFacebook2, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-very-dark-blue w-full">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="py-6">
          <img src={Logo} alt="" className="md:mr-14 text-2xl md:inline" />
          <ul className="inline-block space-x-12 uppercase text-xs tracking-widest  text-grayish-blue">
            <li className="inline">
              <a href="#" className="hover:text-soft-red">
                features
              </a>
            </li>
            <li className="inline">
              <a href="#" className="hover:text-soft-red">
                pricing
              </a>
            </li>
            <li className="inline">
              <a href="#" className="hover:text-soft-red">
                contact
              </a>
            </li>
          </ul>
        </div>
        <div className="py-6">
          <ImFacebook2 className="md:mr-14 text-2xl text-white md:inline hover:text-soft-red" />
          <ImTwitter className="text-2xl  text-white md:inline hover:text-soft-red" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
