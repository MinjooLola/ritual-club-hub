
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
            <p className="text-xl text-muted-foreground">
              10월 챌린지 모집 진행중입니다. 지금 바로 신청하세요!
            </p>
          </div>

          {/* 모집 마감 안내 */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 text-center">
            <h4 className="text-xl font-bold text-red-700 mb-2">모집 마감 임박!</h4>
            <p className="text-red-600 mb-1">모집 마감: 10/9(목) (선착순)</p>
            <p className="text-red-600 text-sm">*얼리버드 신청(1만원 할인) 마감: 10/7(화)</p>
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
