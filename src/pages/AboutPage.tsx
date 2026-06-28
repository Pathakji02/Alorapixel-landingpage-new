import { Helmet } from 'react-helmet-async';
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Alora Pixel | Our Mission & Vision</title>
        <meta name="description" content="Discover Alora Pixel. We help brands stand out in crowded markets by blending aesthetic elegance with data-driven strategy." />
      </Helmet>
      <About />
    </>
  );
}
