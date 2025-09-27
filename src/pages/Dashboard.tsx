import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, BookOpen, Target, Edit, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const { user, profile } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSaveProfile = async () => {
    if (!user || !editedProfile) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          name: editedProfile.name,
          phone: editedProfile.phone,
          current_work: editedProfile.current_work,
          interests: editedProfile.interests,
          hobbies: editedProfile.hobbies,
          concerns: editedProfile.concerns,
          expectations: editedProfile.expectations,
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "프로필 업데이트 완료",
        description: "프로필이 성공적으로 업데이트되었습니다.",
      });
      
      setIsEditing(false);
      // Reload the page to reflect changes
      window.location.reload();
    } catch (error) {
      toast({
        title: "업데이트 실패",
        description: "프로필 업데이트 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    }
  };

  const handleCancelEdit = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  if (!user || !profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">접근 권한이 없습니다</h2>
          <p className="text-muted-foreground">로그인이 필요합니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">안녕하세요, {profile.name}님!</h1>
                  <p className="text-muted-foreground">Ritual Club 대시보드</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={profile.role === 'admin' ? 'destructive' : 'secondary'}>
                  {profile.role === 'admin' ? '관리자' : '회원'}
                </Badge>
                <Badge variant="outline">
                  <Calendar className="w-3 h-3 mr-1" />
                  가입일: {new Date(profile.created_at).toLocaleDateString('ko-KR')}
                </Badge>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>프로필 정보</span>
                </CardTitle>
                {!isEditing ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    수정
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCancelEdit}
                    >
                      <X className="w-4 h-4 mr-2" />
                      취소
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSaveProfile}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      저장
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>이름</Label>
                    {isEditing ? (
                      <Input
                        value={editedProfile?.name || ''}
                        onChange={(e) => setEditedProfile(prev => prev ? {...prev, name: e.target.value} : null)}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">{profile.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label>이메일</Label>
                    <p className="text-sm text-muted-foreground mt-1">{profile.email}</p>
                  </div>
                  
                  <div>
                    <Label>전화번호</Label>
                    {isEditing ? (
                      <Input
                        value={editedProfile?.phone || ''}
                        onChange={(e) => setEditedProfile(prev => prev ? {...prev, phone: e.target.value} : null)}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">{profile.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label>현재 직업</Label>
                    {isEditing ? (
                      <Input
                        value={editedProfile?.current_work || ''}
                        onChange={(e) => setEditedProfile(prev => prev ? {...prev, current_work: e.target.value} : null)}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">{profile.current_work}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>관심사</Label>
                    {isEditing ? (
                      <Textarea
                        value={editedProfile?.interests || ''}
                        onChange={(e) => setEditedProfile(prev => prev ? {...prev, interests: e.target.value} : null)}
                        rows={2}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">{profile.interests}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label>취미</Label>
                    {isEditing ? (
                      <Textarea
                        value={editedProfile?.hobbies || ''}
                        onChange={(e) => setEditedProfile(prev => prev ? {...prev, hobbies: e.target.value} : null)}
                        rows={2}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">{profile.hobbies}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label>고민사항</Label>
                    {isEditing ? (
                      <Textarea
                        value={editedProfile?.concerns || ''}
                        onChange={(e) => setEditedProfile(prev => prev ? {...prev, concerns: e.target.value} : null)}
                        rows={2}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">{profile.concerns}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label>기대사항</Label>
                    {isEditing ? (
                      <Textarea
                        value={editedProfile?.expectations || ''}
                        onChange={(e) => setEditedProfile(prev => prev ? {...prev, expectations: e.target.value} : null)}
                        rows={2}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">{profile.expectations || '없음'}</p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">진행 중인 챌린지</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">완료한 챌린지</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">연속 달성일</p>
                    <p className="text-2xl font-bold">0일</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>최근 활동</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">아직 활동 내역이 없습니다.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  첫 번째 챌린지에 참여해보세요!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;