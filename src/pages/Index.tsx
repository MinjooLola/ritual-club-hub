
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChallengeList from "@/components/ChallengeList";
import Pricing from "@/components/Pricing";
import ApplicationForm from "@/components/ApplicationForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SetupSampleUsers from "@/components/SetupSampleUsers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ChallengeList />
      <Pricing />
      <Testimonials />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
