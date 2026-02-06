import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Laptop, HardDrive, Shield, Cpu, Database, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Laptop,
      title: "Ремонт ноутбуков",
      description: "Диагностика и ремонт любых неисправностей ноутбуков всех марок",
      price: "от 500 ₽",
      popular: true,
      link: "/services/laptop-repair"
    },
    {
      icon: Cpu,
      title: "Ремонт компьютеров",
      description: "Профессиональный ремонт настольных ПК с гарантией",
      price: "от 600 ₽",
      popular: false,
      link: "/services/computer-repair"
    },
    {
      icon: Database,
      title: "Восстановление данных",
      description: "Восстановление потерянных файлов с жестких дисков и SSD",
      price: "от 1500 ₽",
      popular: false,
      link: "/services/data-recovery"
    },
    {
      icon: Shield,
      title: "Удаление вирусов",
      description: "Полная очистка системы от вирусов и вредоносного ПО",
      price: "от 400 ₽",
      popular: true,
      link: "/services/virus-removal"
    },
    {
      icon: HardDrive,
      title: "Замена комплектующих",
      description: "Замена и установка новых комплектующих для ПК и ноутбуков",
      price: "от 300 ₽",
      popular: false,
      link: "/services/parts-replacement"
    },
    {
      icon: Wrench,
      title: "Модернизация ПК",
      description: "Апгрейд вашего компьютера для повышения производительности",
      price: "от 800 ₽",
      popular: true,
      link: "/services/upgrade"
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Наши услуги</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Широкий спектр услуг по ремонту
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы предлагаем полный комплекс услуг по ремонту и обслуживанию компьютерной техники
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              {service.popular && (
                <Badge className="absolute -top-2 -right-2" variant="default">
                  Популярно
                </Badge>
              )}
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{service.price}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={service.link}>Подробнее</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
