import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border/50 bg-card/20 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Icon name="Keyboard" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                X-Pro
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Умная клавиатура с магнитными свитчами и подключением 8K Гц
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Преимущества
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Отзывы
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('order')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Заказать
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Возврат
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Гарантия
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} className="text-purple-400" />
                <a href="tel:+78001234567" className="hover:text-foreground transition-colors">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Mail" size={16} className="text-purple-400" />
                <a href="mailto:info@xpro.ru" className="hover:text-foreground transition-colors">
                  info@xpro.ru
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} className="text-purple-400" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© 2024 X-Pro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
