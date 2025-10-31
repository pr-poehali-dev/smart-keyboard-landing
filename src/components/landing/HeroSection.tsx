import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const HeroSection = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm text-primary font-semibold">Новинка 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Умная клавиатура 
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                X-Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Магнитные свитчи и подключение 8K Гц для непревзойденной производительности
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToOrder} className="text-lg px-8 py-6">
                Купить сейчас
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToOrder} className="text-lg px-8 py-6">
                Оформить предзаказ
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={20} className="text-accent" />
                <span className="text-sm text-muted-foreground">Бесплатная доставка</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-accent" />
                <span className="text-sm text-muted-foreground">Гарантия 2 года</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RotateCcw" size={20} className="text-accent" />
                <span className="text-sm text-muted-foreground">Возврат 30 дней</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 blur-3xl opacity-50" />
            <img 
              src="https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/4e0cf15f-5a84-4c15-b701-9e9e20a3a105.jpg"
              alt="Умная клавиатура X-Pro"
              className="relative w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
