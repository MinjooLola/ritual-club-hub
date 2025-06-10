
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Calendar, TrendingUp, Heart, Trophy } from "lucide-react";

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
      icon: Heart,
      title: "의미있는 참여",
      description: "참가비와 보증금은 사회공헌활동에 기부되어 더 큰 의미를 만듭니다"
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
            2022년부터 시작된 체계적인 3주 챌린지를 통해 건강한 습관을 형성하고, 
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

        {/* 참가비 & 보증금 기부 섹션 */}
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 md:p-12 border border-primary/20 shadow-lg mb-16">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-foreground mb-4">
              의미있는 참여
            </h4>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              리추얼클럽의 참가비와 보증금은 모두 사회공헌활동에 기부됩니다. 
              여러분의 습관 형성이 사회에 긍정적인 변화도 만들어냅니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">참가비</div>
              <p className="text-muted-foreground">챌린지 운영비로 사용</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">보증금</div>
              <p className="text-muted-foreground">완주 시 100% 환급</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">기부금</div>
              <p className="text-muted-foreground">사회공헌활동 지원</p>
            </div>
          </div>
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
                    <strong className="text-foreground">2022년 시작:</strong> 3년간 체계적으로 운영된 프로그램
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">누적 참가자:</strong> 400명 이상의 멤버들이 함께했습니다
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">리추얼 마스터:</strong> 10회 이상 참여한 베테랑 멤버 9명
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">최고 기록:</strong> 최대 46회 참여한 멤버까지!
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

        {/* 멤버 레벨 시스템 */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-foreground mb-4">
              멤버 레벨 시스템
            </h4>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              참여 횟수에 따라 레벨이 올라가며, 각 레벨별로 특별한 혜택을 제공합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌱</div>
                <h5 className="text-xl font-semibold text-foreground mb-2">새싹</h5>
                <p className="text-muted-foreground mb-4">1회 참여</p>
                <div className="text-2xl font-bold text-primary">45명</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔥</div>
                <h5 className="text-xl font-semibold text-foreground mb-2">습관러</h5>
                <p className="text-muted-foreground mb-4">2-9회 참여</p>
                <div className="text-2xl font-bold text-primary">19명</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🏆</div>
                <h5 className="text-xl font-semibold text-foreground mb-2">리추얼 마스터</h5>
                <p className="text-muted-foreground mb-4">10회 이상 참여</p>
                <div className="text-2xl font-bold text-primary">9명</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
