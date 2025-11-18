import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickActionBar from "@/components/QuickActionBar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductCategories from "@/components/ProductCategories";
import ProcessTimeline from "@/components/ProcessTimeline";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <QuickActionBar />
      <ServicesSection />
      <WhyChooseUs />
      <ProductCategories />
      <ProcessTimeline />
      <StatsCounter />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
