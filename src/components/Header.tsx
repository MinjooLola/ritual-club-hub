
import { useState } from "react";
import { Menu, X, User, LogOut, LayoutDashboard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AuthDialog from "./auth/AuthDialog";
import lolaum from "@/assets/lolaum-logo.png";

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
          <img src={lolaum} alt="Lolaum" className="h-8" />
          
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
          </nav>

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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
