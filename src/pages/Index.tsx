
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ApplicationForm from "@/components/ApplicationForm";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ApplicationForm />
      <Schedule />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
