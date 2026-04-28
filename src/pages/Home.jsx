import Hero from "../components/Hero";
import PromoSection from "../components/PromoSection";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import useSEO from "../hooks/useSEO";

const Home = () => {
  useSEO(
    "Premium Fashion & Apparel",
    "Shop Forever for premium quality fashion — men's, women's & kids' clothing with exclusive offers, easy returns, and fast delivery. Elevate your style today.",
  );
  return (
    <main>
      <Hero />
      <PromoSection />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </main>
  );
};

export default Home;
