import { Helmet } from 'react-helmet-async';
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Start Your Project with Alora Pixel</title>
        <meta name="description" content="Ready to dominate your space? Get in touch with Alora Pixel today. Now accepting new projects." />
      </Helmet>
      <Contact />
    </>
  );
}
