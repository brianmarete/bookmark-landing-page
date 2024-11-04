import ChromeLogo from "../assets/logo-chrome.svg";
import FirefoxLogo from "../assets/logo-firefox.svg";
import OperaLogo from "../assets/logo-opera.svg";

const browsers = [
  {
    name: "Chrome",
    minVer: "62",
    logo: ChromeLogo,
  },
  {
    name: "Firefox",
    minVer: "55",
    logo: FirefoxLogo,
  },
  {
    name: "Opera",
    minVer: "46",
    logo: OperaLogo,
  },
];

const Card = ({
  classname,
  name,
  minVer,
  logo,
}: {
  classname: string;
  name: string;
  minVer: string;
  logo: string;
}) => {
  return (
    <div
      className={`${classname} inline-flex flex-col items-center justify-between py-6 rounded-lg shadow-2xl space-y-5 h-80 max-w-64`}
    >
      <img src={logo} alt="chrome" className="max-w-32" />
      <div>
        <p className="font-medium">Add to {name}</p>
        <small className="text-grayish-blue">Minimum version {minVer}</small>
      </div>
      <div className="bg-dots-pattern h-2 w-full bg-repeat-x bg-center"></div>
      <button className="bg-soft-blue text-white px-8 py-3 rounded text-sm shadow-md mx-4">
        Add & Install Extension
      </button>
    </div>
  );
};
const Download = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-medium my-3">Download the extension</h2>
        <p className="text-grayish-blue text-lg max-w-xl text-center my-3">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favorite you'd like us to prioritize.
        </p>
      </div>
      <div className="mb-32 mt-8 md:max-w-4xl md:mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 justify-items-center ">
        <Card classname="md:my-0" {...browsers[0]} />
        <Card classname="md:my-8" {...browsers[1]} />
        <Card classname="md:my-16" {...browsers[2]} />
      </div>
    </>
  );
};

export default Download;
