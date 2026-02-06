import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, Cpu, Database, Shield, HardDrive, Wrench, Smartphone, Monitor, Wifi, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Services = () => {
  const services = [
    { icon: Laptop, title: "Ремонт ноутбуков", description: "Диагностика и ремонт любых неисправностей ноутбуков всех марок", price: "от 500 ₽", link: "/services/laptop-repair", popular: true },
    { icon: Cpu, title: "Ремонт компьютеров", description: "Профессиональный ремонт настольных ПК с гарантией", price: "от 600 ₽", link: "/services/computer-repair", popular: true },
    { icon: Database, title: "Восстановление данных", description: "Восстановление потерянных файлов с жестких дисков и SSD", price: "от 1500 ₽", link: "/services/data-recovery", popular: false },
    { icon: Shield, title: "Удаление вирусов", description: "Полная очистка системы от вирусов и вредоносного ПО", price: "от 400 ₽", link: "/services/virus-removal", popular: true },
    { icon: HardDrive, title: "Замена комплектующих", description: "Замена и установка новых комплектующих для ПК и ноутбуков", price: "от 300 ₽", link: "/services/parts-replacement", popular: false },
    { icon: Wrench, title: "Модернизация ПК", description: "Апгрейд вашего компьютера для повышения производительности", price: "от 800 ₽", link: "/services/upgrade", popular: true },
    { icon: Smartphone, title: "Ремонт планшетов", description: "Ремонт планшетов любых марок и моделей", price: "от 700 ₽", link: "/services/tablet-repair", popular: false },
    { icon: Monitor, title: "Ремонт мониторов", description: "Диагностика и ремонт мониторов различных типов", price: "от 1000 ₽", link: "/services/monitor-repair", popular: false },
    { icon: Wifi, title: "Настройка сетей", description: "Настройка домашних и офисных сетей, Wi-Fi роутеров", price: "от 500 ₽", link: "/services/network-setup", popular: false },
    { icon: Printer, title: "Ремонт принтеров", description: "Ремонт и обслуживание принтеров и МФУ", price: "от 600 ₽", link: "/services/printer-repair", popular: false },
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
              <BreadcrumbPage>Услуги</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Все услуги</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
          <p className="text-lg text-muted-foreground">
            Полный комплекс услуг по ремонту и обслуживанию компьютерной техники
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              {service.popular && (
                <Badge className="absolute -top-2 -right-2">Популярно</Badge>
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

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Не нашли нужную услугу?</h2>
          <p className="text-muted-foreground mb-6">
            Свяжитесь с нами, и мы подберем решение для вашей задачи
          </p>
          <Button size="lg" asChild>
            <Link to="/contacts">Связаться с нами</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
