import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const FAQ = () => {
  const faqs = [
    { q: "Сколько времени занимает ремонт?", a: "Время ремонта зависит от сложности. Простой ремонт - 1-2 часа, сложный - до 3 дней." },
    { q: "Какая гарантия на ремонт?", a: "Гарантия от 3 до 12 месяцев в зависимости от вида работ." },
    { q: "Выезжаете ли вы на дом?", a: "Да, выезд мастера на дом в течение 2 часов. Стоимость - 500 рублей." },
    { q: "Нужно ли записываться заранее?", a: "Желательно, но не обязательно. Для выезда на дом запись обязательна." },
    { q: "Какие способы оплаты принимаете?", a: "Наличные, карты, СБП, безналичный расчет для юр. лиц." },
    { q: "Что делать если устройство не подлежит ремонту?", a: "Сообщим честно. Диагностика будет бесплатной." },
    { q: "Можно ли посмотреть процесс ремонта?", a: "Да, вы можете присутствовать при ремонте в нашем сервисном центре." },
    { q: "Сохраните ли вы мои данные?", a: "Да, все данные сохраняются. Мы не форматируем диски без вашего согласия." },
    { q: "Работаете ли вы с юридическими лицами?", a: "Да, предоставляем полный пакет документов и работаем по договору." },
    { q: "Есть ли скидки?", a: "Да, -20% для новых клиентов и специальные предложения для постоянных." },
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
              <BreadcrumbPage>FAQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h1>
          <p className="text-lg text-muted-foreground">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Не нашли ответ?</h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами, и мы ответим на все ваши вопросы
            </p>
            <Button size="lg" asChild>
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
