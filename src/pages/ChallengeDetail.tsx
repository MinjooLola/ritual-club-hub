
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, Calendar, Video, Moon, Target, CheckCircle } from "lucide-react";

const ChallengeDetail = () => {
  const { challengeId } = useParams();
  const navigate = useNavigate();

  const challengeDetails = {
    morning: {
      title: "모닝리추얼챌린지",
      subtitle: "이른 아침 시간을 활용한 하루의 시작",
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      color: "from-orange-50 to-yellow-50",
      time: "평일(월~금) 아침 6:00~6:30",
      type: "온라인 Live 진행",
      description: "새벽 6시에 일어나 하루를 계획하고 정리하는 시간을 갖습니다. 함께 일어나는 동료들과 온라인으로 만나 서로 응원하며 건강한 아침 루틴을 만들어갑니다.",
      benefits: [
        "규칙적인 수면 패턴 형성",
        "하루를 계획적으로 시작하는 습관",
        "같은 시간대 동료들과의 동기부여",
        "아침 시간 활용도 증가"
      ],
      schedule: [
        "6:00-6:05 출석체크 및 인사",
        "6:05-6:15 하루 목표 및 계획 공유",
        "6:15-6:25 개인 모닝루틴 시간",
        "6:25-6:30 마무리 및 응원 메시지"
      ]
    },
    night: {
      title: "나이트리추얼챌린지",
      subtitle: "자기 전 온라인으로 함께 책 읽기",
      icon: <Moon className="w-8 h-8 text-indigo-600" />,
      color: "from-indigo-50 to-purple-50",
      time: "평일(월~금) 밤 10:30~11:00",
      type: "온라인 Live 진행",
      description: "잠들기 전 30분, 온라인으로 모여 함께 책을 읽습니다. 스마트폰 대신 책을 읽으며 하루를 마무리하고, 더 나은 수면의 질을 만들어갑니다.",
      benefits: [
        "스마트폰 사용 시간 줄이기",
        "수면의 질 향상",
        "독서 습관 형성",
        "하루 마무리 및 성찰 시간"
      ],
      schedule: [
        "10:30-10:35 출석체크 및 오늘 하루 공유",
        "10:35-10:55 함께 독서하기",
        "10:55-11:00 마무리 및 내일 다짐"
      ]
    },
    english: {
      title: "영어리추얼챌린지",
      subtitle: "매일 영어로 소통하며 실력 향상",
      icon: <Video className="w-8 h-8 text-blue-600" />,
      color: "from-blue-50 to-cyan-50",
      time: "평일(월~금) 오전 7:00~7:30",
      type: "온라인 Live 진행",
      description: "매일 아침 영어로 대화하며 실전 영어 실력을 향상시킵니다. 원어민과의 대화 기회도 제공되며, 자연스럽게 영어 말하기에 대한 자신감을 기를 수 있습니다.",
      benefits: [
        "실전 영어 회화 실력 향상",
        "영어에 대한 자신감 증가",
        "매일 영어 사용 습관 형성",
        "원어민과의 대화 기회"
      ],
      schedule: [
        "7:00-7:05 워밍업 & 인사",
        "7:05-7:20 주제별 영어 대화",
        "7:20-7:25 오늘의 표현 학습",
        "7:25-7:30 마무리 및 복습"
      ]
    },
    exercise: {
      title: "운동리추얼챌린지",
      subtitle: "꾸준한 운동 습관으로 건강한 몸 만들기",
      icon: <Users className="w-8 h-8 text-green-600" />,
      color: "from-green-50 to-emerald-50",
      time: "평일(월~금) 최소 30분",
      type: "운동 인증 챌린지",
      description: "매일 최소 30분 이상 운동하고 인증샷을 공유합니다. 헬스, 러닝, 홈트레이닝 등 다양한 운동이 가능하며, 서로의 운동 모습을 보며 동기부여를 받습니다.",
      benefits: [
        "꾸준한 운동 습관 형성",
        "체력 및 건강 증진",
        "운동 동기부여 지속",
        "다양한 운동 정보 공유"
      ],
      schedule: [
        "개인 시간에 맞춰 운동 진행",
        "운동 인증샷 공유",
        "동료들과 응원 메시지 교환",
        "주간 운동 기록 정리"
      ]
    },
    writing: {
      title: "기록리추얼챌린지",
      subtitle: "글쓰기를 통한 생각 정리와 성찰",
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      color: "from-purple-50 to-pink-50",
      time: "평일(월~금) 주 3회 이상",
      type: "글쓰기 인증 챌린지",
      description: "주 3회 이상 글을 작성하여 하루를 정리하고 생각을 기록합니다. 일기, 에세이, 독후감 등 자유로운 형태로 작성할 수 있으며, 글쓰기를 통해 자신을 성찰하는 시간을 갖습니다.",
      benefits: [
        "생각 정리 및 성찰 능력 향상",
        "글쓰기 실력 발전",
        "감정 표현 및 스트레스 해소",
        "창의적 사고력 증진"
      ],
      schedule: [
        "개인 시간에 맞춰 글 작성",
        "주 3회 이상 글 공유",
        "동료들의 글 읽고 피드백",
        "주간 글쓰기 성찰 시간"
      ]
    },
    declutter: {
      title: "정리리추얼챌린지",
      subtitle: "불필요한 것들을 정리하며 미니멀 라이프",
      icon: <Users className="w-8 h-8 text-pink-600" />,
      color: "from-pink-50 to-rose-50",
      time: "평일(월~금) 1개 이상 버리기",
      type: "정리 인증 챌린지",
      description: "매일 최소 1개 이상의 불필요한 물건을 정리하거나 버립니다. 미니멀 라이프를 실천하며 정리된 공간에서 더 집중력 있는 생활을 만들어갑니다.",
      benefits: [
        "미니멀 라이프 습관 형성",
        "정리된 생활 공간 조성",
        "물건에 대한 올바른 가치관 형성",
        "집중력 및 생산성 향상"
      ],
      schedule: [
        "개인 시간에 맞춰 정리 진행",
        "정리 과정 인증샷 공유",
        "정리 팁 및 경험 공유",
        "주간 정리 성과 점검"
      ]
    }
  };

  const challenge = challengeDetails[challengeId as keyof typeof challengeDetails];

  if (!challenge) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">챌린지를 찾을 수 없습니다</h1>
          <Button onClick={() => navigate("/")}>홈으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  const openGoogleForm = () => {
    window.open('https://forms.gle/6CLiisnp8cT4hcch7', '_blank');
  };

  const openKakaoChat = () => {
    window.open('https://open.kakao.com/o/sYVFE4zg', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>돌아가기</span>
            </Button>
            <h1 className="text-2xl font-bold text-primary">Ritual Club</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br ${challenge.color}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {challenge.icon}
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">
              {challenge.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {challenge.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openGoogleForm}
                className="text-lg px-8 py-6"
              >
                지금 신청하기
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={openKakaoChat}
                className="text-lg px-8 py-6"
              >
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 기본 정보 */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>진행 시간</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{challenge.time}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Video className="w-5 h-5" />
                    <span>진행 방식</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{challenge.type}</p>
                </CardContent>
              </Card>
            </div>

            {/* 상세 설명 */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">챌린지 소개</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">{challenge.description}</p>
              </CardContent>
            </Card>

            {/* 혜택 */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Target className="w-6 h-6" />
                  <span>참여 혜택</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {challenge.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 일정 */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Calendar className="w-6 h-6" />
                  <span>세부 일정</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {challenge.schedule.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    지금 바로 시작하세요!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    3주간의 변화를 경험하고 새로운 습관을 만들어보세요
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      onClick={openGoogleForm}
                      className="text-lg px-8 py-6"
                    >
                      신청하기
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={openKakaoChat}
                      className="text-lg px-8 py-6"
                    >
                      문의하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChallengeDetail;
