import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const heroData = [
  {
    id: 1,
    title: "Latest Arrivals",
    subtitle: "OUR BESTSELLER",
    image: assets.hero_img,
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    title: "Exclusive Offers",
    subtitle: "CURRENT DEALS",
    image: assets.hero_img2,
    buttonText: "EXPLORE NOW",
  },
  {
    id: 3,
    title: "Trending Outfits",
    subtitle: "POPULAR RIGHT NOW",
    image: assets.hero_img3,
    buttonText: "DISCOVER MORE",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroData.length) % heroData.length,
    );
  };

  return (
    <div className="relative border border-gray-400 overflow-hidden group">
      <div className="grid">
        {heroData.map((data, index) => (
          <div
            key={data.id}
            className={`col-start-1 row-start-1 flex flex-col sm:flex-row w-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Hero Left Side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0 bg-white">
              <div className="text-[#414141]">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                  <p className="font-medium text-sm md:text-base tracking-widest">
                    {data.subtitle}
                  </p>
                </div>
                <h1 className="prata-regular text-4xl sm:text-5xl lg:text-5xl leading-tight py-2 sm:py-4">
                  {data.title}
                </h1>
                <div className="flex items-center gap-2 mt-2 sm:mt-0 cursor-pointer group/btn">
                  <p className="font-semibold text-sm md:text-base group-hover/btn:text-black transition-colors duration-300">
                    {data.buttonText}
                  </p>
                  <p className="w-8 md:w-11 h-[1px] bg-[#414141] group-hover/btn:w-12 md:group-hover/btn:w-16 group-hover/btn:bg-black transition-all duration-300 ease-in-out"></p>
                </div>
              </div>
            </div>
            {/* Hero Right Side */}
            <div className="w-full sm:w-1/2 overflow-hidden flex">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                src={data.image}
                alt="Hero"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-md z-20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-md z-20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
              index === currentIndex ? "bg-[#414141]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
