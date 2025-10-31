import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-accent" size={28} />
              <span className="text-xl font-bold">X-Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Инновационные клавиатуры для профессионалов и геймеров
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Twitter" size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Youtube" size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-foreground transition-colors">
                  Преимущества
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="hover:text-foreground transition-colors">
                  Отзывы
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('comparison')} className="hover:text-foreground transition-colors">
                  Сравнение
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-foreground transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Доставка и оплата</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Гарантия</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Возврат товара</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Контакты</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Подписка</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Получайте новости и специальные предложения
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email" type="email" />
              <Button size="icon">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 X-Pro. Все права защищены.</p>
          <div className="flex gap-6">
            <button className="hover:text-foreground transition-colors">Политика конфиденциальности</button>
            <button className="hover:text-foreground transition-colors">Условия использования</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
