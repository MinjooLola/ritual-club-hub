
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChallengeList from "@/components/ChallengeList";
import Community from "@/components/Community";
import ApplicationForm from "@/components/ApplicationForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ChallengeList />
      <Community />
      <ApplicationForm />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
