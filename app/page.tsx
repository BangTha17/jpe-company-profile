import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ServiceProduct from "@/components/sections/ServiceProduct";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServiceProduct />
      <WhyChooseUs />
      <Projects />
      <Clients />
      <CTA />
    </main>
  );
}
