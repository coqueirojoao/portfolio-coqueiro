import { Header } from "@/components/ui/header";
import { Hero } from "@/components/sections/hero";
import { TechCarousel } from "@/components/sections/tech-carousel";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TechCarousel />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
