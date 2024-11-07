import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo-bookmark.svg";
import MenuIcon from "../assets/icon-hamburger.svg";
import CloseIcon from "../assets/icon-close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const observerRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const navbar = navbarRef.current;
    const navbarHeight = navbar?.offsetHeight || 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarFixed(!entry.isIntersecting);
      },
      {
        threshold: 1,
        rootMargin: `${navbarHeight}px 0px 0px 0px`,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <>
      <header ref={navbarRef}>
        <div
          className={`md:hidden flex justify-between  bg-white p-8 transition-all duration-300 ${
            isNavbarFixed
              ? "fixed top-0 left-0 right-0 animate-slideDown shadow-md"
              : ""
          }`}
        >
          <div className="">
            <img src={Logo} alt="" />
          </div>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <img src={CloseIcon} alt="" />
            ) : (
              <img src={MenuIcon} alt="" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <nav
          className={`fixed md:hidden top-0 left-0 bottom-0 flex items-center w-full h-20 pt-4 px-16 transform transition-transform duration-200 ease-in-out z-30 ${
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
        <nav
          className={`bg-white xl:px-36 md:px-24 z-10 hidden md:flex md:justify-between md:items-center transition-all duration-300 ${
            isNavbarFixed
              ? "fixed top-0 left-0 right-0 animate-slideDown shadow-md"
              : ""
          }`}
        >
          <div className="flex justify-center py-8  w-full md:max-w-fit">
            <img src={Logo} alt="" className="mr-8 text-2xl" />
          </div>
          <ul className="leading-none space-x-12 uppercase text-sm tracking-widest">
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
            <li className="inline">
              <button className="bg-soft-red border-soft-red border-2 text-white px-8 py-3 uppercase rounded shadow-md hover:bg-white hover:text-soft-red ">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* Observer target - positioned just below the navbar */}
      <div ref={observerRef} className="h-1" />

      {/* Spacer to prevent content jump when navbar becomes fixed */}
      {isNavbarFixed && (
        <div style={{ height: navbarRef.current?.offsetHeight }} />
      )}
    </>
  );
};

export default Navbar;
