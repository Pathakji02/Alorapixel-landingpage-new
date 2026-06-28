/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import CustomCursor from "./components/CustomCursor";
import GlobalEffects from "./components/GlobalEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MarqueeTicker from "./components/MarqueeTicker";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import CookieBanner from "./components/CookieBanner";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <SEO />
      {/* Background & Overlays */}
      <GlobalEffects />
      <CustomCursor />
      
      {/* App Structure */}
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<><Hero /><MarqueeTicker /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
      <CookieBanner />
    </>
  );
}

