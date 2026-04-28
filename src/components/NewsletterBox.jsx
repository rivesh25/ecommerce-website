import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center py-16 px-4">
      <p className="prata-regular text-3xl md:text-4xl text-gray-800 mb-3">
        Subscribe Now & Get 5% Off
      </p>
      <p className="text-gray-500 mb-8 max-w-xl mx-auto text-sm md:text-base">
        Join our community to receive exclusive offers, early access to new
        collections, and the latest trend updates directly to your inbox.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-2xl flex items-stretch mx-auto border border-gray-300 focus-within:border-gray-800 transition-colors duration-300"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full flex-1 outline-none px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-700 bg-white placeholder-gray-400"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs sm:text-sm font-semibold tracking-widest uppercase px-6 sm:px-10 py-4 hover:bg-gray-800 transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
