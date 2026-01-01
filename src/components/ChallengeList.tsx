
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar, Video, Moon, BookOpen, Wallet, Languages } from "lucide-react";
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
      id: "exercise",
      title: "운동리추얼챌린지",
      description: "꾸준한 운동 습관으로 건강한 몸 만들기",
      time: "주 5회 10분 이상 운동 (주 2회 식단 인증 대체 가능)",
      type: "운동 인증 챌린지",
      color: "bg-green-50 border-green-200",
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      id: "reading",
      title: "독서리추얼챌린지",
      description: "인생을 바꾸는 독서 & 기록 습관 만들기",
      time: "주 5회 10분 이상 책 읽기 + 독서 기록",
      type: "독서 인증 챌린지",
      color: "bg-indigo-50 border-indigo-200",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />
    },
    {
      id: "english",
      title: "영어리추얼챌린지",
      description: "각자 원하는 영어공부 방식으로 실력 향상",
      time: "주 5회 10분 이상 원하는 방식으로 영어 공부",
      type: "영어공부 인증 챌린지",
      color: "bg-blue-50 border-blue-200",
      icon: <Video className="w-6 h-6 text-blue-600" />
    },
    {
      id: "spanish",
      title: "스페인어리추얼챌린지",
      description: "각자 원하는 스페인어 공부 방식으로 실력 향상",
      time: "주 5회 10분 이상 원하는 방식으로 스페인어 공부",
      type: "스페인어 공부 인증 챌린지",
      color: "bg-pink-50 border-pink-200",
      icon: <Languages className="w-6 h-6 text-pink-600" />
    },
    {
      id: "writing",
      title: "기록리추얼챌린지",
      description: "글쓰기를 통한 생각 정리와 성찰",
      time: "주 5회 글쓰기 (주 2회 글 읽기 대체 가능)",
      type: "글쓰기 인증 챌린지",
      color: "bg-purple-50 border-purple-200",
      icon: <Calendar className="w-6 h-6 text-purple-600" />
    },
    {
      id: "finance",
      title: "자산관리리추얼챌린지 (신규)",
      description: "체계적인 지출 관리와 경제 공부 습관",
      time: "주 5회 지출 관리 & 돈(경제) 공부 기록",
      type: "자산관리 인증 챌린지",
      color: "bg-amber-50 border-amber-200",
      icon: <Wallet className="w-6 h-6 text-amber-600" />
    },
    {
      id: "original-book",
      title: "원서읽기리추얼챌린지 (신규)",
      description: "전문가 가이드와 함께하는 원서 읽기",
      time: "주 5회 정해진 분량 원서읽기 후 질문 답변 인증",
      type: "with 전문가 가이드",
      color: "bg-teal-50 border-teal-200",
      icon: <Moon className="w-6 h-6 text-teal-600" />
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            챌린지 종류
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            8가지 다양한 챌린지 중 원하는 것을 선택해서 참여할 수 있습니다
          </p>
          
          {/* 노하우 안내 */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-6 mt-6">
            <p className="text-lg font-semibold text-foreground">
              *다년간의 리추얼클럽 노하우를 바탕으로, 안 할 수 없는 환경을 만들어드려요.
            </p>
          </div>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          {/* 첫 번째 줄: 모닝, 운동 */}
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.slice(0, 2).map((challenge) => (
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
          
          {/* 두 번째 줄: 독서, 영어 */}
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.slice(2, 4).map((challenge) => (
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
          
          {/* 세 번째 줄: 스페인어, 기록 */}
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.slice(4, 6).map((challenge) => (
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
          
          {/* 네 번째 줄: 자산관리, 원서읽기 (신규) */}
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.slice(6, 8).map((challenge) => (
              <Card key={challenge.id} className={`${challenge.color} hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-dashed`}>
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
        </div>

        {/* 챌린지 일정 */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
            <h4 className="text-2xl font-bold text-center mb-8">챌린지 일정</h4>
            <div className="text-center">
              <h5 className="text-xl font-semibold text-primary mb-4">42기 리추얼클럽 챌린저 모집 중</h5>
              <p className="text-muted-foreground mb-2">1/5(월) ~ 1/23(금) [3주 프로그램]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeList;
