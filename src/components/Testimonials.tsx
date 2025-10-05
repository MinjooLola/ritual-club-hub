import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import testimonialsHeader from "@/assets/testimonials-header.png";

const Testimonials = () => {
  const detailedTestimonials = [
    {
      challenge: "모닝리추얼챌린지",
      content: "모리가 주는 기분과 성취가 너무 소중해요. 밀도 있게 아침 시간을 보내면 성취감이 크고 높은 생산성으로 하루를 보낼 수 있을 것 같은 기분이 더욱 크게 들어요. 모리는 제 삶의 중심이자 꾸준함의 힘을 알려주고 있는 원동력이라서 계속 이어나가고 싶어요.",
      author: "주디"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "영어 공부뿐만이 아니라 하루 루틴을 형성하는 데도 큰 도움이 되었어요. 하루를 보다 여유롭게, 그리고 자기주도적으로 이끌어가는, 한 마디로 주체적인 삶을 산다는 만족감이 굉장히 컸어요!",
      author: "망고"
    },
    {
      challenge: "운동리추얼챌린지",
      content: "한 달만에 약 1.5kg 감량에 성공했습니다! 운동을 한 다음 날 아침은 확실히 기상하기가 한결 수월했고, 출근길 발걸음도 이전보다 가벼워졌어요. 그만큼 운동이 일상의 한 부분으로 자연스럽게 자리 잡았다는 것을 체감할 수 있었습니다.",
      author: "지로"
    },
    {
      challenge: "기록리추얼챌린지",
      content: "매일 글을 쓰고, 다른 사람들이 읽는다는 전제를 두다 보니 글의 흐름을 어떻게 잡을지 고민하게 되었고, 업로드 전에 최소 한두 번은 다시 읽고 고치는 습관이 생겼습니다! 단순히 '글을 쓴다'는 행위가 아니라, '읽히는 글을 쓴다'는 태도로 변화한 것이 가장 큰 성과라고 느껴요.",
      author: "지로"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "내가 지금 무언가 바꾸고 싶다면, 더 나아지고 싶은 어떤 방향이 있다면, 책을 읽어야 한다고 생각해요. 저는 매일 읽는 책 30분이 제 인생을 바꾸고 있다고 확신합니다.",
      author: "쨈"
    },
    {
      challenge: "정리리추얼챌린지",
      content: "해결되지 않았던 문제들을 하나둘 정리해나가는 기분이에요. 마음상태가 집에도 반영되기 때문에, 이 집을 치워야 새로운 시작을 할 수 있다는 생각이 들었습니다.",
      author: "쨈"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리를 하기 전에는 하고 싶은 공부가 있어도 못하거나 미루게 되었었고 어쩔수없이 모든 생활이 일에 맞추어져 있었어요. 그런데 모리챌린지 이후에는 내가 하고싶은게 생활의 1순위가 되었어요. 환경과 시스템을 만드는 것이 중요하다는 것을 배운 시간이었어요.",
      author: "재은"
    },
    {
      challenge: "나이트리추얼챌린지",
      content: "이번 챌린지를 통해 나를 소진하는 것이 아닌 채우는 귀한 것을 하는 시간을 갖게 되어서 좋았습니다. 예전부터 지금도 저의 귀감이 되는 롤라님의 실행력, 끈기, 긍정의 끌어당김 등 롤라님의 매력을 가까이서 느낄 수 있어서 좋았어요!",
      author: "그레이스"
    },
    {
      challenge: "운동리추얼챌린지",
      content: "내가 건강한 삶을 살고 있다는 만족감과 뿌듯함이 생겼고, 살도 조금 빠졌어요! 내가 나를 잘 챙기고 있다는 느낌이 너무 좋았습니다.",
      author: "율무"
    },
    {
      challenge: "기록리추얼챌린지",
      content: "사람들에게 말을 하면서 서로 공감하고 슬픔은 나누며 스트레스를 푼다고 생각했는데 글에 감정을 녹이는 게 더욱 깊이 있는 치유가 됨을 느꼈어요. 밀도 있고 짜임새 있는 글을 쓸 수 있는 연습을 꾸준히 하고 싶어요!",
      author: "주디"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "한 달 동안 다섯권이나 되는 책을 읽었어요! 30분 책을 읽기 시작하니 한 시간, 두 시간도 읽게 되더라고요. 독서리추얼 덕에 시도하기 쉬운 작은 습관 하나로 독서의 재미에 푹 빠져보는 한 달이었어요!",
      author: "올리"
    },
    {
      challenge: "정리리추얼챌린지",
      content: "버리고 나니 가뿐함을 이루 말로 표현할 수 없더라고요! 집에있는거 전반적으로 다 버리고 싶은 마음이 들었어요. 시간이 나면 각 방별로 더 열심히 정리해보고 싶어요.",
      author: "니나"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리 이전에는 기분좋게 아침을 시작하지 못했는데, 그 이유가 하루를 자발적으로 시작하지 못했기 때문인 것 같아요. 함께 하는 친구와 나를 위한 시간이 있으니 아침이 즐거워요! 아침의 나를 믿는 마음이 생겨서, 나를 믿으면서 하루를 시작하는 느낌이 좋아요.",
      author: "올리"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "약 3개월 동안 매일 짤막한 영어 공부와 함께 영어 일기 쓰기를 해온 스스로가 대견한 것 같습니다. 3개월 동안 꾸준히 해보겠다는 마음가짐을 갖고 정말 실천한다면 성공확률 100%일 것 같습니다.",
      author: "모르페우스"
    },
    {
      challenge: "운동리추얼챌린지",
      content: "운리를 통해 오랜만에 밖에서 러닝을 했는데, 내가 왜 노래를 들으면서 밖에서 뛰는 걸 좋아하는 지 다시 알려주었던 좋은 시간이었어요. 오직 운동에만 집중하니까 다른 잡생각이 안 들고, 여러 쓸데없는 생각을 떨쳐낼 수 있는 힘을 길러주는 시간이었어요!",
      author: "재은"
    },
    {
      challenge: "기록리추얼챌린지",
      content: "일어나자마자 온갖 정보를 넣는 대신 쏟아내는 것, 무언가 쓰는 걸로 습관이 잡혀서 좋아요. 소비자에서 생산자로!",
      author: "쏭갱"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "저녁 시간에 진짜 낭비를 많이 한다는 느낌이 있었는데, 이 시간에 줌을 키고 같이 책을 읽는게 좋았어요. 책 읽기 전에 잘 준비하고, 책 다 읽고 바로 침대에 누워 잘 준비를 하니 12시 전에 자는 게 습관이 들었어요.",
      author: "요나"
    },
    {
      challenge: "정리리추얼챌린지",
      content: "단순히 물건을 버리는 것을 넘어 오랫동안 묵혀두었던 드라이브/핸드폰/책장 속의 짐들을 비워내는 기분이에요. 진짜 나에게 필요한 것은 뭔지, 나다운 것은 무엇인지 알아가는 시간을 가지고 있습니다.",
      author: "롤라"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리를 완벽하게 성공한 날은 하루종일 기분이 좋고, 계획한 일들이 순조롭게 진행되는 경향이 있어요. 모리 덕분에 내가 목표한 활동을 나의 의지로 계속할 수 있어서, 내가 어제보다 더 성장한 사람이 됐다는 느낌이 너무 좋아요.",
      author: "지로"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "하루에 한 번이라도 영어를 접하고, 생각하게 된다는 점이 좋아요. 강제로 시스템 안에 들어갈 수 있어 가능한 것 같아요. 10분만 영어 컨텐츠 보는게 어려운게 아닌데 혼자 하긴 어렵거든요. 제 알고리즘도 점점 영어로 바뀌고 있어요.",
      author: "모브"
    },
    {
      challenge: "운동리추얼챌린지",
      content: "러닝을 해보자고 해놓고 거의 10년이상 못했는데 처음으로 일주일에 최소 2번은 러닝을 하게 되었어요. 그것만으로도 정말 어마무시한 변화! 운동한 날은 확실히 에너지가 넘치고, 거의 4-5시까지는 긍정의 기운이 따라가는것 같아요.",
      author: "니나"
    },
    {
      challenge: "기록리추얼챌린지",
      content: "제가 글쓰기를 좋아한다는 걸 알게되었어요! 다른 사람의 사연만 글로 받아 정리하는 기록만 해왔는데 나를 위한 기록을 하기 시작하니까 한달간의 마음변화를 회고할 수 있어서 좋았어요.",
      author: "춘봉"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "독서습관을 꼭 만들고 싶었는데, 독서리추얼을 하면서 3주 동안 4권의 책을 읽었어요. 주제가 정말 다른 책들 속에 '변화'라는 공통적인 키워드가 있었다는 것을, 그리고 이것이 지금 저에게 꼭 필요한 키워드라는 것을 깨달았어요.",
      author: "수수"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "지나치지 않고 매일 조금씩이라도 하게 되는 좋은 습관이 생겼고, 고요한 새벽시간의 매력을 알게된 것만으로도 인생의 큰 자산인 것 같아요. 늦잠, 음주, 자극적인 음식 등 욕망을 충족하는 짧은 행복보다 스스로 통제를 통해 얻는 성취감, 안정감이 더 오래가는 행복이라는 것을 알게 됐어요.",
      author: "톨부장"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "출근시간에 맞춰 하루를 시작하지 않고 하루를 일이 아닌 '나'에게 맞춰서 시작한다는 느낌이 들었어요. 영어일기를 쓰고 문장을 외워서 말로 하는 간단한 것도 일상이 되고 꾸준히 쌓이며 스스로를 영어하는 사람으로 만들어줄 것이라 생각해요.",
      author: "한나"
    },
    {
      challenge: "운동리추얼챌린지",
      content: "5개월 간 꾸준히 운동리추얼을 진행하면서 주 3회, 하루 30분씩만 투자했더니 몸무게 4kg 감량했고, 근육량은 오히려 늘었어요! 무엇보다 러닝의 재미를 알게 된 게 가장 큰 수확이에요.",
      author: "롤라"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "규칙적인 독서 루틴으로 환경을 바꾸고 습관으로 만드는 느낌이 좋아요. 책을 읽으면서 내면 탐구로 '나'를 정의하고, 내가 좋아하는 것들을 배우며 경험해보고 있어요.",
      author: "민송"
    }
  ];

  // 챌린지별로 후기 그룹화
  const testimonialsByChallenge = detailedTestimonials.reduce((acc, testimonial) => {
    if (!acc[testimonial.challenge]) {
      acc[testimonial.challenge] = [];
    }
    acc[testimonial.challenge].push(testimonial);
    return acc;
  }, {} as Record<string, typeof detailedTestimonials>);

  const blogTestimonials = [
    {
      title: "모닝리추얼 챌린지 후기",
      link: "https://blog.naver.com/minjow1996/223495565888"
    },
    {
      title: "영어리추얼챌린지 후기",
      link: "https://blog.naver.com/minjow1996/223830499174"
    },
    {
      title: "나이트리추얼챌린지 참여후기",
      link: "https://blog.naver.com/luckyto_u/223369771120"
    },
    {
      title: "나이트리추얼챌린지 참여후기",
      link: "https://m.blog.naver.com/ljrim3398/223372089399"
    },
    {
      title: "운동리추얼챌린지 & 기록리추얼챌린지 후기",
      link: "https://blog.naver.com/gamzzang-/223988087412"
    },
    {
      title: "나이트리추얼챌린지 참여후기",
      link: "https://blog.naver.com/heavenlee63/224023811675"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            실제 참가자 후기
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            리추얼클럽을 통해 변화를 경험한 실제 참가자들의 생생한 후기입니다
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={testimonialsHeader} 
            alt="참가자 후기 모음" 
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* 챌린지별 대표 후기 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {Object.entries(testimonialsByChallenge).map(([challenge, testimonials]) => {
            const representative = testimonials[0];
            const count = testimonials.length;
            
            return (
              <Dialog key={challenge}>
                <DialogTrigger asChild>
                  <Card className="border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {challenge}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {count}개 후기
                        </span>
                      </div>
                      <div className="flex items-start gap-2 mb-3">
                        <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                          {representative.content}
                        </p>
                      </div>
                      <p className="text-foreground font-semibold text-sm mb-3">
                        - {representative.author}
                      </p>
                      <div className="flex items-center justify-end text-primary text-sm font-medium">
                        더보기 <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {challenge} 후기 모음
                      <span className="text-sm font-normal text-muted-foreground ml-2">
                        ({count}개)
                      </span>
                    </DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-6">
                      {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-border">
                          <CardContent className="p-5">
                            <div className="flex items-start gap-3">
                              <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                              <div className="flex-1">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                  {testimonial.content}
                                </p>
                                <p className="text-foreground font-semibold text-sm">
                                  - {testimonial.author}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* 블로그 후기 링크 */}
        <div className="max-w-6xl mx-auto">
          <h4 className="text-2xl font-bold text-center text-foreground mb-8">
            더 많은 후기 보기
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50"
                onClick={() => window.open(testimonial.link, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <h5 className="font-semibold text-foreground text-sm">{testimonial.title}</h5>
                  </div>
                  <div className="text-xs text-primary font-medium">
                    후기 전문 보기 →
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
