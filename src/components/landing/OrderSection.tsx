import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export const OrderSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
  };

  return (
    <section id="order" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Преобрази свой рабочий или игровой процесс 
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                с умной клавиатурой X-Pro
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Оформите заказ сейчас и получите все преимущества
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оформить заказ</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Купить сейчас
                    <Icon name="ShoppingCart" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold">X-Pro Клавиатура</span>
                    <span className="text-3xl font-bold text-primary">14 990 ₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-through">19 990 ₽</p>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-border/30">
                  <Icon name="Truck" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Бесплатная доставка</p>
                    <p className="text-sm text-muted-foreground">По всей России, 2-5 дней</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-border/30">
                  <Icon name="Shield" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Гарантия 2 года</p>
                    <p className="text-sm text-muted-foreground">Бесплатный ремонт или замена</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-border/30">
                  <Icon name="RotateCcw" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Возврат средств 30 дней</p>
                    <p className="text-sm text-muted-foreground">Если вас что-то не устроит</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
