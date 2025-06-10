
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Calendar, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "체계적인 습관 형성",
      description: "3주간 단계별로 구성된 프로그램으로 지속가능한 습관을 만듭니다"
    },
    {
      icon: Users,
      title: "함께하는 동반자",
      description: "같은 목표를 가진 사람들과 함께 동기부여를 받으며 성장합니다"
    },
    {
      icon: Calendar,
      title: "Live 진행",
      description: "모닝/영어/독서 챌린지는 매일 온라인 Live로 실시간 소통합니다"
    },
    {
      icon: TrendingUp,
      title: "검증된 성과",
      description: "80% 이상의 재참여율로 입증된 효과적인 프로그램입니다"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Ritual Club이란?
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3주간의 체계적인 챌린지를 통해 건강한 습관을 형성하고, 
            함께하는 동반자들과 성장하는 커뮤니티입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border">
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

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-3xl font-bold text-foreground mb-6">
                검증된 성과
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">누적 참가자:</strong> 약 400명의 멤버들이 함께했습니다
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">재참여율:</strong> 80% 이상의 높은 만족도를 자랑합니다
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">지속가능한 변화:</strong> 3주 후에도 계속되는 습관 형성을 돕습니다
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">400+</div>
                <p className="text-muted-foreground">누적 참가자</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">80%+</div>
                <p className="text-muted-foreground">재참여율</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3주</div>
                <p className="text-muted-foreground">체계적 프로그램</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">6종</div>
                <p className="text-muted-foreground">다양한 챌린지</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
