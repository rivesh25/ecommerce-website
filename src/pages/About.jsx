import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import useSEO from "../hooks/useSEO";

const About = () => {
  useSEO(
    "About Us — Our Story & Mission",
    "Learn about Forever's mission to deliver premium, sustainable fashion. Discover how we curate collections that combine quality, style, and ethical craftsmanship.",
  );
  return (
    <main>
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <section
        className="my-10 flex flex-col md:flex-row gap-16"
        aria-label="About Forever"
      >
        <img
          className="w-full md:max-w-[450px] object-cover"
          src={assets.about_img}
          alt="Forever store interior showcasing premium fashion collection"
          loading="lazy"
          width="450"
          height="560"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="leading-relaxed">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of premium products
            from the comfort of their homes.
          </p>
          <p className="leading-relaxed">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality apparel that caters to every taste and
            preference. We believe that fashion should be accessible,
            sustainable, and empowering, which is why we meticulously source our
            collections from trusted designers and artisans.
          </p>
          <h2 className="text-gray-800 text-lg font-bold mt-2">Our Mission</h2>
          <p className="leading-relaxed">
            Our mission at Forever is to empower our customers with choice,
            convenience, and confidence. We're dedicated to providing a
            seamless, highly personalized shopping experience that exceeds
            expectations, from the moment you browse our catalog to the unboxing
            of your newest favorite piece.
          </p>
        </div>
      </section>

      <section aria-label="Why Choose Us">
        <div className="text-3xl py-4 mt-10">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-[#fafafa] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-gray-800 text-base font-bold">
              Quality Assurance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We meticulously select and vet each garment to ensure it meets our
              stringent standards for durability, comfort, and style.
            </p>
          </div>
          <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-[#fafafa] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-gray-800 text-base font-bold">Convenience</h3>
            <p className="text-gray-600 leading-relaxed">
              With our streamlined interface and hassle-free ordering process,
              finding your perfect look has never been easier or faster.
            </p>
          </div>
          <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-[#fafafa] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-gray-800 text-base font-bold">
              Exceptional Service
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated team of style advisors and support professionals is
              here to assist you 24/7, ensuring your absolute satisfaction.
            </p>
          </div>
        </div>
      </section>

      <NewsletterBox />
    </main>
  );
};

export default About;
