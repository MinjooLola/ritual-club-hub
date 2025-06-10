
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "김민지",
      age: "30대 직장인",
      content: "혼자서는 절대 할 수 없었던 운동 습관을 리추얼클럽을 통해 만들었어요. 함께하는 동료들이 있어서 포기하지 않을 수 있었습니다.",
      rating: 5
    },
    {
      name: "이준호",
      age: "20대 학생",
      content: "새벽 기상과 독서 습관을 만들고 싶었는데, 클럽 멤버들과 함께하니 자연스럽게 습관이 되었어요. 정말 감사합니다!",
      rating: 5
    },
    {
      name: "박소영",
      age: "40대 프리랜서",
      content: "단순히 습관을 만드는 것을 넘어서 삶의 질이 전반적으로 향상되었습니다. 좋은 사람들과 함께할 수 있어서 더욱 의미있었어요.",
      rating: 5
    },
    {
      name: "최준영",
      age: "30대 창업가",
      content: "바쁜 일상 속에서도 꾸준히 자기계발을 할 수 있는 방법을 찾았습니다. 리추얼클럽 덕분에 더 체계적인 삶을 살게 되었어요.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            멤버들의 이야기
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            리추얼클럽을 통해 변화를 경험한 멤버들의 실제 후기입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover-scale transition-all duration-300">
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
            <p className="text-muted-foreground mb-4">참여자 만족도</p>
            <div className="text-2xl font-bold text-primary mb-2">4.9/5.0</div>
            <p className="text-muted-foreground">평균 평점</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
