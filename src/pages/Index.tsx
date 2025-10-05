
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChallengeList from "@/components/ChallengeList";
import ApplicationForm from "@/components/ApplicationForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SetupSampleUsers from "@/components/SetupSampleUsers";
import CreateAdminButton from "@/components/CreateAdminButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ChallengeList />
      <Testimonials />
      <ApplicationForm />
      
      {/* 임시: 관리자 계정 생성 버튼 */}
      <div className="container mx-auto px-4 py-8 text-center">
        <CreateAdminButton />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
