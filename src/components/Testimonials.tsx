
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "올리 (임민지)",
      age: "20대 직장인", 
      content: "모닝리추얼 챌린지를 통해 새벽 6시 기상이 가능해졌어요. 혼자서는 절대 할 수 없었던 일이 리추얼클럽과 함께하니까 가능했습니다. 하루를 여유롭게 시작할 수 있게 되었어요.",
      rating: 5,
      link: "https://blog.naver.com/minjow1996/223495565888"
    },
    {
      name: "디노 (요나)",
      age: "20대",
      content: "나이트리추얼 독서모임을 통해 독서습관이 생겼어요. 매일 밤 함께 책을 읽으며 많은 인사이트를 얻었고, 수면의 질도 좋아졌습니다. 정말 의미있는 시간이었어요.",
      rating: 5,
      link: "https://blog.naver.com/luckyto_u/223369771120"
    },
    {
      name: "쨈 (이재림)",
      age: "20대",
      content: "리추얼클럽을 통해 꾸준한 습관을 만들 수 있었어요. 함께하는 동반자들이 있어서 포기하지 않고 끝까지 할 수 있었습니다. 정말 많은 변화가 있었어요!",
      rating: 5,
      link: "https://m.blog.naver.com/ljrim3398/223372089399"
    },
    {
      name: "감짱",
      age: "30대",
      content: "8월 리추얼 챌린지 참여 결과 정말 만족스러웠어요. 체계적인 프로그램과 함께하는 동료들 덕분에 새로운 습관을 만들 수 있었습니다.",
      rating: 5,
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

      </div>
    </section>
  );
};

export default Testimonials;
