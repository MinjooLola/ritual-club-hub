
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar, Video, Moon } from "lucide-react";
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
      id: "reading",
      title: "독서리추얼챌린지",
      description: "인생을 바꾸는 독서 & 기록 습관 만들기",
      time: "주 5회 최소 30분 이상 책 읽기",
      type: "독서 인증 챌린지",
      color: "bg-indigo-50 border-indigo-200",
      icon: <Moon className="w-6 h-6 text-indigo-600" />
    },
    {
      id: "english",
      title: "영어리추얼챌린지",
      description: "각자 원하는 영어공부 방식으로 실력 향상",
      time: "주 5회 최소 30분 이상 영어공부",
      type: "영어공부 인증 챌린지",
      color: "bg-blue-50 border-blue-200",
      icon: <Video className="w-6 h-6 text-blue-600" />
    },
    {
      id: "exercise",
      title: "운동리추얼챌린지",
      description: "꾸준한 운동 습관으로 건강한 몸 만들기",
      time: "주 3회 최소 30분 이상 운동 + 주 2회 건강한 식단 인증",
      type: "운동 인증 챌린지",
      color: "bg-green-50 border-green-200",
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      id: "writing",
      title: "기록리추얼챌린지",
      description: "글쓰기를 통한 생각 정리와 성찰",
      time: "주 3회 이상 글쓰기(Output) + 주 2회 글읽기(Input)",
      type: "글쓰기 인증 챌린지",
      color: "bg-purple-50 border-purple-200",
      icon: <Calendar className="w-6 h-6 text-purple-600" />
    },
    {
      id: "declutter",
      title: "정리리추얼챌린지",
      description: "내 공간을 정돈하고 불필요한 것들을 비우며 여유 찾기",
      time: "주 5회 공간 정리 or 비움 인증",
      type: "정리 인증 챌린지",
      color: "bg-pink-50 border-pink-200",
      icon: <Users className="w-6 h-6 text-pink-600" />
    },
    {
      id: "night",
      title: "나이트리추얼챌린지",
      description: "자기 전 하루를 마무리하는 나만의 리추얼 만들기",
      time: "평일(월~금) 밤 10:30~11:00",
      type: "온라인 Live 진행",
      color: "bg-slate-50 border-slate-200",
      icon: <Moon className="w-6 h-6 text-slate-600" />
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
            7가지 다양한 챌린지 중 원하는 것을 선택해서 참여할 수 있습니다
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
            <div className="text-center">
              <h5 className="text-xl font-semibold text-purple-600 mb-4">39기 리추얼클럽 챌린저 모집중</h5>
              <p className="text-muted-foreground">10/10(목) ~ 10/30(수)</p>
              <p className="text-sm text-muted-foreground mt-2">(3주 프로그램)</p>
              <p className="text-sm text-muted-foreground">(*OT는 10/9(수) 저녁 중 시간 조율하여 진행)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeList;
