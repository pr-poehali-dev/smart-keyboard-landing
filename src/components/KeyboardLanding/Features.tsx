import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'Подключение 8K Гц',
      description:
        'Молниеносный отклик, в 8 раз быстрее стандартных клавиатур. Каждое нажатие регистрируется мгновенно для максимальной точности.',
      image: 'https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/5fb7c86b-b1b7-4382-b33f-7e35abf3fb6f.jpg',
    },
    {
      icon: 'Magnet',
      title: 'Магнитные свитчи',
      description:
        'Плавный ход и точность при каждом нажатии. Срок службы более 100 миллионов нажатий без механических поломок.',
      image: 'https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/2ab8c64a-c881-4163-9d16-029d13aa7419.jpg',
    },
    {
      icon: 'Settings',
      title: 'Программируемые макросы',
      description:
        'Настраивайте горячие клавиши для выполнения сложных команд одним нажатием. Полная свобода кастомизации под ваши задачи.',
    },
    {
      icon: 'Monitor',
      title: 'Универсальная совместимость',
      description:
        'Работает на любой платформе — Windows, macOS, Linux. Plug & Play без необходимости установки дополнительных драйверов.',
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Основные преимущества{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              X-Pro
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Передовые технологии для профессиональной работы и игр
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
