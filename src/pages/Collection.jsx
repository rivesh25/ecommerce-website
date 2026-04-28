import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import useSEO from "../hooks/useSEO";

const Collection = () => {
  const { products, search, showSearch } = useContext(shopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  useSEO(
    "All Collections — Shop Men, Women & Kids",
    "Browse our full range of premium fashion for men, women, and kids. Filter by category, type, and price. Free returns & fast delivery on every order.",
  );

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategory.includes(item.subCategory),
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilters();
        break;
    }
  };

  useEffect(() => {
    applyFilters();
  }, [category, subcategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <main className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <aside className="min-w-60" aria-label="Product filters">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 font-medium text-gray-800 uppercase tracking-widest"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </p>

        <div className={`mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          {/* Category Filter */}
          <div className="border border-gray-300 p-6 mb-5">
            <p className="mb-4 text-sm font-bold tracking-widest text-gray-800">
              CATEGORIES
            </p>
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-600">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-black cursor-pointer"
                  value={"Men"}
                  onChange={toggleCategory}
                />
                <span className="group-hover:text-black transition-colors">
                  Men
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-black cursor-pointer"
                  value={"Women"}
                  onChange={toggleCategory}
                />
                <span className="group-hover:text-black transition-colors">
                  Women
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-black cursor-pointer"
                  value={"Kids"}
                  onChange={toggleCategory}
                />
                <span className="group-hover:text-black transition-colors">
                  Kids
                </span>
              </label>
            </div>
          </div>
          {/* Subcategory Filter */}
          <div className="border border-gray-300 p-6">
            <p className="mb-4 text-sm font-bold tracking-widest text-gray-800">
              TYPE
            </p>
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-600">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-black cursor-pointer"
                  value={"Topwear"}
                  onChange={toggleSubcategory}
                />
                <span className="group-hover:text-black transition-colors">
                  Topwear
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-black cursor-pointer"
                  value={"Bottomwear"}
                  onChange={toggleSubcategory}
                />
                <span className="group-hover:text-black transition-colors">
                  Bottomwear
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-black cursor-pointer"
                  value={"Winterwear"}
                  onChange={toggleSubcategory}
                />
                <span className="group-hover:text-black transition-colors">
                  Winterwear
                </span>
              </label>
            </div>
          </div>
        </div>
      </aside>
      {/* Right Side */}
      <section className="flex-1" aria-label="Product listing">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-2xl mb-8 gap-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <label htmlFor="sort-select" className="sr-only">
            Sort products
          </label>
          <select
            id="sort-select"
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-4 py-2.5 bg-white text-gray-700 outline-none hover:border-gray-400 focus:border-black transition-colors cursor-pointer shadow-sm"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
        {/* Product Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6"
          role="list"
          aria-label={`${filterProducts.length} products`}
        >
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Collection;
