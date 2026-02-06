import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр Петров",
      role: "Владелец бизнеса",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Отличный сервис! Починили мой ноутбук за 2 часа. Мастера профессионалы своего дела. Рекомендую!"
    },
    {
      name: "Мария Иванова",
      role: "Дизайнер",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Восстановили все данные с жесткого диска, которые я считала потерянными навсегда. Огромное спасибо!"
    },
    {
      name: "Дмитрий Смирнов",
      role: "Программист",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Быстро и качественно модернизировали мой ПК. Теперь работает как новый. Цены адекватные."
    },
    {
      name: "Елена Козлова",
      role: "Учитель",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Удалили все вирусы и настроили систему. Компьютер работает намного быстрее. Очень довольна!"
    },
    {
      name: "Игорь Волков",
      role: "Предприниматель",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Профессиональный подход, быстрый ремонт и адекватная цена. Буду обращаться еще!"
    },
    {
      name: "Ольга Морозова",
      role: "Фотограф",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Заменили матрицу на ноутбуке за день. Работа выполнена качественно, дали гарантию. Спасибо!"
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Отзывы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-muted-foreground">
            Более 15000 довольных клиентов доверяют нам свою технику
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
