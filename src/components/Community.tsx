
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Star, Gift } from "lucide-react";

const Community = () => {
  const benefits = [
    {
      icon: Users,
      title: "온오프라인 네트워킹",
      description: "리추얼클럽 멤버들과의 정기 모임 및 네트워킹 행사 참여"
    },
    {
      icon: Calendar,
      title: "전문가 강연",
      description: "리추얼 전문가 및 각 분야 연사들의 특별 강연 참여 기회"
    },
    {
      icon: Gift,
      title: "챌린지 참여 할인",
      description: "매달 챌린지 참여 시 멤버 전용 할인 혜택 제공"
    },
    {
      icon: Star,
      title: "우선 참여권",
      description: "신규 챌린지 및 특별 프로그램 우선 참여 기회"
    }
  ];

  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            커뮤니티 멤버십
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            챌린지 1회 이상 참여하면 커뮤니티 멤버가 되어 특별한 혜택을 누릴 수 있습니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary mb-2">
                멤버십 가입 조건
              </CardTitle>
              <p className="text-muted-foreground">
                리추얼클럽 챌린지 1회 이상 완주 시 자동으로 커뮤니티 멤버가 됩니다
              </p>
            </CardHeader>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-xl p-8 max-w-md mx-auto border border-border">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <p className="text-muted-foreground mb-4">현재 커뮤니티 멤버</p>
            <div className="text-2xl font-bold text-primary mb-2">매월</div>
            <p className="text-muted-foreground">정기 모임 및 강연</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
