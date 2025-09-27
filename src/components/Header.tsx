
import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import AuthDialog from "./auth/AuthDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authDialogTab, setAuthDialogTab] = useState<"login" | "signup">("login");
  const { user, profile, signOut } = useAuth();

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
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              클럽 소개
            </button>
            <button 
              onClick={() => scrollToSection('challenges')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              챌린지
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              커뮤니티
            </button>
            <button 
              onClick={() => scrollToSection('application')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              신청하기
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              후기
            </button>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  안녕하세요, {profile?.name || '사용자'}님
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
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                클럽 소개
              </button>
              <button 
                onClick={() => scrollToSection('challenges')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                챌린지
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                커뮤니티
              </button>
              <button 
                onClick={() => scrollToSection('application')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                신청하기
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                후기
              </button>
              
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
