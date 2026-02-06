import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="w-fit">
              Работаем с 2010 года
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Профессиональный ремонт
              <span className="text-primary"> компьютеров</span> и ноутбуков
            </h1>
            <p className="text-lg text-muted-foreground">
              Быстрая диагностика, качественный ремонт и гарантия на все виды работ.
              Выезд мастера на дом в течение 2 часов.
            </p>
            <div className="space-y-3">
              {[
                "Бесплатная диагностика при ремонте",
                "Гарантия до 12 месяцев",
                "Оригинальные запчасти",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/booking">
                  Записаться на ремонт
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/calculator">Рассчитать стоимость</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 backdrop-blur">
              <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary">24/7</div>
                  <div className="text-xl font-semibold">Поддержка клиентов</div>
                </div>
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

export default HeroSection;
