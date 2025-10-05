
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToApplication = () => {
    window.open('https://forms.gle/6CLiisnp8cT4hcch7', '_blank');
  };

  const openKakaoChat = () => {
    window.open('https://open.kakao.com/o/sYVFE4zg', '_blank');
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="text-primary block">Ritual Club</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto">
            3주간의 체계적인 습관 형성 챌린지로 더 나은 나를 만들어가세요
          </p>
          
          {/* 모집 기간 강조 */}
          <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <p className="text-accent-foreground font-semibold text-lg">10월 챌린지 모집 중!</p>
            <p className="text-accent-foreground/80 mb-1">모집 마감: 10/9(목) (선착순)</p>
            <p className="text-accent-foreground/80 text-sm">*얼리버드 신청(1만원 할인) 마감: 10/7(화)</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              onClick={scrollToApplication}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              지금 신청하기
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={openKakaoChat}
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
            >
              문의하기 (카카오톡)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
