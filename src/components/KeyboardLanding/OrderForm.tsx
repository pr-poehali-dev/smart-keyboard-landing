import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Button from './Button';
import { useToast } from '@/hooks/use-toast';

const OrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заказ принят!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения.',
    });
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <section id="order" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Закажи сейчас и получи{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  подарок!
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                  <Icon name="Gift" size={24} className="text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Коврик для мыши в подарок
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Стоимость 1,990 ₽ — бесплатно при заказе сегодня
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                  <Icon name="Truck" size={24} className="text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Бесплатная доставка
                    </p>
                    <p className="text-sm text-muted-foreground">
                      По всей России за 3-5 рабочих дней
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                  <Icon name="Shield" size={24} className="text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Гарантия 2 года
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Возврат средств в течение 30 дней
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">12,990 ₽</span>
                  <span className="text-2xl text-muted-foreground line-through">
                    15,990 ₽
                  </span>
                </div>
                <p className="text-sm text-purple-400 mt-2">
                  Скидка 3,000 ₽ действует только сегодня!
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Оформить заказ
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-foreground"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-foreground"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-foreground"
                    placeholder="ivan@example.com"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Оформить заказ
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой
                  конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
