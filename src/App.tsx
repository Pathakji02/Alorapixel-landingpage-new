/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import CustomCursor from "./components/CustomCursor";
import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MarqueeTicker from "./components/MarqueeTicker";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Background & Overlays */}
      <CustomCursor />
      <ParticleCanvas />
      
      {/* App Structure */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <MarqueeTicker />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

