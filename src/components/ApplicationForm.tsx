
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MessageCircle } from "lucide-react";

const ApplicationForm = () => {
  const openGoogleForm = () => {
    window.open('https://forms.gle/6CLiisnp8cT4hcch7', '_blank');
  };

  const openKakaoChat = () => {
    window.open('https://pf.kakao.com/_xhQUHn', '_blank');
  };

  return (
    <section id="application" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              리추얼클럽 참여하기
            </h3>
            <p className="text-xl text-muted-foreground mb-4">
              1월 챌린지(42기) 모집 진행중입니다. 지금 바로 신청하세요!
            </p>
            
            {/* 참가비 안내 */}
            <div className="bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto mb-8">
              <h4 className="text-xl font-bold text-center mb-4 text-foreground">챌린지 패키지</h4>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-lg text-foreground mb-1">1개 챌린지</p>
                  <p className="text-2xl font-bold text-foreground">5만원</p>
                  <p className="text-sm text-muted-foreground mb-2">참가비</p>
                  <p className="text-lg font-semibold text-foreground">+ 1.5만원</p>
                  <p className="text-xs text-muted-foreground">보증금</p>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-lg text-foreground mb-1">2개 챌린지</p>
                  <p className="text-2xl font-bold text-foreground">9만원</p>
                  <p className="text-sm text-muted-foreground mb-2">참가비</p>
                  <p className="text-lg font-semibold text-foreground">+ 3만원</p>
                  <p className="text-xs text-muted-foreground">보증금</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/40 relative shadow-md">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    BEST 추천
                  </div>
                  <p className="font-bold text-lg text-foreground mb-1 mt-1">무제한 챌린지</p>
                  <p className="text-2xl font-bold text-foreground">12만원</p>
                  <p className="text-sm text-muted-foreground mb-2">참가비</p>
                  <p className="text-lg font-semibold text-foreground">+ 3만원</p>
                  <p className="text-xs text-muted-foreground">보증금</p>
                  <p className="text-xs text-primary font-bold mt-2">★8개 챌린지 모두 자율 참여 가능</p>
                  <p className="text-xs text-primary/80 mt-1">(개당 15,000원)</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
                  <p className="font-bold text-lg text-foreground mb-1">무제한 챌린지</p>
                  <p className="font-bold text-lg text-foreground">+1:1 루틴 진단&코칭</p>
                  <p className="text-2xl font-bold text-foreground">15만원</p>
                  <p className="text-sm text-muted-foreground mb-2">참가비</p>
                  <p className="text-lg font-semibold text-foreground">+ 3만원</p>
                  <p className="text-xs text-muted-foreground">보증금</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p className="text-center italic">
                  * 하루 인증 실패 시 1,000원씩 보증금이 차감되며, 챌린지에 성공할 경우 보증금은 전액 환불됩니다.
                </p>
                <p className="text-center italic">
                  * 모두에게 1번의 행복찬스가 주어집니다. 지각 or 결석 1회까지는 보증금을 차감하지 않습니다.
                </p>
                <p className="text-center italic">
                  * 차감된 보증금은 참가자 모두의 이름으로 전액 해피빈을 통해 기부됩니다.
                </p>
                <p className="text-center italic">
                  * 1:1 루틴 진단&코칭은 챌린지 진행 전 목표 세팅부터 진행 과정에서의 맞춤형 케어 프로그램입니다.
                </p>
                <p className="text-center italic">
                  * 무제한 챌린지 참여 시 초과 차감된 보증금은 리추얼클럽에서 부담합니다.
                </p>
                <p className="text-center italic font-semibold text-foreground">
                  * 끝까지 참여해주실 분들만 신청바랍니다. 중간에 포기하시더라도 참가비는 환급되지 않습니다.
                </p>
              </div>
              
              {/* 추가 할인 혜택 */}
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <h5 className="font-bold text-center mb-2 text-foreground">
                  추가 할인 혜택
                  <span className="block text-sm font-normal text-muted-foreground mt-1">
                    (중복 할인 가능, 최대 3만원 할인)
                  </span>
                </h5>
                <div className="space-y-2 text-sm text-center">
                  <p className="text-foreground">
                    <span className="font-semibold">1. 친구 초대 이벤트</span> <span className="text-muted-foreground">(신규 멤버와 기존 멤버 모두 5천원 할인)</span>
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">2. 직전 기수 리추얼클럽 챌린저</span> <span className="text-muted-foreground">(5천원 할인)</span>
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">3. 직전 기수 블로그 후기 작성</span> <span className="text-muted-foreground">(5천원 할인)</span>
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">4. 직전 기수 어워즈 수상자</span> <span className="text-muted-foreground">(5천원 할인)</span>
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">5. 블로그 모집 포스팅 공유</span> <span className="text-muted-foreground">(5천원 할인)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary flex items-center justify-center space-x-2">
                  <ExternalLink className="w-6 h-6" />
                  <span>신청하기</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  구글 폼을 통해 간편하게 신청할 수 있습니다. 
                  원하는 챌린지를 선택하고 참여하세요.
                </p>
                <Button 
                  onClick={openGoogleForm}
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  구글 폼으로 신청하기
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary flex items-center justify-center space-x-2">
                  <MessageCircle className="w-6 h-6" />
                  <span>문의하기</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  궁금한 점이 있으시거나 자세한 정보가 필요하시면
                  카카오톡으로 문의해주세요.
                </p>
                <Button 
                  onClick={openKakaoChat}
                  variant="outline"
                  className="w-full text-lg py-6 border-primary text-primary hover:bg-primary/10"
                  size="lg"
                >
                  카카오톡 채널
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h4 className="text-xl font-bold text-foreground mb-4">참여 안내</h4>
              <div className="space-y-3 text-muted-foreground">
                <p>• 모든 챌린지는 3주 프로그램으로 진행됩니다</p>
                <p>• 선착순 모집으로 조기 마감될 수 있습니다</p>
                <p>• 참여비 및 자세한 내용은 신청 폼에서 확인하세요</p>
                <p>• 문의사항은 카카오톡 채널을 이용해주세요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
