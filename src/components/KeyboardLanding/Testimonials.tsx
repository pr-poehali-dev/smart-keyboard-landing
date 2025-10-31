import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Артем',
      role: 'Киберспортсмен',
      quote:
        'С подключением 8K Гц, игра стала настолько плавной, что я никогда не вернусь к старым клавиатурам! Магнитные свитчи — это что-то невероятное.',
      avatar: 'А',
      rating: 5,
    },
    {
      name: 'Максим',
      role: 'Разработчик',
      quote:
        'Идеальная клавиатура для программирования. Магнитные свитчи работают бесшумно, а программируемые макросы экономят массу времени.',
      avatar: 'М',
      rating: 5,
    },
    {
      name: 'Дарья',
      role: 'Дизайнер',
      quote:
        'Стильный дизайн и невероятный комфорт при работе. Переключилась с обычной клавиатуры и сразу почувствовала разницу.',
      avatar: 'Д',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Что говорят{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              пользователи
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 10,000 довольных пользователей по всему миру
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
