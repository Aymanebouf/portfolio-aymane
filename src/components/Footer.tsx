import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-end gap-4">
          {/* Back to top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover-lift text-muted-foreground hover:text-primary"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Retour en haut
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;