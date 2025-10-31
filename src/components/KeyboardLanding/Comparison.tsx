import Icon from '@/components/ui/icon';

const Comparison = () => {
  const features = [
    { name: 'Частота опроса', xpro: '8000 Гц', regular: '1000 Гц' },
    { name: 'Тип свитчей', xpro: 'Магнитные', regular: 'Механические' },
    { name: 'Срок службы', xpro: '100М+ нажатий', regular: '50М нажатий' },
    { name: 'Программируемые макросы', xpro: 'Да', regular: 'Нет' },
    { name: 'Время отклика', xpro: '0.125 мс', regular: '1 мс' },
    { name: 'Гарантия', xpro: '2 года', regular: '1 год' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Сравнение с{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              конкурентами
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            X-Pro превосходит обычные клавиатуры по всем параметрам
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur">
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-border/50">
              <div className="text-muted-foreground font-semibold">
                Характеристика
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <Icon name="Zap" size={16} className="text-white" />
                  <span className="font-bold text-white">X-Pro</span>
                </div>
              </div>
              <div className="text-center text-muted-foreground font-semibold">
                Обычные клавиатуры
              </div>
            </div>

            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-6 ${
                  index !== features.length - 1 ? 'border-b border-border/30' : ''
                }`}
              >
                <div className="text-foreground font-medium">
                  {feature.name}
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 font-semibold">
                    <Icon name="Check" size={16} />
                    {feature.xpro}
                  </span>
                </div>
                <div className="text-center text-muted-foreground">
                  {feature.regular === 'Нет' ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive font-semibold">
                      <Icon name="X" size={16} />
                      {feature.regular}
                    </span>
                  ) : (
                    feature.regular
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
