import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ComputerRepair = () => {
  const services = [
    { title: "Диагностика неисправностей", price: "Бесплатно", description: "Полная диагностика при ремонте" },
    { title: "Замена материнской платы", price: "от 1500 ₽", description: "Установка новой материнской платы" },
    { title: "Ремонт блока питания", price: "от 800 ₽", description: "Диагностика и ремонт БП" },
    { title: "Чистка от пыли", price: "от 500 ₽", description: "Полная чистка системного блока" },
    { title: "Установка видеокарты", price: "от 600 ₽", description: "Замена или установка GPU" },
    { title: "Замена процессора", price: "от 1000 ₽", description: "Установка нового CPU" },
  ];

  const faqs = [
    {
      question: "Сколько времени занимает ремонт компьютера?",
      answer: "Время ремонта зависит от характера неисправности. Простой ремонт может занять 1-2 часа, более сложные случаи - до 3 дней. После диагностики мы точно определим сроки."
    },
    {
      question: "Какая гарантия на ремонт?",
      answer: "Мы предоставляем гарантию от 3 до 12 месяцев в зависимости от типа выполненных работ. На установленные запчасти действует гарантия производителя."
    },
    {
      question: "Можно ли отремонтировать старый компьютер?",
      answer: "Да, мы ремонтируем компьютеры любого возраста. Однако иногда ремонт старых моделей может быть нецелесообразен с экономической точки зрения."
    },
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
              <BreadcrumbPage>Ремонт компьютеров</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <Badge className="mb-4">Популярная услуга</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ремонт компьютеров
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Профессиональный ремонт настольных компьютеров любой сложности. Быстрая диагностика, качественные запчасти и гарантия на все работы.
            </p>
            <div className="space-y-3 mb-6">
              {[
                "Бесплатная диагностика",
                "Гарантия до 12 месяцев",
                "Оригинальные запчасти",
                "Выезд на дом"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/booking">Записаться на ремонт</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contacts">Задать вопрос</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold mb-1">1-2 часа</div>
                <p className="text-sm text-muted-foreground">Среднее время ремонта</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold mb-1">12 мес</div>
                <p className="text-sm text-muted-foreground">Гарантия на работы</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Wrench className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold mb-1">5000+</div>
                <p className="text-sm text-muted-foreground">Выполненных ремонтов</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold mb-1">98%</div>
                <p className="text-sm text-muted-foreground">Успешных ремонтов</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Виды работ и цены</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Готовы отремонтировать ваш компьютер?</h3>
            <p className="mb-6">Запишитесь на бесплатную диагностику прямо сейчас</p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/booking">Записаться</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComputerRepair;
