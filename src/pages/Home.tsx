import { Helmet } from 'react-helmet-async';
import Hero from "../components/Hero";
import MarqueeTicker from "../components/MarqueeTicker";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AloraPixel | Digital Marketing Agency India</title>
        <meta name="description" content="AloraPixel is a digital marketing agency in Ahmedabad offering SEO, social media marketing, branding, website development, and Meta ads services." />
        <meta name="keywords" content="digital marketing agency Ahmedabad, SEO services Ahmedabad, social media marketing, website development, branding agency, Meta ads" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AloraPixel" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="AloraPixel - Digital Marketing Agency" />
        <meta property="og:description" content="SEO, Social Media Marketing, Branding and Website Development in Ahmedabad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alorapixel-landingpage-new-new.vercel.app/" />
        <meta property="og:image" content="https://alorapixel-landingpage-new-new.vercel.app/og-image.jpg" />
      </Helmet>
      <Hero />
      <MarqueeTicker />
      <About />
      <Services />
      <Contact />
    </>
  );
}
