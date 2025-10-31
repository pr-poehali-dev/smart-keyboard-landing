import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const SpecialOfferSection = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 border border-destructive/40 rounded-full">
                  <Icon name="Gift" size={18} className="text-destructive" />
                  <span className="text-sm font-semibold text-destructive">Ограниченное предложение</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  Закажи сейчас и получи подарок!
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1" size={20} />
                    <p className="text-muted-foreground">
                      Стильный коврик для мыши в подарок при покупке
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1" size={20} />
                    <p className="text-muted-foreground">
                      Или скидка 10% на следующий заказ
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1" size={20} />
                    <p className="text-muted-foreground">
                      Бесплатная экспресс-доставка
                    </p>
                  </div>
                </div>
                
                <Button size="lg" onClick={scrollToOrder} className="w-full md:w-auto">
                  Получить специальное предложение
                  <Icon name="Sparkles" className="ml-2" size={20} />
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
                <img 
                  src="https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/4fed1811-ec0a-4492-a270-f0161b1c8ea0.jpg"
                  alt="Коврик для мыши в подарок"
                  className="relative w-full h-auto rounded-xl shadow-xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
