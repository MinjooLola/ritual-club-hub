import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            참가비 안내
          </h3>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* 참가비 옵션 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center text-2xl">1개 챌린지</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-foreground">5만원</p>
                  <p className="text-muted-foreground">참가비</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground">+ 1.5만원</p>
                  <p className="text-sm text-muted-foreground">보증금</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center text-2xl">2개 챌린지</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-foreground">9만원</p>
                  <p className="text-muted-foreground">참가비</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground">+ 3만원</p>
                  <p className="text-sm text-muted-foreground">보증금</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center text-2xl">무제한 챌린지</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-foreground">12만원</p>
                  <p className="text-muted-foreground">참가비</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground">+ 3만원</p>
                  <p className="text-sm text-muted-foreground">보증금</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 보증금 안내 */}
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <p className="text-center text-sm text-muted-foreground italic">
              * 인증 실패 시 보증금이 차감되며, 챌린지에 성공할 경우 보증금은 전액 환불됩니다.
            </p>
          </div>

          {/* 추가 할인 혜택 */}
          <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                추가 할인 혜택
                <span className="block text-sm font-normal text-muted-foreground mt-2">
                  (*중복 할인 불가)
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">기존 챌린저 습관 지속 쿠폰</p>
                  <p className="text-sm text-muted-foreground">직전달 리추얼클럽 멤버 2만원 할인</p>
                  <p className="text-xs text-muted-foreground italic mt-1">*기존 챌린저 모집 기간에 신청해야 적용 가능</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">친구 초대 쿠폰</p>
                  <p className="text-sm text-muted-foreground">신규 멤버와 기존 멤버 모두 2만원 할인</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">블로그 모집 링크 공유 쿠폰</p>
                  <p className="text-sm text-muted-foreground">블로그에 모집 링크 포스팅 시 5천원 할인</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 신청 기간 */}
          <div className="mt-12 bg-card border border-border rounded-lg p-8">
            <h4 className="text-2xl font-bold text-center mb-6 text-foreground">선착순 모집 마감!</h4>
            <div className="space-y-3 text-center">
              <div>
                <p className="font-semibold text-lg text-foreground">기존 챌린저 신청 기간</p>
                <p className="text-muted-foreground">10/5(일) ~ 10/6(월)</p>
              </div>
              <div>
                <p className="font-semibold text-lg text-foreground">신규 챌린저 신청 기간</p>
                <p className="text-muted-foreground">10/7(화) ~ 10/9(목)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
