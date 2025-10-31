import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: 'Zap',
      title: 'Подключение 8K Гц',
      description: 'Молниеносный отклик, в 8 раз быстрее стандартных клавиатур. Каждое нажатие регистрируется мгновенно.',
    },
    {
      icon: 'Magnet',
      title: 'Магнитные свитчи',
      description: 'Плавный ход и точность при каждом нажатии. Долгий срок службы без механических поломок.',
    },
    {
      icon: 'Settings',
      title: 'Программируемые макросы',
      description: 'Настраивайте горячие клавиши для выполнения сложных команд одним нажатием.',
    },
    {
      icon: 'Monitor',
      title: 'Универсальная совместимость',
      description: 'Работает с Windows и macOS без установки дополнительных драйверов.',
    },
  ];

  const reviews = [
    {
      name: 'Максим',
      role: 'Киберспортсмен',
      text: 'С подключением 8K Гц, клавиатура работает невероятно быстро и плавно. А магнитные свитчи — это что-то особенное!',
      rating: 5,
    },
    {
      name: 'Артем',
      role: 'Геймер',
      text: 'С подключением 8K Гц, игра стала настолько плавной, что я никогда не вернусь к старым клавиатурам!',
      rating: 5,
    },
    {
      name: 'Екатерина',
      role: 'Разработчик',
      text: 'Программируемые макросы сэкономили мне часы работы. Лучшая покупка для продуктивности!',
      rating: 5,
    },
  ];

  const comparison = [
    { feature: 'Частота опроса', xpro: '8000 Гц', standard: '1000 Гц' },
    { feature: 'Тип свитчей', xpro: 'Магнитные', standard: 'Механические' },
    { feature: 'Срок службы', xpro: '100M нажатий', standard: '50M нажатий' },
    { feature: 'Время отклика', xpro: '0.125 мс', standard: '1 мс' },
    { feature: 'Программируемые макросы', xpro: 'Да', standard: 'Нет' },
  ];

  const faqs = [
    {
      question: 'Что дает частота опроса 8K Гц?',
      answer: 'Это значит, что клавиатура передает информацию в 8 раз быстрее, чем стандартные устройства, что существенно повышает точность в играх и работе.',
    },
    {
      question: 'Чем хороши магнитные свитчи?',
      answer: 'Магнитные свитчи обеспечивают более плавное нажатие и не имеют механических частей, что продлевает срок службы клавиатуры.',
    },
    {
      question: 'Нужны ли драйверы для работы?',
      answer: 'Нет, клавиатура работает по принципу Plug & Play. Просто подключите её к компьютеру, и она готова к использованию.',
    },
    {
      question: 'Какая гарантия предоставляется?',
      answer: 'Мы предоставляем 2 года гарантии на все компоненты клавиатуры. Также доступен возврат в течение 30 дней.',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 animate-fade-in"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                <Icon name="Sparkles" className="mr-2 h-4 w-4" />
                Инновационная технология
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Клавиатура <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">X-Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Магнитные свитчи и подключение <span className="text-accent font-semibold">8K Гц</span> для непревзойденной производительности
              </p>
              <p className="text-lg text-muted-foreground">
                Мощь. Скорость. Инновации. Наслаждайтесь максимальной производительностью и комфортом в каждом нажатии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                  Купить сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Смотреть обзор
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Truck" className="h-5 w-5 text-accent" />
                  <span className="text-sm">Бесплатная доставка</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="h-5 w-5 text-accent" />
                  <span className="text-sm">2 года гарантии</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/fb2f7993-909c-4d86-afa6-51d34c610b0a.jpg"
                alt="X-Pro Keyboard"
                className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Основные преимущества X-Pro</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Технологии будущего доступны уже сегодня
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon} className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Что говорят наши пользователи</h2>
            <p className="text-xl text-muted-foreground">Реальные отзывы от профессионалов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-2 hover:border-accent/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">X-Pro vs Стандартные клавиатуры</h2>
            <p className="text-xl text-muted-foreground">Сравнение говорит само за себя</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 bg-primary/10">
                      <th className="text-left p-4 font-bold text-lg">Характеристика</th>
                      <th className="text-center p-4 font-bold text-lg text-primary">
                        <div className="flex items-center justify-center gap-2">
                          <Icon name="Crown" className="h-5 w-5" />
                          X-Pro
                        </div>
                      </th>
                      <th className="text-center p-4 font-bold text-lg text-muted-foreground">Стандартные</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-accent/5 transition-colors">
                        <td className="p-4 font-medium">{item.feature}</td>
                        <td className="text-center p-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold">
                            {item.xpro}
                            <Icon name="Check" className="h-4 w-4" />
                          </span>
                        </td>
                        <td className="text-center p-4 text-muted-foreground">{item.standard}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/50 bg-card/90 backdrop-blur">
              <CardHeader className="text-center space-y-4 pb-8">
                <div className="inline-flex mx-auto">
                  <Badge className="bg-destructive/20 text-destructive border-destructive/30 text-lg px-4 py-2">
                    <Icon name="Gift" className="mr-2 h-5 w-5" />
                    Специальное предложение
                  </Badge>
                </div>
                <CardTitle className="text-4xl md:text-5xl font-bold">
                  Закажи сейчас и получи подарок!
                </CardTitle>
                <CardDescription className="text-xl">
                  При покупке клавиатуры X-Pro — коврик для мыши премиум-класса в подарок
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <Icon name="Truck" className="h-8 w-8 mx-auto text-accent" />
                    <p className="font-semibold">Бесплатная доставка</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Shield" className="h-8 w-8 mx-auto text-accent" />
                    <p className="font-semibold">Гарантия 2 года</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="RefreshCw" className="h-8 w-8 mx-auto text-accent" />
                    <p className="font-semibold">Возврат 30 дней</p>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Icon name="ShoppingCart" className="mr-2 h-6 w-6" />
                  Получить специальное предложение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Часто задаваемые вопросы</h2>
              <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 rounded-xl px-6 bg-card/50 backdrop-blur data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                    <div className="flex items-center gap-3">
                      <Icon name="HelpCircle" className="h-5 w-5 text-accent" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Преобрази свой рабочий или игровой процесс с клавиатурой <span className="text-primary">X-Pro</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к тысячам довольных пользователей, которые уже оценили преимущества технологии будущего
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-6">
                <Icon name="ShoppingCart" className="mr-2 h-6 w-6" />
                Купить сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2">
                <Icon name="MessageCircle" className="mr-2 h-6 w-6" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/20 py-16 border-t-2 border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">X-Pro</h3>
              <p className="text-muted-foreground">Инновационные решения для профессионалов</p>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Продукт</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Особенности</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Технические характеристики</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Обзоры</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Поддержка</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Доставка</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Возврат</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Гарантия</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  support@xpro.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (800) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2024 X-Pro. Все права защищены.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
