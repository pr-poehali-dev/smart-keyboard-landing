import Icon from '@/components/ui/icon';
import Button from './Button';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <Icon name="Keyboard" size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            X-Pro
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Преимущества
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Отзывы
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </button>
        </nav>
        <Button size="sm" onClick={() => scrollToSection('order')}>
          Купить сейчас
        </Button>
      </div>
    </header>
  );
};

export default Header;
