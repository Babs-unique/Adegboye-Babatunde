import { Helmet } from "react-helmet-async";
import { getSEOConfig, PERSON_SCHEMA, WEBSITE_SCHEMA } from "@/config/seoConfig";

/**
 * SEOMeta Component
 * Handles all meta tags, Open Graph, and structured data for a page
 */
export const SEOMeta = ({ page = "DEFAULT", schema = null }) => {
  const config = getSEOConfig(page);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />
      <meta name="author" content="Babatunde Adegboye" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={config.canonical} />

      {/* Title */}
      <title>{config.title}</title>

      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:type" content={config.ogType || "profile"} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={config.ogImage} />
      <meta property="og:url" content={config.canonical} />
      <meta property="og:site_name" content="Babatunde Adegboye" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={config.ogImage} />
      <meta name="twitter:creator" content="@DevTunde5v" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#20B2A6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Google Search Console Verification (Replace with your verification code) */}
      {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" /> */}

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(PERSON_SCHEMA)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(WEBSITE_SCHEMA)}
      </script>

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
