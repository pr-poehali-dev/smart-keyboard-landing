import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Что дает частота опроса 8K Гц?",
      answer: "Это значит, что клавиатура передает информацию в 8 раз быстрее, чем стандартные устройства (1K Гц). Частота 8000 Гц обеспечивает задержку всего 0.125 мс, что существенно повышает точность в играх и работе. Вы будете чувствовать каждое нажатие мгновенно."
    },
    {
      question: "Чем хороши магнитные свитчи?",
      answer: "Магнитные свитчи обеспечивают более плавное нажатие и не имеют механических частей, что продлевает срок службы клавиатуры до 100 миллионов нажатий. Они работают на основе эффекта Холла - бесконтактная технология исключает износ и заедания."
    },
    {
      question: "Можно ли настроить клавиатуру под себя?",
      answer: "Да! X-Pro поддерживает полное программирование макросов через специальное ПО. Вы можете назначить любые команды на любые клавиши, настроить RGB-подсветку для каждой клавиши отдельно, сохранить до 5 профилей настроек для разных игр или задач."
    },
    {
      question: "Какая гарантия на клавиатуру?",
      answer: "На X-Pro действует расширенная гарантия 2 года. Мы также предлагаем возврат средств в течение 30 дней, если вас что-то не устроит. Бесплатный ремонт или замена при любых производственных дефектах."
    },
    {
      question: "Работает ли клавиатура на Mac?",
      answer: "Да, X-Pro полностью совместима с macOS и Windows без необходимости установки дополнительных драйверов. Просто подключите через USB и начинайте работать. Раскладка автоматически определяется системой."
    },
    {
      question: "Какая стоимость доставки?",
      answer: "Доставка абсолютно бесплатная при заказе X-Pro! Мы отправляем заказы в течение 24 часов. Срок доставки по России - 2-5 рабочих дней. Экспресс-доставка за 1-2 дня доступна для крупных городов."
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Часто задаваемые 
            <span className="block text-primary">вопросы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о X-Pro
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
