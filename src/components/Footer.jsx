import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-40 border-t border-gray-200">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 pt-16 pb-12 text-sm">
        {/* Brand column */}
        <div>
          <Link to="/">
            <img
              src={assets.logo}
              alt="Forever — Premium Fashion Store"
              className="mb-6 w-32"
            />
          </Link>
          <p className="w-full md:w-2/3 text-gray-500 leading-relaxed text-sm md:text-base">
            Forever is committed to delivering premium quality fashion that
            stands the test of time. Our collections are designed with a focus
            on modern elegance, exceptional craftsmanship, and sustainable style
            for the contemporary individual.
          </p>
        </div>

        {/* Company links */}
        <nav aria-label="Company links">
          <p className="text-lg font-semibold text-gray-900 tracking-wide mb-6">
            COMPANY
          </p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li>
              <Link
                to="/"
                className="hover:text-black hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-black hover:translate-x-1 transition-all duration-300 inline-block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/collection"
                className="hover:text-black hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Delivery Information
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-black hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact info */}
        <div>
          <p className="text-lg font-semibold text-gray-900 tracking-wide mb-6">
            GET IN TOUCH
          </p>
          <address className="not-italic flex flex-col gap-3 text-gray-600">
            <a
              href="tel:+12124567890"
              className="hover:text-black transition-colors duration-300"
            >
              +1-212-456-7890
            </a>
            <a
              href="mailto:hello@forever.com"
              className="hover:text-black transition-colors duration-300"
            >
              hello@forever.com
            </a>
            <span>123 Fashion Avenue, NY</span>
          </address>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <p className="py-6 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Forever. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
