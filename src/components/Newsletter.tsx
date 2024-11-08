import { useState } from "react";
import ErrorIcon from "@/assets/icon-error.svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError(!validateEmail(value) && value !== "");
  };

  return (
    <>
      <div className="bg-soft-blue w-full h-80">
        <div className="flex flex-col items-center justify-center space-y-6 h-full max-w-md mx-auto my-12">
          <p className="text-xs text-white uppercase tracking-[0.3em]">
            35,000+ already joined
          </p>
          <p className="text-white text-2xl md:text-4xl font-normal text-center mx-2">
            Stay up-to-date with what we're doing
          </p>
          <form className="grid grid-cols-1 md:grid-cols-[minmax(280px,1fr)_auto] gap-8 md:gap-4 content-start min-w-80">
            <div className="relative">
              <input
                type="email"
                className={`w-full h-12 rounded-md px-4 ${
                  error ? "border-2 border-soft-red outline-none" : ""
                }`}
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
              />
              {error && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <img src={ErrorIcon} alt="error" />
                </div>
              )}
              {error && (
                <p className="absolute -bottom-6 w-full text-sm italic text-white bg-soft-red p-1">
                  Whoops, make sure it&apos;s an email
                </p>
              )}
            </div>

            <button className="bg-soft-red border-soft-red border-2 text-white px-8 py-3 h-fit rounded text-sm shadow-md hover:bg-white hover:text-soft-red ">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
