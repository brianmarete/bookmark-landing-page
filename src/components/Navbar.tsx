import { useState } from "react";
import Logo from "../assets/logo-bookmark.svg";
import MenuIcon from "../assets/icon-hamburger.svg";
import CloseIcon from "../assets/icon-close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex justify-between xl:mx-36 md:mx-24 md:mt-4 z-10">
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-8 left-8 z-40"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <img src={CloseIcon} alt="" />
        ) : (
          <img src={MenuIcon} alt="" />
        )}
      </button>
      <div className="flex justify-center py-8  w-full md:max-w-fit">
        <img src={Logo} alt="" className="mr-8 text-2xl" />
      </div>

      {/* MOBILE MENU */}
      <nav
        className={`fixed md:hidden top-0 left-0 bottom-0 flex items-center w-full h-20 bg-white pt-4 px-16 transform transition-transform duration-200 ease-in-out z-30 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex justify-around grow pb-3 font-semibold">
          <li className="inline">
            <a href="#">features</a>
          </li>
          <li className="inline">
            <a href="#">pricing</a>
          </li>
          <li className="inline">
            <a href="#">contact</a>
          </li>
          <li className="inline">
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex md:items-center">
        <ul className="leading-none space-x-12 uppercase text-sm tracking-widest">
          <li className="inline">
            <a href="#">features</a>
          </li>
          <li className="inline">
            <a href="#">pricing</a>
          </li>
          <li className="inline">
            <a href="#">contact</a>
          </li>
          <li className="inline">
            <button className="bg-soft-red text-white px-8 py-3 uppercase rounded shadow-md">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
