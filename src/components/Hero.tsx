
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
          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mb-8 max-w-lg mx-auto">
            <p className="text-accent-foreground font-bold text-xl mb-4">11월 챌린지(40기) 모집 마감</p>
            
            <div className="space-y-3 text-left">
              <div className="bg-background/50 rounded-md p-3">
                <p className="text-accent-foreground font-semibold mb-1">📅 진행 일정</p>
                <p className="text-accent-foreground/90 text-lg">11/10(월) ~ 11/28(금) <span className="text-sm text-accent-foreground/70">[3주]</span></p>
              </div>
              
              <div className="bg-background/50 rounded-md p-3">
                <p className="text-accent-foreground font-semibold mb-1">✍️ 신청 마감일</p>
                <p className="text-accent-foreground/90 text-lg">~11/7(금) <span className="text-sm font-semibold text-red-600">[선착순]</span></p>
              </div>
              
              <div className="bg-primary/10 border border-primary/30 rounded-md p-3">
                <p className="text-primary font-semibold text-sm">💡 기존 챌린저 할인 신청 마감</p>
                <p className="text-primary/90 font-medium">~11/5(수)</p>
              </div>
            </div>
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
