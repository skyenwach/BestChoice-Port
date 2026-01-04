import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonial } from "@/components/sections/testimonial";
import { Competencies } from "@/components/sections/competencies";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <div id="about"><About /></div>
      <div id="portfolio"><Portfolio /></div>
      <Testimonial />
      <Competencies />
      <div id="services"><Services /></div>
      <Process />
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}
