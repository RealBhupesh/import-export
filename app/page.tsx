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
import Newsletter from "@/components/advanced/Newsletter";
import LiveChat from "@/components/advanced/LiveChat";
import WhatsAppButton from "@/components/advanced/WhatsAppButton";

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
      <section className="section-container bg-gray-50">
        <Newsletter />
      </section>
      <CTASection />
      <Footer />

      {/* Advanced Features */}
      <LiveChat />
      <WhatsAppButton />
    </main>
  );
}
