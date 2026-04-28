import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { shopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate } = useContext(shopContext);

  return (
    <>
      {/* Skip to main content — accessibility & SEO signal */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to main content
      </a>

      <nav
        className="flex items-center justify-between py-5 font-medium"
        aria-label="Main navigation"
      >
        <Link to="/" aria-label="Forever — Home">
          <img src={assets.logo} alt="Forever logo" className="w-36" />
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700" role="list">
          <li>
            <NavLink
              to="/"
              className="flex flex-col items-center gap-1"
              aria-label="Home"
            >
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              className="flex flex-col items-center gap-1"
              aria-label="Collection"
            >
              <p>COLLECTION</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="flex flex-col items-center gap-1"
              aria-label="About"
            >
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="flex flex-col items-center gap-1"
              aria-label="Contact"
            >
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            aria-label="Search products"
            className="cursor-pointer"
          >
            <img
              src={assets.search_icon}
              className="w-5"
              alt=""
              aria-hidden="true"
            />
          </button>

          <div className="group relative">
            <Link to="/login" aria-label="My account">
              <img
                src={assets.profile_icon}
                className="w-5 cursor-pointer"
                alt=""
                aria-hidden="true"
              />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link
            to="/cart"
            className="relative"
            aria-label={`Shopping cart, ${getCartCount()} items`}
          >
            <img
              src={assets.cart_icon}
              className="w-5 min-w-5 cursor-pointer"
              alt=""
              aria-hidden="true"
            />
            <p
              className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]"
              aria-hidden="true"
            >
              {getCartCount()}
            </p>
          </Link>

          <button
            onClick={() => setVisible(true)}
            className="w-5 cursor-pointer sm:hidden"
            aria-label="Open mobile menu"
            aria-expanded={visible}
          >
            <img
              src={assets.menu_icon}
              className="w-5"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile sidebar */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
          aria-hidden={!visible}
        >
          <div className="flex flex-col text-gray-600">
            <button
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
              aria-label="Close mobile menu"
            >
              <img
                src={assets.dropdown_icon}
                alt=""
                aria-hidden="true"
                className="h-4 rotate-180"
              />
              <p>Back</p>
            </button>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
