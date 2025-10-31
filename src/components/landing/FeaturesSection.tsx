import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Подключение 8K Гц",
      description: "Молниеносный отклик, в 8 раз быстрее стандартных клавиатур. Каждое нажатие регистрируется мгновенно для максимальной точности."
    },
    {
      icon: "Magnet",
      title: "Магнитные свитчи",
      description: "Плавный ход и точность при каждом нажатии. Долгий срок службы без механических поломок благодаря бесконтактной технологии."
    },
    {
      icon: "Command",
      title: "Программируемые макросы",
      description: "Настраивайте горячие клавиши для выполнения сложных команд одним нажатием. Полная персонализация под ваши задачи."
    },
    {
      icon: "Monitor",
      title: "Универсальная совместимость",
      description: "Работает на Windows и macOS без необходимости установки дополнительных драйверов. Подключил и пользуйся."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Основные преимущества 
            <span className="block text-primary">X-Pro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Технологии будущего для профессиональной работы и игр
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
