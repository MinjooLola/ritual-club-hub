
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "김민지",
      age: "30대 직장인",
      content: "혼자서는 절대 할 수 없었던 새벽 6시 기상! 모닝리추얼을 통해 하루를 여유롭게 시작하는 법을 배웠어요. 이제는 6시에 일어나서 운동도 하고 독서도 하는 제가 믿기지 않아요.",
      rating: 5
    },
    {
      name: "박서연",
      age: "20대 대학생", 
      content: "영어 말하기가 너무 두려웠는데, 매일 조금씩 영어로 대화하다 보니 자신감이 생겼어요. 원어민과 대화할 때도 이제는 떨지 않아요!",
      rating: 5
    },
    {
      name: "이준호",
      age: "30대 회사원",
      content: "나이트리추얼 덕분에 스마트폰 대신 책을 읽는 습관이 생겼어요. 잠들기 전 30분이 이렇게 소중한 시간인 줄 몰랐습니다. 수면의 질도 훨씬 좋아졌어요.",
      rating: 5
    },
    {
      name: "최유진",
      age: "20대 직장인",
      content: "3주 동안 매일 글을 쓰면서 하루를 정리하는 시간이 생겼어요. 생각이 정리되고 마음도 평온해졌습니다. 이제는 글쓰기가 스트레스 해소 방법이 되었어요.",
      rating: 5
    },
    {
      name: "강동민",
      age: "30대 프리랜서",
      content: "정리리추얼을 통해 집안이 완전히 달라졌어요. 물건이 줄어드니 청소도 쉬워지고 마음도 한결 가벼워졌습니다. 미니멀 라이프의 진정한 의미를 깨달았어요.",
      rating: 5
    },
    {
      name: "한소영",
      age: "20대 취준생",
      content: "운동리추얼로 홈트레이닝 시작했는데 이제는 헬스장도 다니게 됐어요! 몸매도 변하고 자신감도 생겼습니다. 면접에서도 당당해진 제 모습을 발견했어요.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            실제 참가자 후기
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            리추얼클럽을 통해 변화를 경험한 실제 참가자들의 생생한 후기입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.age}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-xl p-8 max-w-md mx-auto border border-border">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground mb-4">참가자 만족도</p>
            <div className="text-2xl font-bold text-primary mb-2">4.9/5.0</div>
            <p className="text-muted-foreground">평균 평점</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
