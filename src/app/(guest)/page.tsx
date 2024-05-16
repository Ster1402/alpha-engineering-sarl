import AboutUs from "@/components/about-us/AboutUs";
import Banner from "@/components/banner/Banner";
import Partners from "@/components/partners/Partners";
import ServicesSection from "@/components/services/ServicesSection";
import VisionSection from "@/components/vision/VisionSection";

export default function Home() {
  return (
    <article>
      <Banner />
      <AboutUs />
      <ServicesSection />
      <VisionSection />
      <Partners />
    </article>
  );
}
