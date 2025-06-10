
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-purple-600">롤라의 리추얼클럽</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-purple-600 transition-colors"
            >
              클럽 소개
            </button>
            <button 
              onClick={() => scrollToSection('challenges')}
              className="text-muted-foreground hover:text-purple-600 transition-colors"
            >
              챌린지
            </button>
            <button 
              onClick={() => scrollToSection('application')}
              className="text-muted-foreground hover:text-purple-600 transition-colors"
            >
              신청하기
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-purple-600 transition-colors"
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
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-purple-600 transition-colors"
              >
                클럽 소개
              </button>
              <button 
                onClick={() => scrollToSection('challenges')}
                className="text-left text-muted-foreground hover:text-purple-600 transition-colors"
              >
                챌린지
              </button>
              <button 
                onClick={() => scrollToSection('application')}
                className="text-left text-muted-foreground hover:text-purple-600 transition-colors"
              >
                신청하기
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-muted-foreground hover:text-purple-600 transition-colors"
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
