
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, Target, CheckCircle, ExternalLink } from "lucide-react";

const ChallengeDetail = () => {
  const { challengeId } = useParams();
  const navigate = useNavigate();

  const challengeData = {
    morning: {
      title: "모닝리추얼챌린지",
      description: "이른 아침 시간을 활용하여 하루를 의미있게 시작하는 습관을 만드는 챌린지입니다.",
      schedule: "평일(월~금) 아침 6:00~6:30",
      type: "온라인 Live 진행",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      details: [
        "매일 아침 6시에 온라인으로 함께 모여 하루를 시작합니다",
        "명상, 스트레칭, 목표 설정 등 다양한 모닝 루틴을 경험합니다",
        "30분간 진행되며 실시간으로 소통할 수 있습니다",
        "주말은 자유시간으로 개인 루틴을 유지합니다"
      ],
      benefits: [
        "규칙적인 기상 습관 형성",
        "하루를 계획적으로 시작하는 능력 향상", 
        "아침 시간 활용도 증가",
        "에너지 넘치는 하루 시작"
      ],
      testimonials: [
        {
          name: "김민지",
          age: "30대 직장인",
          content: "혼자서는 절대 할 수 없었던 새벽 6시 기상! 모닝리추얼을 통해 하루를 여유롭게 시작하는 법을 배웠어요."
        },
        {
          name: "박민수",
          age: "20대 학생",
          content: "이제는 6시에 일어나서 운동도 하고 독서도 하는 제가 믿기지 않아요. 함께하는 동료들 덕분에 포기하지 않을 수 있었습니다."
        }
      ]
    },
    night: {
      title: "나이트리추얼챌린지",
      description: "자기 전 온라인으로 함께 모여 책을 읽으며 하루를 마무리하는 챌린지입니다.",
      schedule: "매일 밤 10:30~11:00",
      type: "온라인 Live 진행",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      details: [
        "매일 밤 10시 30분에 온라인으로 모여 함께 책을 읽습니다",
        "각자 읽고 싶은 책을 가져와 조용히 읽는 시간입니다",
        "30분간 집중해서 읽고 간단한 소감을 나눕니다",
        "스마트폰 대신 책으로 하루를 마무리하는 습관을 만듭니다"
      ],
      benefits: [
        "규칙적인 독서 습관 형성",
        "스마트폰 사용 시간 감소",
        "수면의 질 향상",
        "하루 마무리와 성찰의 시간"
      ],
      testimonials: [
        {
          name: "이준호",
          age: "30대 회사원",
          content: "나이트리추얼 덕분에 스마트폰 대신 책을 읽는 습관이 생겼어요. 잠들기 전 30분이 이렇게 소중한 시간인 줄 몰랐습니다."
        },
        {
          name: "한서영",
          age: "20대 대학생",
          content: "혼자 책 읽기가 어려웠는데, 함께 읽으니 꾸준히 할 수 있었어요. 수면의 질도 훨씬 좋아졌습니다."
        }
      ]
    },
    english: {
      title: "영어리추얼챌린지",
      description: "매일 영어로 소통하며 자연스럽게 영어 실력을 향상시키는 챌린지입니다.",
      schedule: "평일(월~금) 오전 7:00~7:30",
      type: "온라인 Live 진행",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      details: [
        "매일 아침 7시에 온라인으로 만나 영어로 대화합니다",
        "일상 주제부터 시사까지 다양한 토픽으로 대화합니다",
        "레벨에 상관없이 누구나 참여할 수 있습니다",
        "실수를 두려워하지 않는 편안한 분위기입니다"
      ],
      benefits: [
        "영어 말하기 자신감 향상",
        "일상 영어 표현력 증가",
        "꾸준한 영어 공부 습관 형성",
        "국제적 감각 향상"
      ],
      testimonials: [
        {
          name: "박서연",
          age: "20대 대학생",
          content: "영어 말하기가 너무 두려웠는데, 매일 조금씩 영어로 대화하다 보니 자신감이 생겼어요. 원어민과 대화할 때도 이제는 떨지 않아요!"
        },
        {
          name: "최영호",
          age: "40대 직장인",
          content: "업무에 영어가 필요해서 시작했는데, 3주 만에 확실히 말하기가 늘었어요. 회사에서도 인정받고 있습니다."
        }
      ]
    },
    exercise: {
      title: "운동리추얼챌린지",
      description: "매일 최소 30분의 운동을 통해 건강한 몸과 마음을 만드는 챌린지입니다.",
      schedule: "매일(월~금) 최소 30분",
      type: "운동 인증 챌린지",
      color: "text-green-600",
      bgColor: "bg-green-50",
      details: [
        "매일 최소 30분 이상의 운동을 인증합니다",
        "운동 종류는 자유롭게 선택할 수 있습니다",
        "사진이나 영상으로 운동 인증을 공유합니다",
        "서로의 운동을 응원하고 동기부여를 받습니다"
      ],
      benefits: [
        "꾸준한 운동 습관 형성",
        "체력 및 건강 상태 개선",
        "스트레스 해소 및 정신 건강 향상",
        "자기 관리 능력 증대"
      ],
      testimonials: [
        {
          name: "한소영",
          age: "20대 취준생",
          content: "운동리추얼로 홈트레이닝 시작했는데 이제는 헬스장도 다니게 됐어요! 몸매도 변하고 자신감도 생겼습니다."
        },
        {
          name: "강동훈",
          age: "20대 프리랜서",
          content: "코로나 이후 운동을 전혀 안 했는데, 3주 동안 매일 운동하면서 몸이 가벼워지고 기분도 좋아졌어요."
        }
      ]
    },
    writing: {
      title: "기록리추얼챌린지",
      description: "글쓰기를 통해 생각을 정리하고 자신을 성찰하는 시간을 갖는 챌린지입니다.",
      schedule: "매일(월~금) 주 3회 이상",
      type: "글쓰기 인증 챌린지",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      details: [
        "주 3회 이상 자유로운 주제로 글을 작성합니다",
        "일기, 에세이, 시 등 형식은 자유입니다",
        "글쓰기 플랫폼은 개인이 선택할 수 있습니다",
        "서로의 글을 읽고 피드백을 나눕니다"
      ],
      benefits: [
        "생각 정리 및 표현 능력 향상",
        "자기 성찰 및 내면 탐구",
        "창작 활동을 통한 스트레스 해소",
        "꾸준한 기록 습관 형성"
      ],
      testimonials: [
        {
          name: "최유진",
          age: "20대 직장인",
          content: "3주 동안 매일 글을 쓰면서 하루를 정리하는 시간이 생겼어요. 생각이 정리되고 마음도 평온해졌습니다."
        },
        {
          name: "김태현",
          age: "30대 창업가",
          content: "바쁜 일상 속에서 글쓰기로 마음을 정리하니 일의 효율도 높아지고 스트레스도 줄었어요."
        }
      ]
    },
    declutter: {
      title: "정리리추얼챌린지",
      description: "매일 하나씩 불필요한 물건을 정리하며 미니멀한 라이프스타일을 만드는 챌린지입니다.",
      schedule: "매일(월~금) 1개 이상 버리기",
      type: "정리 인증 챌린지",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      details: [
        "매일 최소 1개 이상의 불필요한 물건을 정리합니다",
        "버리기, 기부하기, 판매하기 등 다양한 방법 활용",
        "정리 전후 사진으로 변화를 인증합니다",
        "정리 노하우와 팁을 서로 공유합니다"
      ],
      benefits: [
        "깔끔하고 정돈된 생활 공간 조성",
        "물건에 대한 올바른 가치관 형성",
        "스트레스 감소 및 마음의 평화",
        "미니멀 라이프 습관 형성"
      ],
      testimonials: [
        {
          name: "강동민",
          age: "30대 프리랜서",
          content: "정리리추얼을 통해 집안이 완전히 달라졌어요. 물건이 줄어드니 청소도 쉬워지고 마음도 한결 가벼워졌습니다."
        },
        {
          name: "오성민",
          age: "20대 대학생",
          content: "원룸 정리가 힘들었는데, 매일 조금씩 정리하니 공간이 넓어 보이고 집중력도 높아졌어요."
        }
      ]
    }
  };

  const challenge = challengeData[challengeId as keyof typeof challengeData];

  if (!challenge) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">챌린지를 찾을 수 없습니다</h1>
          <Button onClick={() => navigate('/')}>홈으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  const openGoogleForm = () => {
    window.open('https://forms.gle/6CLiisnp8cT4hcch7', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>돌아가기</span>
            </Button>
            <h1 className="text-2xl font-bold text-purple-600">롤라의 리추얼클럽</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* 챌린지 소개 */}
        <div className={`${challenge.bgColor} rounded-2xl p-8 mb-12`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl font-bold ${challenge.color} mb-4`}>
              {challenge.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {challenge.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <Clock className={`w-5 h-5 ${challenge.color}`} />
                <span className="font-semibold">{challenge.schedule}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className={`w-5 h-5 ${challenge.color}`} />
                <span className="font-semibold">{challenge.type}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Target className={`w-5 h-5 ${challenge.color}`} />
                <span className="font-semibold">3주 프로그램</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* 상세 내용 */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className={`w-5 h-5 ${challenge.color}`} />
                  <span>챌린지 진행 방식</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {challenge.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 ${challenge.color} mt-0.5 flex-shrink-0`} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className={`w-5 h-5 ${challenge.color}`} />
                  <span>이런 효과를 얻을 수 있어요</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {challenge.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 ${challenge.color} mt-0.5 flex-shrink-0`} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 참가자 후기 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">실제 참가자 후기</h3>
              <div className="space-y-6">
                {challenge.testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <p className="text-foreground mb-4 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="border-t pt-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.age}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 신청 CTA */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-purple-600">
                  지금 바로 신청하세요!
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  7월 챌린지 모집 중! (~7/8 자정까지)
                </p>
                <Button 
                  onClick={openGoogleForm}
                  className="w-full text-lg py-6 bg-purple-600 hover:bg-purple-700"
                  size="lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  구글 폼으로 신청하기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetail;
