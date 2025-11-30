
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MessageCircle } from "lucide-react";

const ApplicationForm = () => {
  const openGoogleForm = () => {
    window.open('https://forms.gle/6CLiisnp8cT4hcch7', '_blank');
  };

  const openKakaoChat = () => {
    window.open('https://open.kakao.com/o/sYVFE4zg', '_blank');
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
              12월 챌린지 모집 진행중입니다. 지금 바로 신청하세요!
            </p>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-2 border-red-300 dark:border-red-700 rounded-lg p-4 mb-6">
              <p className="text-center font-bold text-red-700 dark:text-red-300 text-lg mb-1">
                🎯 올해의 마지막 챌린저 모집!
              </p>
              <p className="text-center text-sm text-red-600 dark:text-red-400">
                2025년부터는 참가비가 인상될 예정입니다. 지금이 가장 합리적인 가격으로 참여할 수 있는 마지막 기회입니다!
              </p>
            </div>
            
            {/* 참가비 안내 */}
            <div className="bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto mb-8">
              <h4 className="text-xl font-bold text-center mb-4 text-foreground">참가비 안내</h4>
              
              {/* 추천 메시지 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-4 mb-6">
                <p className="text-center font-bold text-blue-700 dark:text-blue-300 mb-2">
                  ⭐ 여러 습관을 함께 만들고 싶다면, 지금이 기회입니다
                </p>
                <p className="text-center text-sm text-blue-600 dark:text-blue-400">
                  습관들이 서로 시너지를 내며 삶 전체가 바뀌는 경험을 하게 됩니다
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-lg text-foreground mb-1">1개 챌린지</p>
                  <p className="text-2xl font-bold text-foreground">5만원</p>
                  <p className="text-sm text-muted-foreground mb-2">참가비</p>
                  <p className="text-lg font-semibold text-foreground">+ 1.5만원</p>
                  <p className="text-xs text-muted-foreground">보증금</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-400 dark:border-emerald-600 relative shadow-md">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    BEST 추천
                  </div>
                  <p className="font-bold text-lg text-foreground mb-1 mt-1">무제한 챌린지</p>
                  <p className="text-2xl font-bold text-foreground">9만원</p>
                  <p className="text-sm text-muted-foreground mb-2">참가비</p>
                  <p className="text-lg font-semibold text-foreground">+ 3만원</p>
                  <p className="text-xs text-muted-foreground">보증금</p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-bold mt-2">★6개 챌린지 모두 자율 참여 가능</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-1">(개당 15,000원)</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
                  <p className="font-bold text-lg text-foreground mb-1">무제한 챌린지</p>
                  <p className="font-bold text-lg text-foreground">+1:1 루틴 케어</p>
                  <p className="text-2xl font-bold text-foreground">12만원</p>
                  <p className="text-sm text-muted-foreground mb-2">참가비</p>
                  <p className="text-lg font-semibold text-foreground">+ 3만원</p>
                  <p className="text-xs text-muted-foreground">보증금</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p className="text-center italic">
                  * 인증 실패 시 보증금이 차감되며, 챌린지에 성공할 경우 보증금은 전액 환불됩니다.
                </p>
                <p className="text-center italic">
                  * 모두에게 1번의 행복찬스가 주어집니다. 지각 or 결석 1회까지는 보증금을 차감하지 않습니다.
                </p>
                <p className="text-center italic">
                  * 차감된 보증금은 참가자 모두의 이름으로 전액 해피빈을 통해 기부됩니다.
                </p>
                <p className="text-center italic">
                  * 1:1 루틴 케어는 챌린지 진행 전 목표 세팅부터 진행 과정에서의 맞춤형 진단 및 코칭 프로그램입니다.
                </p>
                <p className="text-center italic">
                  * 무제한 챌린지 참여 시 초과 차감된 보증금은 리추얼클럽에서 부담합니다.
                </p>
              </div>
              
              {/* 추가 할인 혜택 */}
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h5 className="font-bold text-center mb-2 text-foreground">
                  추가 할인 혜택
                  <span className="block text-sm font-normal text-muted-foreground mt-1">
                    (중복 할인 가능, 최대 3만원 할인)
                  </span>
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600 flex-shrink-0 mt-0.5">1.</span>
                    <div>
                      <p className="font-semibold text-foreground">친구 초대 이벤트 <span className="text-muted-foreground font-normal">(신규 멤버와 기존 멤버 모두 5천원 할인)</span></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600 flex-shrink-0 mt-0.5">2.</span>
                    <div>
                      <p className="font-semibold text-foreground">직전 기수 리추얼클럽 챌린저 <span className="text-muted-foreground font-normal">(5천원 할인)</span></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600 flex-shrink-0 mt-0.5">3.</span>
                    <div>
                      <p className="font-semibold text-foreground">직전 기수 블로그 후기 작성 <span className="text-muted-foreground font-normal">(5천원 할인)</span></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600 flex-shrink-0 mt-0.5">4.</span>
                    <div>
                      <p className="font-semibold text-foreground">직전 기수 어워즈 수상자 <span className="text-muted-foreground font-normal">(5천원 할인)</span></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600 flex-shrink-0 mt-0.5">5.</span>
                    <div>
                      <p className="font-semibold text-foreground">블로그 모집 포스팅 공유 <span className="text-muted-foreground font-normal">(5천원 할인)</span></p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 신청 기간 */}
              <div className="mt-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h5 className="text-xl font-bold text-center mb-4 text-red-700 dark:text-red-400">선착순 모집 마감 예정!</h5>
                <div className="space-y-3 text-center">
                  <div>
                    <p className="font-semibold text-red-700 dark:text-red-400">신청 마감일</p>
                    <p className="text-red-600 dark:text-red-500 text-xl font-bold">~12/2(화) 오전까지</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-purple-600 flex items-center justify-center space-x-2">
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
                  className="w-full text-lg py-6 bg-purple-600 hover:bg-purple-700"
                  size="lg"
                >
                  구글 폼으로 신청하기
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-600 flex items-center justify-center space-x-2">
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
                  className="w-full text-lg py-6 border-green-600 text-green-600 hover:bg-green-50"
                  size="lg"
                >
                  카카오톡 오픈채팅
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
                <p>• 문의사항은 카카오톡 오픈채팅을 이용해주세요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
