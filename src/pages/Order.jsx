import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "../components/Title";
import useSEO from "../hooks/useSEO";

const Order = () => {
  const { products, currency } = useContext(shopContext);
  useSEO(
    "My Orders",
    "Track and manage your Forever orders. View order status, shipping details, and delivery timelines.",
  );

  return (
    <main className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, i) => (
          <div
            key={i}
            className="py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-16 sm:w-20"
              />
              <div>
                <p className="sm:text-base font font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity : 1</p>
                  <p>Size : M</p>
                </div>
                <p className="mt-2">
                  Date : <span className="text-gray-400">26 April 2026</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready To Ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Order;
