import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialsHeader from "@/assets/testimonials-header.png";

const Testimonials = () => {
  const testimonials = [
    {
      title: "모닝리추얼 챌린지 후기",
      link: "https://blog.naver.com/minjow1996/223495565888"
    },
    {
      title: "영어리추얼챌린지 후기",
      link: "https://blog.naver.com/minjow1996/223830499174"
    },
    {
      title: "나이트리추얼챌린지 참여후기",
      link: "https://blog.naver.com/luckyto_u/223369771120"
    },
    {
      title: "나이트리추얼챌린지 참여후기",
      link: "https://m.blog.naver.com/ljrim3398/223372089399"
    },
    {
      title: "운동리추얼챌린지 & 기록리추얼챌린지 후기",
      link: "https://blog.naver.com/gamzzang-/223988087412"
    },
    {
      title: "나이트리추얼챌린지 참여후기",
      link: "https://blog.naver.com/heavenlee63/224023811675"
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

        <div className="mb-12">
          <img 
            src={testimonialsHeader} 
            alt="참가자 후기 모음" 
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
          />
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
