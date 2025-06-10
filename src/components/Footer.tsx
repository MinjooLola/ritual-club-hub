
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-primary mb-4">리추얼클럽</h4>
            <p className="text-muted-foreground mb-4">
              더 나은 나를 위한 변화의 여정, 함께 시작해보세요.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 리추얼클럽. All rights reserved.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-4">연락처</h5>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>ritual.club@email.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>010-0000-0000</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>서울시 강남구</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                클럽 소개
              </button>
              <button 
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                신청하기
              </button>
              <button 
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                일정
              </button>
              <button 
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                후기
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
