
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Calendar, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "명확한 목표",
      description: "개인의 성장 목표를 설정하고 체계적으로 달성해나갑니다"
    },
    {
      icon: Users,
      title: "함께하는 동반자",
      description: "같은 목표를 가진 사람들과 함께 동기부여를 받으며 성장합니다"
    },
    {
      icon: Calendar,
      title: "규칙적인 모임",
      description: "정기적인 모임을 통해 지속가능한 습관을 만들어갑니다"
    },
    {
      icon: Heart,
      title: "따뜻한 커뮤니티",
      description: "서로를 격려하고 응원하는 따뜻한 분위기의 커뮤니티입니다"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            리추얼클럽이란?
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            일상의 작은 변화부터 시작하여 더 나은 삶을 만들어가는 성장 커뮤니티입니다. 
            혼자서는 어려운 변화를 함께하는 동반자들과 만들어가세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-scale transition-all duration-300 border-border">
              <CardContent className="pt-8 pb-6">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-3xl font-bold text-foreground mb-6">
                왜 리추얼클럽인가요?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">체계적인 목표 관리:</strong> 개인의 목표를 세분화하고 단계별로 달성할 수 있도록 도와드립니다
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">동기부여와 책임감:</strong> 함께하는 멤버들과의 약속을 통해 꾸준함을 유지할 수 있습니다
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">지속가능한 변화:</strong> 급진적인 변화가 아닌 천천히 확실한 변화를 추구합니다
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">30일</div>
              <p className="text-muted-foreground mb-4">함께하는 변화의 여정</p>
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">참여자 만족도</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
