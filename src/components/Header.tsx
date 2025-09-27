
import { useState } from "react";
import { Menu, X, User, LogOut, LayoutDashboard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AuthDialog from "./auth/AuthDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authDialogTab, setAuthDialogTab] = useState<"login" | "signup">("login");
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Ritual Club</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => scrollToSection('about'), 100);
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              클럽 소개
            </button>
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => scrollToSection('challenges'), 100);
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              챌린지
            </button>
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => scrollToSection('community'), 100);
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              커뮤니티
            </button>
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => scrollToSection('application'), 100);
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              신청하기
            </button>
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => scrollToSection('testimonials'), 100);
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              후기
            </button>
            
            {/* User Navigation */}
            {user && (
              <>
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  대시보드
                </button>
                {profile?.role === 'admin' && (
                  <button 
                    onClick={() => navigate('/admin')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    관리자
                  </button>
                )}
              </>
            )}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/dashboard')}
                  >
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    대시보드
                  </Button>
                  {profile?.role === 'admin' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate('/admin')}
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      관리자
                    </Button>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {profile?.name || '사용자'}님
                  {profile?.role === 'admin' && (
                    <span className="ml-2 px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full">
                      관리자
                    </span>
                  )}
                </span>
                <Button
                  variant="ghost"
                  onClick={signOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  로그아웃
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setAuthDialogTab("login");
                    setAuthDialogOpen(true);
                  }}
                >
                  로그인
                </Button>
                <Button
                  onClick={() => {
                    setAuthDialogTab("signup");
                    setAuthDialogOpen(true);
                  }}
                >
                  회원가입
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => scrollToSection('about'), 100);
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                클럽 소개
              </button>
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => scrollToSection('challenges'), 100);
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                챌린지
              </button>
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => scrollToSection('community'), 100);
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                커뮤니티
              </button>
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => scrollToSection('application'), 100);
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                신청하기
              </button>
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => scrollToSection('testimonials'), 100);
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                후기
              </button>
              
              {/* User Navigation - Mobile */}
              {user && (
                <>
                  <button 
                    onClick={() => {
                      navigate('/dashboard');
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    <LayoutDashboard className="inline-block w-4 h-4 mr-2" />
                    대시보드
                  </button>
                  {profile?.role === 'admin' && (
                    <button 
                      onClick={() => {
                        navigate('/admin');
                        setIsMenuOpen(false);
                      }}
                      className="text-left text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Shield className="inline-block w-4 h-4 mr-2" />
                      관리자 패널
                    </button>
                  )}
                </>
              )}
              
              {/* Auth Buttons - Mobile */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {user ? (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      안녕하세요, {profile?.name || '사용자'}님
                      {profile?.role === 'admin' && (
                        <span className="block mt-1 px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full w-fit">
                          관리자
                        </span>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      className="justify-start"
                      onClick={() => {
                        signOut();
                        setIsMenuOpen(false);
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      로그아웃
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className="justify-start"
                      onClick={() => {
                        setAuthDialogTab("login");
                        setAuthDialogOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      <User className="mr-2 h-4 w-4" />
                      로그인
                    </Button>
                    <Button
                      className="justify-start"
                      onClick={() => {
                        setAuthDialogTab("signup");
                        setAuthDialogOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      회원가입
                    </Button>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
        
        <AuthDialog 
          isOpen={authDialogOpen}
          onClose={() => setAuthDialogOpen(false)}
          defaultTab={authDialogTab}
        />
      </div>
    </header>
  );
};

export default Header;
