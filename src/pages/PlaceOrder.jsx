import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { shopContext } from "../context/ShopContext";
import useSEO from "../hooks/useSEO";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(shopContext);
  useSEO(
    "Checkout — Place Your Order",
    "Complete your order securely at Forever. Enter delivery details and choose from multiple payment options including Stripe, Razorpay, and Cash on Delivery.",
  );

  return (
    <main className="flex flex-col sm:flex-row justify-between gap-12 pt-8 sm:pt-16 min-h-[80vh] border-t px-4">
      {/* Left Side - Delivery Information */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px]">
        <div className="text-3xl mb-4">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            name="fname"
            autoComplete="given-name"
            placeholder="First Name"
            className="border border-gray-300 py-3 px-5 w-full outline-none focus:border-black transition-colors"
          />
          <input
            type="text"
            name="lname"
            autoComplete="family-name"
            placeholder="Last Name"
            className="border border-gray-300 py-3 px-5 w-full outline-none focus:border-black transition-colors"
          />
        </div>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
          className="border border-gray-300 py-3 px-5 w-full outline-none focus:border-black transition-colors"
        />
        <input
          type="text"
          name="address"
          autoComplete="street-address"
          placeholder="Street"
          className="border border-gray-300 py-3 px-5 w-full outline-none focus:border-black transition-colors"
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="city"
            autoComplete="address-level2"
            placeholder="City"
            className="border border-gray-300 py-3 px-5 w-full outline-none focus:border-black transition-colors"
          />
          <input
            type="text"
            name="state"
            autoComplete="address-level1"
            placeholder="State"
            className="border border-gray-300 py-3 px-5 w-full outline-none focus:border-black transition-colors"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            name="zip"
            autoComplete="postal-code"
            placeholder="Zip Code"
            className="border border-gray-300 py-3 px-5 w-full outline-none focus:border-black transition-colors"
          />
          <input
            type="text"
            name="country"
            autoComplete="country-name"
            placeholder="Country"
            className="border border-gray-300 py-3 px-5 w-full outline-none focus:border-black transition-colors"
          />
        </div>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Phone"
          className="border border-gray-300 py-3 px-5 w-full outline-none focus:border-black transition-colors"
        />
      </div>

      {/* Right Side - Payment & Summary */}
      <div className="flex-1 max-w-[500px]">
        <div className="mt-8">
          <CartTotal />
        </div>

        {/* Payment Method Section */}
        <div className="mt-16">
          <div className="mb-6">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
          </div>
          <div className="flex gap-4 flex-col sm:flex-row flex-wrap">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-4 border border-gray-200 p-4 px-6 cursor-pointer hover:bg-[#fafafa] transition-all duration-300"
            >
              <p
                className={`min-w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${method === "stripe" ? "bg-black" : "bg-transparent"}`}
                ></span>
              </p>
              <img className="h-5 mx-2" src={assets.stripe_logo} alt="stripe" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-4 border border-gray-200 p-4 px-6 cursor-pointer hover:bg-[#fafafa] transition-all duration-300"
            >
              <p
                className={`min-w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${method === "razorpay" ? "bg-black" : "bg-transparent"}`}
                ></span>
              </p>
              <img
                className="h-5 mx-2"
                src={assets.razorpay_logo}
                alt="razorpay"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-4 border border-gray-200 p-4 px-6 cursor-pointer hover:bg-[#fafafa] transition-all duration-300"
            >
              <p
                className={`min-w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${method === "cod" ? "bg-black" : "bg-transparent"}`}
                ></span>
              </p>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mx-2">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-left mt-12">
            <button
              onClick={() => navigate("/order")}
              className="bg-black text-white px-16 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlaceOrder;
