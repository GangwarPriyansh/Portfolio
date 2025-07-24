import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { CertificateSection } from "@/sections/CertificateSection";
import { Skills } from "@/sections/Skills";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div id="home">
        <Header />
      </div>
      <HeroSection />
      <div id="projects">
        <ProjectsSection />
      </div>
      <TapeSection />
      <div id="certificates">
      <CertificateSection/>
      </div>
      <Skills />
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
