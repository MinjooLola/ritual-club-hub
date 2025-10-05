import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CreateAdminButton = () => {
  const { toast } = useToast();

  const createAdminUser = async () => {
    try {
      const response = await supabase.functions.invoke('create-admin', {
        body: {
          email: 'admin@ritualclub.com',
          password: 'kimj96044',
          name: 'Minjoo Kim',
          phone: '+82-10-6597-1543'
        }
      });

      if (response.error) throw response.error;

      toast({
        title: "관리자 계정 생성 완료",
        description: "admin@ritualclub.com 계정이 생성되었습니다.",
      });
    } catch (error: any) {
      toast({
        title: "계정 생성 실패",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Button onClick={createAdminUser} variant="outline">
      관리자 계정 생성
    </Button>
  );
};

export default CreateAdminButton;