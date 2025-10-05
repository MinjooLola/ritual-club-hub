
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
            <p className="text-xl text-muted-foreground mb-6">
              10월 챌린지 모집 진행중입니다. 지금 바로 신청하세요!
            </p>
            
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
                  <p className="text-xs text-muted-foreground mt-2">(개당 5만원)</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
                  <p className="font-bold text-lg text-foreground mb-1">2개 챌린지</p>
                  <p className="text-2xl font-bold text-foreground">9만원</p>
                  <p className="text-sm text-muted-foreground mb-2">참가비</p>
                  <p className="text-lg font-semibold text-foreground">+ 3만원</p>
                  <p className="text-xs text-muted-foreground">보증금</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-2">(개당 4.5만원)</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-400 dark:border-emerald-600 relative shadow-md">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    BEST 추천
                  </div>
                  <p className="font-bold text-lg text-foreground mb-1 mt-1">무제한 챌린지</p>
                  <p className="text-2xl font-bold text-foreground">12만원</p>
                  <p className="text-sm text-muted-foreground mb-2">참가비</p>
                  <p className="text-lg font-semibold text-foreground">+ 3만원</p>
                  <p className="text-xs text-muted-foreground">보증금</p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-bold mt-2">(7개 참여 시 개당 1.7만원)</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-1">💡 3개 이상 도전하고 싶다면!</p>
                  <p className="text-xs text-muted-foreground/70 italic mt-0.5">*추가 보증금은 리추얼클럽에서 지원합니다</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground italic mb-2">
                * 인증 실패 시 보증금이 차감되며, 챌린지에 성공할 경우 보증금은 전액 환불됩니다.
              </p>
              <p className="text-center text-sm text-muted-foreground italic mb-6">
                * 차감된 보증금은 네이버 해피빈을 통해 챌린저 분들의 이름으로 전액 기부됩니다.
              </p>
              
              {/* 추가 할인 혜택 */}
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h5 className="font-bold text-center mb-2 text-foreground">
                  추가 할인 혜택
                  <span className="block text-sm font-normal text-muted-foreground mt-1">
                    (*중복 할인 불가)
                  </span>
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="flex flex-col items-center space-y-1 text-center">
                    <span className="text-purple-600 flex-shrink-0">✔</span>
                    <div>
                      <p className="font-semibold text-foreground">기존 챌린저 습관 지속 쿠폰</p>
                      <p className="text-muted-foreground">직전 기수 출석률 90% 이상 챌린저 2만원 할인</p>
                      <p className="text-muted-foreground">직전 기수 리추얼클럽 챌린저 1만원 할인</p>
                      <p className="text-xs text-muted-foreground italic">*기존 챌린저 모집 기간에 신청해야 적용 가능</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-1 text-center">
                    <span className="text-purple-600 flex-shrink-0">✔</span>
                    <div>
                      <p className="font-semibold text-foreground">친구 초대 쿠폰</p>
                      <p className="text-muted-foreground">신규 멤버와 기존 멤버 모두 2만원 할인</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-1 text-center">
                    <span className="text-purple-600 flex-shrink-0">✔</span>
                    <div>
                      <p className="font-semibold text-foreground">블로그 모집 링크 공유 쿠폰</p>
                      <p className="text-muted-foreground">블로그에 모집 링크 포스팅 시 5천원 할인</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 신청 기간 */}
              <div className="mt-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h5 className="text-xl font-bold text-center mb-4 text-red-700 dark:text-red-400">선착순 모집 마감 예정!</h5>
                <div className="space-y-3 text-center">
                  <div>
                    <p className="font-semibold text-red-700 dark:text-red-400">기존 챌린저 신청 기간</p>
                    <p className="text-red-600 dark:text-red-500">10/5(일) ~ 10/6(월)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-700 dark:text-red-400">신규 챌린저 신청 기간</p>
                    <p className="text-red-600 dark:text-red-500">10/7(화) ~ 10/9(목)</p>
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
