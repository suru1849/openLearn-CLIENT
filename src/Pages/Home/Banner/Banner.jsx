import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="p-6 py-12 bg-violet-400 text-gray-900 my-3">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracki font-bold">
            Up to
            <br className="sm:hidden" />
            50% Off
          </h2>
          <div className="space-x-1 text-center py-2 lg:py-0">
            <span>On every enroll in</span>
            <span className="font-bold text-lg">&apos;openLEARN&apos;</span>
          </div>
          <Link
            to="/signup"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400"
          >
            enroll now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
