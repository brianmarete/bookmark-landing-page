const Newsletter = () => {
  return (
    <>
      <div className="bg-soft-blue w-full h-80">
        <div className="flex flex-col items-center justify-center space-y-6 h-full max-w-md mx-auto my-12">
          <p className="text-xs text-white uppercase tracking-[0.3em]">
            35,000+ already joined
          </p>
          <p className="text-white text-4xl font-normal text-center">
            Stay up to date with what we're doing
          </p>
          <form className="grid grid-cols-1 md:grid-cols-[minmax(280px,1fr)_auto] gap-4 content-start min-w-80">
            <input
              type="email"
              className="w-full h-12 rounded-md px-4"
              placeholder="Enter your email address"
            />
            <button className="bg-soft-red text-white px-8 py-3 rounded text-sm shadow-md">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
