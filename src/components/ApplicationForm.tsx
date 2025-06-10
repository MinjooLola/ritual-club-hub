
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    motivation: "",
    goals: "",
    experience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "신청이 완료되었습니다!",
      description: "곧 연락드리겠습니다. 감사합니다.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      occupation: "",
      motivation: "",
      goals: "",
      experience: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="application" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              리추얼클럽 신청하기
            </h3>
            <p className="text-xl text-muted-foreground">
              새로운 변화의 여정을 시작해보세요. 간단한 정보를 입력해주시면 됩니다.
            </p>
          </div>

          <Card className="border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                참가 신청서
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름 *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">연령대</Label>
                    <Select value={formData.age} onValueChange={(value) => handleChange("age", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20s">20대</SelectItem>
                        <SelectItem value="30s">30대</SelectItem>
                        <SelectItem value="40s">40대</SelectItem>
                        <SelectItem value="50s">50대 이상</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">이메일 *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">연락처</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="010-0000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation">직업</Label>
                  <Input
                    id="occupation"
                    value={formData.occupation}
                    onChange={(e) => handleChange("occupation", e.target.value)}
                    placeholder="예: 직장인, 학생, 프리랜서 등"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">참여 동기 *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleChange("motivation", e.target.value)}
                    required
                    placeholder="리추얼클럽에 참여하고 싶은 이유를 알려주세요"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">달성하고 싶은 목표</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => handleChange("goals", e.target.value)}
                    placeholder="이번 클럽을 통해 달성하고 싶은 구체적인 목표가 있다면 알려주세요"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">이전 경험</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="비슷한 활동 경험이 있으신가요?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">처음입니다</SelectItem>
                      <SelectItem value="some">비슷한 경험이 조금 있습니다</SelectItem>
                      <SelectItem value="experienced">경험이 많습니다</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full text-lg py-6 hover-scale">
                  신청하기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
