import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { VideoSection } from "@/components/landing/VideoSection";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { SpecialOfferSection } from "@/components/landing/SpecialOfferSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { OrderSection } from "@/components/landing/OrderSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <VideoSection />
      <ReviewsSection />
      <ComparisonSection />
      <SpecialOfferSection />
      <FAQSection />
      <OrderSection />
      <Footer />
    </div>
  );
};

export default Index;
