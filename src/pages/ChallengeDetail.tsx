
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
      description: "새벽 6시에 일어나 하루를 계획하고 정리하는 시간을 갖습니다. 함께 일어나는 챌린저들과 온라인으로 만나 서로 응원하며 건강한 아침 루틴을 만들어갑니다.",
      benefits: [
        "규칙적인 수면 패턴 형성",
        "하루를 계획적으로 시작하는 습관",
        "같은 시간대 챌린저들과의 동기부여",
        "아침 시간 활용도 증가"
      ],
      schedule: [
        "6:00-6:05 출석체크 및 모닝미션",
        "6:05-6:25 개인 모닝루틴 시간",
        "6:25-6:30 마무리 및 다음날 모닝 To do 작성"
      ]
    },
    reading: {
      title: "독서리추얼챌린지",
      subtitle: "자기 전 온라인으로 함께 책 읽기",
      icon: <Moon className="w-8 h-8 text-indigo-600" />,
      color: "from-indigo-50 to-purple-50",
      time: "평일(월~금) 밤 10:30~11:00",
      type: "독서 인증 챌린지",
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
        "10:55-11:00 마무리 및 독서 기록"
      ]
    },
    night: {
      title: "나이트리추얼챌린지",
      subtitle: "자기 전 하루를 마무리하는 나만의 리추얼 만들기",
      icon: <Moon className="w-8 h-8 text-slate-600" />,
      color: "from-slate-50 to-gray-50",
      time: "평일(월~금) 밤 10:30~11:00",
      type: "온라인 Live 진행",
      description: "잠들기 전, 각자 원하는 나이트 루틴을 만들어가는 시간입니다. 독서, 명상, 일기쓰기, 스트레칭 등 자신에게 맞는 리추얼을 찾아 하루를 의미있게 마무리합니다.",
      benefits: [
        "나만의 저녁 루틴 확립",
        "수면의 질 향상",
        "하루 마무리 및 성찰 습관",
        "스트레스 해소 및 이완"
      ],
      schedule: [
        "10:30-10:35 출석체크 및 오늘의 루틴 공유",
        "10:35-10:55 개인 나이트 루틴 시간",
        "10:55-11:00 마무리 및 다음날 계획"
      ]
    },
    english: {
      title: "영어리추얼챌린지",
      subtitle: "각자 원하는 영어공부 방식으로 실력 향상",
      icon: <Video className="w-8 h-8 text-blue-600" />,
      color: "from-blue-50 to-cyan-50",
      time: "주 5회 최소 30분 이상 영어공부",
      type: "영어공부 인증 챌린지",
      description: "각자 원하는 영어공부 방식으로 매일 영어를 공부하고 인증하는 챌린지입니다. 개인의 학습 스타일과 시간에 맞춰 자유롭게 참여할 수 있습니다.",
      benefits: [
        "개인 맞춤형 영어 학습",
        "꾸준한 영어 학습 습관 형성",
        "학습 동기부여 및 지속성",
        "다양한 학습 방법 정보 공유"
      ],
      schedule: [
        "개인 시간에 맞춰 영어 학습",
        "학습 인증 및 진도 공유",
        "동료들과 학습 팁 교환",
        "주간 학습 성과 점검"
      ]
    },
    exercise: {
      title: "운동리추얼챌린지",
      subtitle: "꾸준한 운동 습관으로 건강한 몸 만들기",
      icon: <Users className="w-8 h-8 text-green-600" />,
      color: "from-green-50 to-emerald-50",
      time: "주 3회 최소 30분 이상 운동 + 주 2회 건강한 식단 인증",
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
      time: "주 3회 이상 글쓰기(Output) + 주 2회 글읽기(Input)",
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
      subtitle: "내 공간을 정돈하고 불필요한 것들을 비우며 여유 찾기",
      icon: <Users className="w-8 h-8 text-pink-600" />,
      color: "from-pink-50 to-rose-50",
      time: "주 5회 공간 정리 or 비움 인증",
      type: "정리 인증 챌린지",
      description: "주 5회 공간을 정리하거나 불필요한 물건을 비웁니다. 미니멀 라이프를 실천하며 정리된 공간에서 마음의 여유와 집중력을 되찾습니다.",
      benefits: [
        "미니멀 라이프 습관 형성",
        "정돈된 생활 공간 조성",
        "물건에 대한 올바른 가치관 형성",
        "마음의 여유와 평온함"
      ],
      schedule: [
        "주 5회 정리 또는 비움 실천",
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
