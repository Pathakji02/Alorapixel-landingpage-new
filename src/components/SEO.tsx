import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
  const siteName = 'AloraPixel';
  const defaultTitle = 'AloraPixel | Digital Marketing Agency in Ahmedabad | SEO, Social Media & Branding';
  const defaultDescription = 'AloraPixel is a digital marketing agency in Ahmedabad offering SEO, social media management, website development, branding, Meta ads, and Google business optimization.';
  const currentTitle = title || defaultTitle;
  const currentDescription = description || defaultDescription;
  const url = 'https://alorapixel-landingpage-new-new.vercel.app/';
  const currentCanonical = canonical || url;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AloraPixel",
    "image": "https://alorapixel-landingpage-new-new.vercel.app/og-image.jpg",
    "@id": "https://alorapixel-landingpage-new-new.vercel.app/",
    "url": "https://alorapixel-landingpage-new-new.vercel.app/",
    "telephone": "+91-0000000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ahmedabad",
      "addressLocality": "Ahmedabad",
      "postalCode": "380001",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/alora_pixel/"
    ],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <link rel="canonical" href={currentCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:image" content="https://alorapixel-landingpage-new-new.vercel.app/og-image.jpg" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content="https://alorapixel-landingpage-new-new.vercel.app/og-image.jpg" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
