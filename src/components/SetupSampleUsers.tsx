import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Users, CheckCircle, XCircle } from "lucide-react";

interface SetupResult {
  email: string;
  success: boolean;
  role?: string;
  error?: string;
}

const SetupSampleUsers = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SetupResult[]>([]);
  const [setupComplete, setSetupComplete] = useState(false);
  const { toast } = useToast();

  const handleSetupUsers = async () => {
    setLoading(true);
    setResults([]);
    
    try {
      const { data, error } = await supabase.functions.invoke('setup-sample-users');
      
      if (error) {
        throw error;
      }

      if (data?.success) {
        setResults(data.results || []);
        setSetupComplete(true);
        
        toast({
          title: "사용자 계정 생성 완료",
          description: `${data.summary?.successful || 0}개의 계정이 성공적으로 생성되었습니다.`,
        });
      } else {
        throw new Error(data?.error || 'Unknown error occurred');
      }
      
    } catch (error: any) {
      console.error('Setup error:', error);
      toast({
        title: "계정 생성 실패",
        description: error.message || "계정 생성 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span>샘플 사용자 계정 설정</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {!setupComplete && (
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              5개의 샘플 사용자 계정을 생성합니다. 모든 계정의 비밀번호는 <code className="bg-muted px-2 py-1 rounded">user123</code>입니다.
            </p>
            <Button 
              onClick={handleSetupUsers} 
              disabled={loading}
              size="lg"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              계정 생성하기
            </Button>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">계정 생성 결과</h3>
            <div className="space-y-2">
              {results.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {result.success ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <div>
                      <p className="font-medium">{result.email}</p>
                      {result.error && (
                        <p className="text-sm text-red-600">{result.error}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {result.success && result.role && (
                      <Badge variant={result.role === 'admin' ? 'destructive' : 'secondary'}>
                        {result.role === 'admin' ? '관리자' : '사용자'}
                      </Badge>
                    )}
                    <Badge variant={result.success ? 'default' : 'destructive'}>
                      {result.success ? '성공' : '실패'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {setupComplete && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">✅ 설정 완료!</h4>
            <p className="text-green-700 text-sm mb-3">
              이제 다음 계정들로 로그인할 수 있습니다:
            </p>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {results.filter(r => r.success).map((result, index) => (
                  <div key={index} className="bg-white p-2 rounded border">
                    <div className="font-medium">{result.email}</div>
                    <div className="text-muted-foreground">Password: user123</div>
                    <Badge variant={result.role === 'admin' ? 'destructive' : 'secondary'}>
                      {result.role === 'admin' ? 'Admin' : 'User'}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SetupSampleUsers;