import Button from './Button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
              <Icon name="Zap" size={20} className="text-purple-400" />
              <span className="text-sm text-purple-400 font-semibold">
                Новинка 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Умная клавиатура{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                X-Pro
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Магнитные свитчи и подключение{' '}
              <span className="text-cyan-400 font-bold">8K Гц</span> для
              непревзойденной производительности
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToOrder}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Купить сейчас
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть видео
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">8K</p>
                <p className="text-sm text-muted-foreground">Частота Гц</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">100М+</p>
                <p className="text-sm text-muted-foreground">Нажатий</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">2 года</p>
                <p className="text-sm text-muted-foreground">Гарантия</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-pink-600/50 blur-3xl" />
            <img
              src="https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/fc1c52b6-742a-48ad-838e-4f8053ace642.jpg"
              alt="X-Pro Keyboard"
              className="relative rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-xl animate-pulse">
              <p className="text-sm text-white/80">Специальная цена</p>
              <p className="text-3xl font-bold text-white">12 990 ₽</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
