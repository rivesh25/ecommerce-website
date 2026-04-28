import { assets } from "../assets/assets";

import Title from "./Title";

const OurPolicy = () => {
  return (
    <div className="py-20">
      <div className="text-center text-3xl mb-12">
        <Title text1={"OUR"} text2={"PROMISE"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          We are committed to providing you with the best shopping experience
          possible.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-xs sm:text-sm md:text-base text-gray-700">
        <div className="flex flex-col items-center p-6 sm:p-8 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer group">
          <img
            src={assets.exchange_icon}
            alt="exchange"
            className="w-12 m-auto mb-5 transform transition-transform duration-300 group-hover:-translate-y-2"
          />
          <p className="font-semibold text-gray-800 tracking-wide">
            Easy Exchange
          </p>
          <p className="text-gray-500 mt-2">
            We offer a simple and hassle-free exchange process.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 sm:p-8 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer group">
          <img
            src={assets.quality_icon}
            alt="quality"
            className="w-12 m-auto mb-5 transform transition-transform duration-300 group-hover:-translate-y-2"
          />
          <p className="font-semibold text-gray-800 tracking-wide">
            7 Days Return
          </p>
          <p className="text-gray-500 mt-2">
            Return your items within 7 days for a full refund.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 sm:p-8 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer group">
          <img
            src={assets.support_img}
            alt="support"
            className="w-12 m-auto mb-5 transform transition-transform duration-300 group-hover:-translate-y-2"
          />
          <p className="font-semibold text-gray-800 tracking-wide">
            24/7 Support
          </p>
          <p className="text-gray-500 mt-2">
            Our dedicated team provides 24/7 customer support.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 sm:p-8 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer group">
          <img
            src={assets.cart_icon}
            alt="delivery"
            className="w-12 m-auto mb-5 transform transition-transform duration-300 group-hover:-translate-y-2"
          />
          <p className="font-semibold text-gray-800 tracking-wide">
            Fast Delivery
          </p>
          <p className="text-gray-500 mt-2">
            Enjoy quick and secure shipping on all your orders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
