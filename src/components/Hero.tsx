import HeroImg from "../assets/illustration-hero.svg";

const Hero = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="xl:ml-36 md:ml-24 flex flex-col justify-center">
          <h1 className="text-5xl capitalize font-medium">
            A Simple Bookmark Manager
          </h1>
          <p className="text-grayish-blue text-xl my-5">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="font-medium space-x-3">
            <button className="bg-soft-blue text-white px-8 py-3 rounded text-sm shadow-md">
              Get it on Chrome
            </button>
            <button className="bg-gray-100 text-very-dark-blue px-8 py-3 rounded text-sm shadow-md">
              Get it on Firefox
            </button>
          </div>
        </div>

        <div>
          <img src={HeroImg} alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
