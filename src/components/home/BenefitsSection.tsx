import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Award, Headphones, Wrench, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Быстрый ремонт",
      description: "Большинство ремонтов выполняем за 1-2 часа",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Гарантия до 12 месяцев на все виды работ",
      color: "text-green-500"
    },
    {
      icon: Award,
      title: "Опытные мастера",
      description: "Более 10 лет опыта в ремонте техники",
      color: "text-purple-500"
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      description: "Круглосуточная консультация специалистов",
      color: "text-orange-500"
    },
    {
      icon: Wrench,
      title: "Оригинальные запчасти",
      description: "Используем только качественные комплектующие",
      color: "text-red-500"
    },
    {
      icon: Zap,
      title: "Срочный ремонт",
      description: "Экспресс-ремонт в течение нескольких часов",
      color: "text-yellow-500"
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Преимущества</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы предлагаем лучшее соотношение цены, качества и скорости обслуживания
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className={`w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 ${benefit.color}`}>
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
