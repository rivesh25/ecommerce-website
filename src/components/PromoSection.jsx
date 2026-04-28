import { Link } from "react-router-dom";

const PromoSection = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-5 my-10">
      {/* Left Box */}
      <div className="flex-1 border border-gray-400 p-12 sm:p-16 flex flex-col justify-center items-center text-center cursor-pointer group hover:shadow-sm transition-all duration-300">
        <p className="font-medium text-sm md:text-base tracking-widest text-[#414141] mb-2">
          WELCOME OFFER
        </p>
        <h2 className="prata-regular text-3xl sm:text-4xl text-gray-800 mb-6 leading-relaxed">
          20% Off First Order
        </h2>
        <Link to="/login" className="flex items-center gap-2">
          <p className="font-semibold text-sm md:text-base text-gray-700 group-hover:text-black transition-colors duration-300">
            CLAIM OFFER
          </p>
          <p className="w-8 h-[1px] bg-[#414141] group-hover:w-12 group-hover:bg-black transition-all duration-300 ease-in-out"></p>
        </Link>
      </div>

      {/* Right Box */}
      <div className="flex-1 border border-gray-400 bg-[#f9f9f9] p-12 sm:p-16 flex flex-col justify-center items-center text-center cursor-pointer group hover:shadow-sm transition-all duration-300">
        <p className="font-medium text-sm md:text-base tracking-widest text-[#414141] mb-2">
          BANK OFFERS
        </p>
        <h2 className="prata-regular text-3xl sm:text-4xl text-gray-800 mb-6 leading-relaxed">
          10% Off on Credit Cards
        </h2>
        <Link to="/collection" className="flex items-center gap-2">
          <p className="font-semibold text-sm md:text-base text-gray-700 group-hover:text-black transition-colors duration-300">
            VIEW DETAILS
          </p>
          <p className="w-8 h-[1px] bg-[#414141] group-hover:w-12 group-hover:bg-black transition-all duration-300 ease-in-out"></p>
        </Link>
      </div>
    </div>
  );
};

export default PromoSection;
