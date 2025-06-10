
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToApplication = () => {
    const element = document.getElementById('application');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            더 나은 나를 위한 
            <span className="text-primary block mt-2">리추얼클럽</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto">
            함께 성장하고, 새로운 습관을 만들어가는 특별한 여정에 참여하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              onClick={scrollToApplication}
              className="text-lg px-8 py-6 hover-scale"
            >
              지금 신청하기
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 hover-scale"
            >
              자세히 알아보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
