
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChallengeList from "@/components/ChallengeList";
import ApplicationForm from "@/components/ApplicationForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SetupSampleUsers from "@/components/SetupSampleUsers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <SetupSampleUsers />
      </div>
      <About />
      <ChallengeList />
      <ApplicationForm />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
