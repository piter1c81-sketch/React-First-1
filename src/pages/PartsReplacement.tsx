import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, HardDrive, MemoryStick, Fan, Battery, Keyboard } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const PartsReplacement = () => {
  const parts = [
    { icon: Cpu, title: "Процессоры", description: "Intel, AMD всех поколений", price: "от 1000 ₽" },
    { icon: MemoryStick, title: "Оперативная память", description: "DDR3, DDR4, DDR5", price: "от 500 ₽" },
    { icon: HardDrive, title: "Жесткие диски и SSD", description: "HDD, SSD, NVMe", price: "от 800 ₽" },
    { icon: Fan, title: "Система охлаждения", description: "Кулеры, термопаста", price: "от 600 ₽" },
    { icon: Battery, title: "Блоки питания", description: "ATX, SFX любой мощности", price: "от 700 ₽" },
    { icon: Keyboard, title: "Периферия", description: "Клавиатуры, мыши, мониторы", price: "от 300 ₽" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/services">Услуги</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Замена комплектующих</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Популярная услуга</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Замена комплектующих
          </h1>
          <p className="text-lg text-muted-foreground">
            Профессиональная замена и установка комплектующих для ПК и ноутбуков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {parts.map((part, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <part.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{part.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{part.description}</p>
                <div className="text-2xl font-bold text-primary">{part.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Оригинальные запчасти</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12 мес</div>
              <p className="text-muted-foreground">Гарантия на установку</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1 час</div>
              <p className="text-muted-foreground">Средняя замена</p>
            </div>
          </div>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Нужна замена комплектующих?</h3>
            <p className="mb-6">Мы поможем подобрать и установить нужные детали</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/booking">Заказать замену</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contacts">Консультация</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartsReplacement;
