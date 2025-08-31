
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      title: "모닝리추얼 챌린지 후기 - 올리",
      description: "새벽 6시 기상과 함께하는 변화의 경험",
      link: "https://blog.naver.com/minjow1996/223495565888"
    },
    {
      title: "모닝리추얼 챌린지 후기 - 올리 2편",
      description: "지속된 변화와 성장의 이야기",
      link: "https://blog.naver.com/minjow1996/223830499174"
    },
    {
      title: "나이트리추얼 독서 챌린지 후기 - 디노",
      description: "독서습관 형성과 수면의 질 개선",
      link: "https://blog.naver.com/luckyto_u/223369771120"
    },
    {
      title: "리추얼클럽 참여 후기 - 쨈",
      description: "꾸준한 습관과 동반자들과의 성장",
      link: "https://m.blog.naver.com/ljrim3398/223372089399"
    },
    {
      title: "8월 리추얼 챌린지 후기 - 감짱",
      description: "체계적인 프로그램으로 만든 새로운 습관",
      link: "https://blog.naver.com/gamzzang-/223988087412"
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
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50"
              onClick={() => window.open(testimonial.link, '_blank')}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-6 h-6 fill-primary text-primary" />
                  <h4 className="font-semibold text-foreground">{testimonial.title}</h4>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {testimonial.description}
                </p>
                <div className="text-sm text-primary font-medium">
                  후기 전문 보기 →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
