
import lolaum from "@/assets/lolaum-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={lolaum} alt="Lolaum" className="h-10 mb-4" />
            <p className="text-muted-foreground mb-4">
              의지가 아니라 환경으로 당신의 루틴을 완성하는 롤라움
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Lolaum. All rights reserved.
            </p>
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
                onClick={() => document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                챌린지
              </button>
              <button 
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                신청하기
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
