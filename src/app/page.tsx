import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <ContactSection />
      <Footer />
    </>
  );
}
