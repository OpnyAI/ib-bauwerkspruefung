import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <TrustSection />
      <Services />
      <Partners />
      <Process />
      <About />
      <Contact />
      <Footer />
      <MobileCTA />
    </div>
  );
}
