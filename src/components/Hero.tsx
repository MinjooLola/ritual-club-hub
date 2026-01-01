
import { Button } from "@/components/ui/button";
import lolaum from "@/assets/lolaum-logo.png";

const Hero = () => {
  const scrollToApplication = () => {
    window.open('https://forms.gle/6CLiisnp8cT4hcch7', '_blank');
  };

  const openKakaoChat = () => {
    window.open('https://pf.kakao.com/_xhQUHn', '_blank');
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 로고 */}
          <div className="mb-6">
            <img src={lolaum} alt="Lolaum" className="h-16 md:h-20 mx-auto" />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in">
            의지가 아니라 환경으로 당신의 루틴을 완성하는
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
            <span className="text-primary">리추얼 챌린지</span>
          </h2>
          
          {/* 소개 메시지 */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              안녕하세요, 롤라움(Lolaum) 파운더 롤라입니다 :)
            </p>
            <p className="text-muted-foreground mb-4">
              매일 10분, 30분의 작은 습관들이 모여 만들어내는 변화를 3년 넘게 온 몸으로 경험하고 나니,
              계획 세우고 결심만 하다가 이루지 못했던 목표들을 이제는 모두 해낼 수 있겠다는 자신감이 생기더라고요.
            </p>
            <p className="text-foreground font-semibold">
              절대 할 수 없을 것 같아 보이는 일들도, 같이 하면 할 수 있어요!
            </p>
            <p className="text-muted-foreground mt-2">
              내 인생을 설계하는 것은 오로지 '나'라는 사실을 잊지 말고, 한번 같이 도전해봐요 👍
            </p>
          </div>
          
          {/* 모집 기간 강조 */}
          <div className="bg-primary/20 border border-primary/30 rounded-lg p-6 mb-8 max-w-lg mx-auto">
            <p className="text-foreground font-bold text-xl mb-4">1월 챌린지(42기) 모집 중!</p>
            
            <div className="space-y-3 text-left">
              <div className="bg-background/50 rounded-md p-3">
                <p className="text-foreground font-semibold mb-1">📅 진행 일정</p>
                <p className="text-foreground/90 text-lg">1/5(월) ~ 1/23(금) <span className="text-sm text-foreground/70">[3주]</span></p>
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
