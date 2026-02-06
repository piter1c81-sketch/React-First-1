import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const faqs = [
    {
      question: "Сколько времени занимает ремонт?",
      answer: "Время ремонта зависит от сложности неисправности. Простой ремонт (замена термопасты, чистка) занимает 1-2 часа. Более сложный ремонт может занять от 1 до 3 дней. После диагностики мы точно сообщим сроки."
    },
    {
      question: "Какая гарантия на ремонт?",
      answer: "Мы предоставляем гарантию от 3 до 12 месяцев в зависимости от вида работ. На установленные запчасти действует гарантия производителя. Все условия гарантии прописываются в договоре."
    },
    {
      question: "Выезжаете ли вы на дом?",
      answer: "Да, мы предоставляем услугу выезда мастера на дом или в офис. Выезд осуществляется в течение 2 часов после вашего звонка. Стоимость выезда в пределах МКАД - 500 рублей."
    },
    {
      question: "Нужно ли записываться заранее?",
      answer: "Предварительная запись желательна, но не обязательна. Вы можете приехать в наш сервисный центр без записи в рабочее время. Для выезда мастера на дом запись обязательна."
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer: "Мы принимаем оплату наличными, банковскими картами, через СБП. Также возможна безналичная оплата для юридических лиц с выставлением счета."
    },
    {
      question: "Что делать, если устройство не подлежит ремонту?",
      answer: "После диагностики, если ремонт экономически нецелесообразен, мы честно об этом сообщим. В этом случае диагностика будет бесплатной. Мы также можем помочь с выбором нового устройства."
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/faq">Все вопросы и ответы</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
