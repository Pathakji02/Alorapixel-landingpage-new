import { Helmet } from 'react-helmet-async';
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Web Development, Design & Marketing</title>
        <meta name="description" content="Explore our premium services including Web Development, Brand Design, and SEO Strategies. Craft. Strategy. Results." />
      </Helmet>
      <Services />
    </>
  );
}
