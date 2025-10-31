import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-accent" size={28} />
            <span className="text-xl font-bold">X-Pro</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('comparison')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Сравнение
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </nav>

          <Button onClick={() => scrollToSection('order')}>
            Купить сейчас
          </Button>
        </div>
      </div>
    </header>
  );
};
