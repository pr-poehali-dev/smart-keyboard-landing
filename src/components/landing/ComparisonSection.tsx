import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const ComparisonSection = () => {
  const features = [
    { name: "Частота опроса", xpro: "8K Гц", others: "1K Гц" },
    { name: "Технология свитчей", xpro: "Магнитные", others: "Механические" },
    { name: "Срок службы", xpro: "100M+ нажатий", others: "50M нажатий" },
    { name: "Задержка отклика", xpro: "0.125 мс", others: "1 мс" },
    { name: "Программируемые макросы", xpro: "Да", others: "Ограничено" },
    { name: "Совместимость", xpro: "Win / Mac", others: "Только Win" },
    { name: "RGB подсветка", xpro: "Per-key RGB", others: "Зональная" },
    { name: "Гарантия", xpro: "2 года", others: "1 год" }
  ];

  return (
    <section id="comparison" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Почему выбирают 
            <span className="block text-primary">X-Pro?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Сравнение с обычными клавиатурами того же ценового сегмента
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <CardTitle className="text-primary">X-Pro</CardTitle>
              </div>
              <div className="col-span-1">
                <CardTitle className="text-muted-foreground">Обычные клавиатуры</CardTitle>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 gap-4 items-center py-4 border-b border-border/30 last:border-0"
              >
                <div className="col-span-1 font-medium">
                  {feature.name}
                </div>
                <div className="col-span-1 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span className="font-semibold text-primary">{feature.xpro}</span>
                  </div>
                </div>
                <div className="col-span-1 text-center">
                  <span className="text-muted-foreground">{feature.others}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
