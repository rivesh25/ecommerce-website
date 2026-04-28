import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import useSEO from "../hooks/useSEO";

const Contact = () => {
  useSEO(
    "Contact Us — Get in Touch",
    "Reach out to Forever for any queries, support, or career opportunities. Visit our store at 547 Joseph Street, New York or email us at contact@forever.com.",
  );
  return (
    <main>
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <section
        className="my-10 flex flex-col justify-center md:flex-row gap-16 mb-28"
        aria-label="Contact information"
      >
        <img
          className="w-full md:max-w-[480px] object-cover"
          src={assets.contact_img}
          alt="Forever store location and contact"
          loading="lazy"
          width="480"
          height="560"
        />
        <div className="flex flex-col justify-center items-start gap-6 md:w-2/4">
          <p className="font-bold text-xl text-gray-800 tracking-wide uppercase">
            Our Store
          </p>
          <address className="text-gray-500 leading-relaxed not-italic">
            547 Joseph Street <br /> New York, NY 10001
          </address>
          <address className="text-gray-500 leading-relaxed not-italic">
            Tel:{" "}
            <a
              href="tel:+15551234567"
              className="hover:text-black transition-colors"
            >
              (555) 123-4567
            </a>{" "}
            <br />
            Email:{" "}
            <a
              href="mailto:contact@forever.com"
              className="hover:text-black transition-colors"
            >
              contact@forever.com
            </a>
          </address>

          <hr className="w-full sm:w-3/4 border-gray-200 my-2" />

          <p className="font-bold text-xl text-gray-800 tracking-wide uppercase">
            Careers at Forever
          </p>
          <p className="text-gray-500 leading-relaxed">
            Learn more about our teams and job openings. We are always looking
            for passionate people.
          </p>
          <button className="mt-2 border border-black px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="flex flex-col items-center gap-4 mb-28 px-4"
        aria-label="Contact form"
      >
        <div className="text-3xl text-center pb-4">
          <Title text1={"SEND A"} text2={"MESSAGE"} />
        </div>
        <form
          className="w-full max-w-3xl flex flex-col gap-5"
          aria-label="Contact message form"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <label className="w-full flex flex-col gap-1">
              <span className="sr-only">Your Name</span>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                autoComplete="name"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black transition-colors"
                required
              />
            </label>
            <label className="w-full flex flex-col gap-1">
              <span className="sr-only">Your Email</span>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                autoComplete="email"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black transition-colors"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-1">
            <span className="sr-only">Your Message</span>
            <textarea
              placeholder="Your Message"
              name="message"
              className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black transition-colors h-48 resize-none"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-black text-white px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 hover:shadow-lg transition-all duration-300 self-center mt-4"
            onClick={(e) => e.preventDefault()}
          >
            Send Message
          </button>
        </form>
      </section>

      <NewsletterBox />
    </main>
  );
};

export default Contact;
