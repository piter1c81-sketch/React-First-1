import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Reviews = () => {
  const reviews = [
    { name: "Александр Петров", role: "Владелец бизнеса", rating: 5, date: "2 дня назад", text: "Отличный сервис! Починили мой ноутбук за 2 часа. Мастера профессионалы своего дела. Рекомендую всем!" },
    { name: "Мария Иванова", role: "Дизайнер", rating: 5, date: "5 дней назад", text: "Восстановили все данные с жесткого диска, которые я считала потерянными навсегда. Огромное спасибо за профессионализм!" },
    { name: "Дмитрий Смирнов", role: "Программист", rating: 5, date: "1 неделю назад", text: "Быстро и качественно модернизировали мой ПК. Теперь работает как новый. Цены адекватные, работой доволен." },
    { name: "Елена Козлова", role: "Учитель", rating: 5, date: "2 недели назад", text: "Удалили все вирусы и настроили систему. Компьютер работает намного быстрее. Очень довольна результатом!" },
    { name: "Игорь Волков", role: "Предприниматель", rating: 5, date: "3 недели назад", text: "Профессиональный подход, быстрый ремонт и адекватная цена. Буду обращаться еще и рекомендую друзьям!" },
    { name: "Ольга Морозова", role: "Фотограф", rating: 5, date: "1 месяц назад", text: "Заменили матрицу на ноутбуке за день. Работа выполнена качественно, дали гарантию на год. Большое спасибо!" },
    { name: "Сергей Новиков", role: "Студент", rating: 5, date: "1 месяц назад", text: "Отремонтировали ноутбук после залития. Думал, что всё, но они смогли восстановить. Молодцы!" },
    { name: "Анна Соколова", role: "Менеджер", rating: 5, date: "2 месяца назад", text: "Установили SSD и увеличили память. Компьютер летает! Цена-качество на высоте." },
    { name: "Виктор Попов", role: "Архитектор", rating: 5, date: "2 месяца назад", text: "Собрали мощную рабочую станцию под мои задачи. Всё работает отлично, помогли с выбором комплектующих." },
  ];

  const avgRating = 5.0;
  const totalReviews = reviews.length;

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
              <BreadcrumbPage>Отзывы</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Отзывы клиентов</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h1>
          <p className="text-lg text-muted-foreground">
            Более {totalReviews}000 довольных клиентов доверяют нам свою технику
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">{avgRating}</span>
            <span className="text-muted-foreground">из {totalReviews} отзывов</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
