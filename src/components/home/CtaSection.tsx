import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы починить вашу технику?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Оставьте заявку прямо сейчас и получите бесплатную консультацию специалиста
            </p>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" type="tel" />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите проблему" rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <a href="tel:+79001234567" className="font-semibold hover:text-primary transition-colors">
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@pcrepair.ru" className="font-semibold hover:text-primary transition-colors">
                    info@pcrepair.ru
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="font-semibold">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 backdrop-blur">
              <div className="h-full rounded-xl bg-background/50 backdrop-blur flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Специальное предложение</h3>
                <div className="text-5xl font-bold text-primary mb-4">-20%</div>
                <p className="text-muted-foreground mb-6">
                  Скидка на первый ремонт для новых клиентов
                </p>
                <Button size="lg" asChild>
                  <Link to="/booking">Воспользоваться</Link>
                </Button>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
