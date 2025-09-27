import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

const signupSchema = z.object({
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요" }),
  password: z.string().min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다" }),
  confirmPassword: z.string(),
  name: z.string().min(2, { message: "이름은 최소 2자 이상이어야 합니다" }),
  phone: z.string().min(10, { message: "올바른 전화번호를 입력해주세요" }),
  currentWork: z.string().min(1, { message: "현재 하는 일을 입력해주세요" }),
  interests: z.string().min(1, { message: "관심사를 입력해주세요" }),
  hobbies: z.string().min(1, { message: "취미를 입력해주세요" }),
  concerns: z.string().min(10, { message: "습관 형성에 대한 고민을 10자 이상 입력해주세요" }),
  expectations: z.string().optional(),
  howDidYouKnow: z.string().min(1, { message: "어떻게 알게 되셨는지 선택해주세요" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다",
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupFormProps {
  onSuccess: () => void;
}

const SignupForm = ({ onSuccess }: SignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      const { confirmPassword, ...profileData } = data;
      await signUp(data.email, data.password, {
        name: profileData.name,
        phone: profileData.phone,
        current_work: profileData.currentWork,
        interests: profileData.interests,
        hobbies: profileData.hobbies,
        concerns: profileData.concerns,
        expectations: profileData.expectations || null,
        how_did_you_know: profileData.howDidYouKnow,
      });
      
      toast({
        title: "회원가입 성공",
        description: "Ritual Club에 가입해주셔서 감사합니다!",
      });
      
      onSuccess();
    } catch (error: any) {
      toast({
        title: "회원가입 실패",
        description: error.message || "다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Basic Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">기본 정보</h3>
        
        <div className="space-y-2">
          <Label htmlFor="name">이름 *</Label>
          <Input
            id="name"
            placeholder="이름을 입력하세요"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">이메일 *</Label>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력하세요"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">전화번호 *</Label>
          <Input
            id="phone"
            placeholder="전화번호를 입력하세요 (예: 010-1234-5678)"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">비밀번호 *</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력하세요 (최소 6자)"
              {...register("password")}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          {errors.password && (
            <p className="text-sm text-destructive">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">비밀번호 확인 *</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="비밀번호를 다시 입력하세요"
              {...register("confirmPassword")}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      {/* Personal Info */}
      <div className="space-y-4 pt-4 border-t">
        <h3 className="text-lg font-semibold">개인 정보</h3>
        
        <div className="space-y-2">
          <Label htmlFor="currentWork">현재 하는 일 *</Label>
          <Input
            id="currentWork"
            placeholder="예: 대학생, 직장인, 프리랜서 등"
            {...register("currentWork")}
          />
          {errors.currentWork && (
            <p className="text-sm text-destructive">{errors.currentWork.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="interests">관심사 *</Label>
          <Input
            id="interests"
            placeholder="예: 자기계발, 운동, 독서, 요리 등"
            {...register("interests")}
          />
          {errors.interests && (
            <p className="text-sm text-destructive">{errors.interests.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="hobbies">취미 *</Label>
          <Input
            id="hobbies"
            placeholder="예: 영화감상, 등산, 게임, 그림 그리기 등"
            {...register("hobbies")}
          />
          {errors.hobbies && (
            <p className="text-sm text-destructive">{errors.hobbies.message}</p>
          )}
        </div>
      </div>

      {/* Ritual Club Related */}
      <div className="space-y-4 pt-4 border-t">
        <h3 className="text-lg font-semibold">Ritual Club 관련</h3>
        
        <div className="space-y-2">
          <Label htmlFor="concerns">습관 형성에 대한 고민 *</Label>
          <Textarea
            id="concerns"
            placeholder="평소 습관을 만드는데 어떤 어려움이나 고민을 가지고 계신가요? 구체적으로 적어주세요."
            className="min-h-[100px]"
            {...register("concerns")}
          />
          {errors.concerns && (
            <p className="text-sm text-destructive">{errors.concerns.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectations">클럽 참여 기대사항 (선택)</Label>
          <Textarea
            id="expectations"
            placeholder="이 클럽에 참여하면서 어떤 것을 기대하시나요? (선택사항)"
            className="min-h-[80px]"
            {...register("expectations")}
          />
        </div>

        <div className="space-y-2">
          <Label>Ritual Club을 어떻게 알게 되셨나요? *</Label>
          <Select onValueChange={(value) => setValue("howDidYouKnow", value)}>
            <SelectTrigger>
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sns">SNS (인스타그램, 페이스북 등)</SelectItem>
              <SelectItem value="friend">지인 소개</SelectItem>
              <SelectItem value="search">인터넷 검색</SelectItem>
              <SelectItem value="community">온라인 커뮤니티</SelectItem>
              <SelectItem value="advertisement">광고</SelectItem>
              <SelectItem value="other">기타</SelectItem>
            </SelectContent>
          </Select>
          {errors.howDidYouKnow && (
            <p className="text-sm text-destructive">{errors.howDidYouKnow.message}</p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        회원가입
      </Button>
    </form>
  );
};

export default SignupForm;