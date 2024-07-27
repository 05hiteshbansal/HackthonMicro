import AboutSection from "@/components/HomeComponents/AboutSection";
import FeaturesSection from "@/components/HomeComponents/FeatureSelection";
import HeroSection from "@/components/HomeComponents/HeroSection";
import CustomNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <Footer color={"white"} />
    </>
  );
}
