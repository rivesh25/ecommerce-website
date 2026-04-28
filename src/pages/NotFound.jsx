import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

/**
 * 404 Not Found page
 * Shown for any unmatched routes. Prevents unknown URLs from returning 200 OK.
 */
const NotFound = () => {
  useSEO(
    "Page Not Found",
    "The page you are looking for does not exist. Return to the Forever homepage and continue shopping.",
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] border-t pt-20 text-center px-4">
      <p className="text-[120px] sm:text-[160px] font-bold text-gray-100 leading-none select-none">
        404
      </p>
      <h1 className="prata-regular text-3xl sm:text-4xl text-gray-800 -mt-6 mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-500 mb-10 max-w-md leading-relaxed">
        Oops! The page you are looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <Link
        to="/"
        className="bg-black text-white px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
      >
        Return to Home
      </Link>
    </main>
  );
};

export default NotFound;
