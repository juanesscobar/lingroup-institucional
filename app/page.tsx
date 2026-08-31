import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BusinessUnits from "@/components/BusinessUnits";
import Technology from "@/components/Technology";
import Automation from "@/components/Automation";
import Process from "@/components/Process";
import WhyLinGroup from "@/components/WhyLinGroup";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <BusinessUnits />
        <Technology />
        <Automation />
        <Process />
        <WhyLinGroup />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
