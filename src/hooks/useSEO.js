import { useEffect } from "react";

/**
 * Custom hook to dynamically update the document <title> and
 * <meta name="description"> for SEO on each page.
 *
 * @param {string} title        - Page title (will be suffixed with "| Forever")
 * @param {string} description  - Meta description for the page
 */
const useSEO = (title, description) => {
  useEffect(() => {
    // Update page title
    document.title = title
      ? `${title} | Forever`
      : "Forever — Premium Fashion & Apparel Store";

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        description || "Shop Forever for premium quality fashion.",
      );
    }

    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        title
          ? `${title} | Forever`
          : "Forever — Premium Fashion & Apparel Store",
      );
    }

    // Update OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        "content",
        description || "Shop Forever for premium quality fashion.",
      );
    }

    // Update Twitter title
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute(
        "content",
        title
          ? `${title} | Forever`
          : "Forever — Premium Fashion & Apparel Store",
      );
    }

    // Update Twitter description
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute(
        "content",
        description || "Shop Forever for premium quality fashion.",
      );
    }
  }, [title, description]);
};

export default useSEO;
