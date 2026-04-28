import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(shopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer group"
      to={`/product/${id}`}
      role="listitem"
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition-transform duration-500 ease-in-out w-full"
          src={image[0]}
          alt={name}
          loading="lazy"
          width="300"
          height="360"
        />
      </div>
      <p className="pt-3 pb-1 text-sm group-hover:text-black transition-colors">
        {name}
      </p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
