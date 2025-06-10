
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Schedule = () => {
  const scheduleItems = [
    {
      date: "2024년 6월 15일",
      time: "오후 2:00 - 4:00",
      title: "킥오프 미팅",
      location: "강남구 커뮤니티센터",
      description: "멤버들과의 첫 만남, 목표 설정 및 계획 수립"
    },
    {
      date: "2024년 6월 22일",
      time: "오후 2:00 - 4:00",
      title: "1주차 체크인",
      location: "온라인 (Zoom)",
      description: "첫 주 진행상황 공유 및 피드백"
    },
    {
      date: "2024년 6월 29일",
      time: "오후 2:00 - 4:00",
      title: "2주차 워크샵",
      location: "강남구 커뮤니티센터",
      description: "습관 형성 전략 워크샵 및 그룹 활동"
    },
    {
      date: "2024년 7월 6일",
      time: "오후 2:00 - 4:00",
      title: "중간 점검",
      location: "온라인 (Zoom)",
      description: "중간 성과 점검 및 동기부여 세션"
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            모임 일정
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            정기적인 모임을 통해 서로의 성장을 확인하고 격려합니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {scheduleItems.map((item, index) => (
            <Card key={index} className="border-border hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between flex-wrap gap-4">
                  <span className="text-xl text-foreground">{item.title}</span>
                  <span className="text-primary font-normal text-lg">{item.date}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <p className="text-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-12 bg-card rounded-xl p-8 border border-border text-center">
          <h4 className="text-2xl font-bold text-foreground mb-4">모임 참여 안내</h4>
          <div className="space-y-3 text-muted-foreground">
            <p>• 모든 모임은 사전 신청자에 한해 참여 가능합니다</p>
            <p>• 온라인 모임의 경우 링크는 별도로 안내드립니다</p>
            <p>• 개인 사정으로 참석이 어려운 경우 미리 연락주세요</p>
            <p>• 모임 후 간단한 네트워킹 시간도 준비되어 있습니다</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
