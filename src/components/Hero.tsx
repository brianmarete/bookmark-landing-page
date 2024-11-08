import HeroImg from "../assets/illustration-hero.svg";

const Hero = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:mb-8 relative overflow-y-visible overflow-x-hidden">
        <div className="bg-soft-blue absolute right-0 top-16 h-48 w-3/4 translate-x-1 rounded-l-full -z-10 md:top-2/3 md:h-1/2 md:w-3/5 md:-translate-y-1/2 md:translate-x-1/3 " />
        <div className="xl:ml-36 md:ml-24 md:mb-12 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl capitalize font-medium ">
            A Simple Bookmark Manager
          </h1>
          <p className="text-grayish-blue text-base md:text-xl my-5 mx-8 md:mx-0">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="font-medium space-x-3">
            <button className="bg-soft-blue text-white px-4 md:px-8 py-3 rounded text-sm shadow-md border-2 border-soft-blue hover:bg-white hover:text-soft-blue">
              Get it on Chrome
            </button>
            <button className="bg-gray-100 text-very-dark-blue px-4 md:px-8 py-3 rounded text-sm shadow-md border-2 border-gray-100 hover:border-very-dark-blue hover:bg-white">
              Get it on Firefox
            </button>
          </div>
        </div>

        <div className="order-first md:order-last">
          <img src={HeroImg} alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
