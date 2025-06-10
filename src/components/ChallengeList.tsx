
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChallengeList = () => {
  const navigate = useNavigate();

  const challenges = [
    {
      id: "morning",
      title: "모닝리추얼챌린지",
      description: "이른 아침 시간을 활용한 하루의 시작",
      time: "평일(월~금) 아침 6:00~6:30",
      type: "온라인 Live 진행",
      color: "bg-orange-50 border-orange-200",
      icon: <Clock className="w-6 h-6 text-orange-600" />
    },
    {
      id: "english",
      title: "영어리추얼챌린지",
      description: "매일 영어로 소통하며 실력 향상",
      time: "평일(월~금) 오전 7:00~7:30",
      type: "온라인 Live 진행",
      color: "bg-blue-50 border-blue-200",
      icon: <Video className="w-6 h-6 text-blue-600" />
    },
    {
      id: "exercise",
      title: "운동리추얼챌린지",
      description: "꾸준한 운동 습관으로 건강한 몸 만들기",
      time: "매일(월~금) 최소 30분",
      type: "운동 인증 챌린지",
      color: "bg-green-50 border-green-200",
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      id: "writing",
      title: "기록리추얼챌린지",
      description: "글쓰기를 통한 생각 정리와 성찰",
      time: "매일(월~금) 주 3회 이상",
      type: "글쓰기 인증 챌린지",
      color: "bg-purple-50 border-purple-200",
      icon: <Calendar className="w-6 h-6 text-purple-600" />
    },
    {
      id: "declutter",
      title: "정리리추얼챌린지",
      description: "불필요한 것들을 정리하며 미니멀 라이프",
      time: "매일(월~금) 1개 이상 버리기",
      type: "정리 인증 챌린지",
      color: "bg-pink-50 border-pink-200",
      icon: <Users className="w-6 h-6 text-pink-600" />
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            챌린지 종류
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            5가지 다양한 챌린지 중 원하는 것을 선택해서 참여할 수 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className={`${challenge.color} hover:shadow-lg transition-all duration-300 cursor-pointer`}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  {challenge.icon}
                  <span className="text-xl">{challenge.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{challenge.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{challenge.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Video className="w-4 h-4" />
                    <span>{challenge.type}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => navigate(`/challenge/${challenge.id}`)}
                  className="w-full"
                  variant="outline"
                >
                  자세히 보기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 챌린지 일정 */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
            <h4 className="text-2xl font-bold text-center mb-8">챌린지 일정</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h5 className="text-xl font-semibold text-purple-600 mb-4">6월 리추얼 챌린지 (진행 중)</h5>
                <p className="text-muted-foreground">6/2(월) OT ~ 6/20(금) 나의변화공유회</p>
                <p className="text-sm text-muted-foreground mt-2">(3주 프로그램)</p>
              </div>
              <div className="text-center">
                <h5 className="text-xl font-semibold text-purple-600 mb-4">7월 리추얼 챌린지</h5>
                <p className="text-muted-foreground">7/15(화) OT ~ 8/5(화) 나의변화공유회</p>
                <p className="text-sm text-muted-foreground mt-2">(3주 프로그램)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeList;
