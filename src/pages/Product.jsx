import { useParams } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import { useContext, useState, useEffect, useCallback } from "react";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import useSEO from "../hooks/useSEO";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addtoCart } = useContext(shopContext);
  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  // Dynamic SEO: update title & description per product
  useSEO(
    productsData ? productsData.name : "Product",
    productsData
      ? `Buy ${productsData.name} — ${productsData.description ? productsData.description.slice(0, 130) + "..." : "Premium quality fashion at Forever."}`
      : "Explore premium quality clothing at Forever.",
  );

  const fetchProductsData = useCallback(() => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductsData(found);
      setImage(found.image[0]);
    }
  }, [products, productId]);

  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  return productsData ? (
    <main className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      <article
        className="flex gap-12 sm:gap-12 flex-col sm:flex-row"
        itemScope
        itemType="https://schema.org/Product"
      >
        {/* left side - Product Images */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row w-full sm:w-[38%]">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[16%] w-[14%] no-scrollbar">
            {productsData.image.map((item, i) => {
              return (
                <img
                  onClick={() => setImage(item)}
                  key={i}
                  src={item}
                  alt={`${productsData.name} - view ${i + 1}`}
                  className={`sm:w-full w-[24%] sm:mb-3 shrink-0 cursor-pointer object-cover transition-all duration-300 ${image === item ? "border border-black opacity-100 shadow-sm" : "border border-transparent opacity-60 hover:opacity-100"}`}
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto object-cover"
              src={image}
              alt={`${productsData.name} — main product image`}
              itemProp="image"
            />
          </div>
        </div>
        {/* right side - Product Info */}
        <div className="flex-1">
          <h1
            className="prata-regular text-2xl sm:text-3xl mt-2 text-gray-800 tracking-wide"
            itemProp="name"
          >
            {productsData.name}
          </h1>
          <div
            className="flex items-center gap-1 mt-3"
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <meta itemProp="ratingValue" content="4" />
            <meta itemProp="reviewCount" content="122" />
            <img className="w-3.5 sm:w-4" src={assets.star_icon} alt="Star" />
            <img className="w-3.5 sm:w-4" src={assets.star_icon} alt="Star" />
            <img className="w-3.5 sm:w-4" src={assets.star_icon} alt="Star" />
            <img className="w-3.5 sm:w-4" src={assets.star_icon} alt="Star" />
            <img
              className="w-3.5 sm:w-4"
              src={assets.star_dull_icon}
              alt="Half star"
            />
            <p className="pl-2 text-gray-500 text-sm">(122 Reviews)</p>
          </div>
          <p
            className="prata-regular mt-6 text-3xl sm:text-4xl text-gray-900"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="USD" />
            <meta itemProp="price" content={productsData.price} />
            <meta
              itemProp="availability"
              content="https://schema.org/InStock"
            />
            {currency}
            {productsData.price}
          </p>
          <p
            className="text-gray-500 mt-5 md:w-4/5 leading-relaxed"
            itemProp="description"
          >
            {productsData.description}
          </p>

          <div className="flex flex-col gap-4 my-10">
            <p className="font-medium text-gray-800 tracking-wide uppercase text-sm">
              Select Size
            </p>
            <div className="flex gap-3">
              {productsData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`py-2 px-5 font-medium border cursor-pointer transition-all duration-300 ${size === item ? "border-black bg-black text-white shadow-md" : "border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-200"}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addtoCart(productsData._id, size)}
            className="bg-black text-white px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 hover:shadow-lg transition-all duration-300 active:bg-gray-900"
          >
            ADD TO CART
          </button>

          <hr className="mt-10 sm:w-4/5 border-gray-200" />
          <div className="text-sm text-gray-500 mt-6 flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>{" "}
              100% Original Product.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>{" "}
              Cash on delivery is available on this product.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>{" "}
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </article>

      {/* Description and Review Section */}
      <div className="mt-20 mb-16">
        <div className="flex border-b border-gray-300">
          <b className="px-6 py-4 text-sm font-semibold text-black border-b-2 border-black cursor-pointer uppercase tracking-widest -mb-[1px]">
            Description
          </b>
          <p className="px-6 py-4 text-sm text-gray-500 cursor-pointer hover:text-black transition-colors uppercase tracking-widest">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-6 px-6 py-8 text-sm text-gray-500 leading-relaxed bg-[#fafafa] border border-t-0 border-gray-100">
          <p>
            This premium garment is crafted with meticulous attention to detail,
            offering an unparalleled blend of comfort, durability, and
            contemporary style. Designed to seamlessly integrate into your daily
            wardrobe, it features high-quality materials that ensure a perfect
            fit and long-lasting wear. Whether you're dressing up for a special
            occasion or keeping it casual, this piece provides versatile
            elegance.
          </p>
          <p>
            Our commitment to sustainability and ethical manufacturing means you
            can feel as good about wearing our products as you look in them.
            Experience the difference of true craftsmanship and elevate your
            personal style with this essential addition to your collection.
          </p>

          <div>
            <p className="text-black font-semibold mb-4 uppercase tracking-widest">
              Product Specifications
            </p>
            <table className="w-full text-left border-collapse border border-gray-200">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 bg-gray-50 font-medium w-1/3">Material</td>
                  <td className="p-3">
                    100% Premium Cotton / Sustainable Blends
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 bg-gray-50 font-medium">Fit Type</td>
                  <td className="p-3">Regular / Slim Fit / Comfort Fit</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 bg-gray-50 font-medium">Weight</td>
                  <td className="p-3">Approx. 250g - 350g (Depends on size)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 bg-gray-50 font-medium">Color Range</td>
                  <td className="p-3">Solid Colors / Minimalist Patterns</td>
                </tr>
                <tr>
                  <td className="p-3 bg-gray-50 font-medium">Season</td>
                  <td className="p-3">All Season / Autumn-Winter Collection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Engineered with breathable, moisture-wicking fabrics, it guarantees
            all-day freshness and unrestricted movement. The subtle, modern
            silhouette is complemented by reinforced stitching and premium
            hardware, proving that exceptional design lies in the details. Pair
            it with your favorite denim or tailored trousers for an effortlessly
            sophisticated look.
          </p>
          <p>
            <b>Care Instructions:</b> Machine wash cold with like colors. Tumble
            dry on low heat or hang to preserve the fabric's integrity. Do not
            bleach. Iron on low setting if necessary.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productsData.category}
        subCategory={productsData.subCategory}
      />
    </main>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
