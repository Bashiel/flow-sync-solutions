import NavBar from "@/components/landing/NavBar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import PricingSection from "@/components/landing/PricingSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => (
  <>
    <NavBar />
    <main>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
    </main>
    <FooterSection />
  </>
);

export default Index;
