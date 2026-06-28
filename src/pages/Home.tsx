import { Helmet } from 'react-helmet-async';
import Hero from "../components/Hero";
import MarqueeTicker from "../components/MarqueeTicker";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Alora Pixel | Premium Digital Marketing & Design Agency</title>
        <meta name="description" content="Transform your ideas into impactful digital experiences. Alora Pixel is a premium creative studio specializing in intentional branding, strategic marketing, and growth-focused web design." />
      </Helmet>
      <Hero />
      <MarqueeTicker />
    </>
  );
}
