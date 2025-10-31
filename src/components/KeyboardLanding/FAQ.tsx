import { useState } from 'react';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Что дает частота опроса 8K Гц?',
      answer:
        'Это значит, что клавиатура передает информацию в 8 раз быстрее, чем стандартные устройства (1000 Гц). Время отклика составляет всего 0.125 мс, что существенно повышает точность в играх и профессиональной работе.',
    },
    {
      question: 'Чем хороши магнитные свитчи?',
      answer:
        'Магнитные свитчи обеспечивают более плавное нажатие и не имеют механических частей, которые могут изнашиваться. Это продлевает срок службы клавиатуры до 100+ миллионов нажатий и делает работу практически бесшумной.',
    },
    {
      question: 'Работает ли клавиатура без драйверов?',
      answer:
        'Да! X-Pro работает по принципу Plug & Play на всех популярных платформах: Windows, macOS и Linux. Для базового использования драйверы не нужны. Дополнительное ПО требуется только для программирования макросов.',
    },
    {
      question: 'Какая гарантия на клавиатуру?',
      answer:
        'Мы предоставляем гарантию 2 года на все компоненты клавиатуры. Также действует 30-дневный период возврата средств, если вас что-то не устроит.',
    },
    {
      question: 'Есть ли доставка в регионы?',
      answer:
        'Да, мы доставляем во все регионы России. Доставка бесплатная при заказе от 10,000 ₽. Стандартный срок доставки — 3-5 рабочих дней.',
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Часто задаваемые{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              вопросы
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о X-Pro
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/50 bg-card/30 backdrop-blur overflow-hidden transition-all duration-300 hover:border-purple-500/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <Icon
                  name={openIndex === index ? 'ChevronUp' : 'ChevronDown'}
                  size={24}
                  className={`text-purple-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
