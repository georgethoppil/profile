import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CredibilityStrip />
      <AboutSection />
      <div className="h-px bg-gradient-to-r from-transparent via-[#818cf8]/20 to-transparent" />
      <ExperienceSection />
      <div className="h-px bg-gradient-to-r from-transparent via-[#06b6d4]/20 to-transparent" />
      <SkillsSection />
      <div className="h-px bg-gradient-to-r from-transparent via-[#818cf8]/20 to-transparent" />
      <ContactSection />
    </main>
  );
}
