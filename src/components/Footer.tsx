import Logo from "../assets/logo-bookmark-white.svg";
import FacebookLogo from "../assets/icon-facebook.svg";
import TwitterLogo from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="bg-very-dark-blue w-full">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="py-6">
          <img src={Logo} alt="" className="md:mr-14 text-2xl md:inline" />
          <ul className="inline-block space-x-12 uppercase text-xs tracking-widest  text-grayish-blue">
            <li className="inline">
              <a href="#">features</a>
            </li>
            <li className="inline">
              <a href="#">pricing</a>
            </li>
            <li className="inline">
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        <div className="py-6">
          <img
            src={FacebookLogo}
            alt=""
            className="md:mr-14 text-2xl md:inline"
          />
          <img src={TwitterLogo} alt="" className="text-2xl md:inline" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
