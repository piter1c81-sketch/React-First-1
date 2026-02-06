import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Blog = () => {
  const posts = [
    { id: 1, title: "Как выбрать SSD для вашего компьютера", excerpt: "Разбираемся в типах SSD накопителей и помогаем выбрать оптимальный вариант", category: "Гайды", date: "20 января 2024", readTime: "5 мин" },
    { id: 2, title: "Признаки перегрева ноутбука и как с ним бороться", excerpt: "Основные симптомы перегрева и способы решения проблемы", category: "Советы", date: "18 января 2024", readTime: "4 мин" },
    { id: 3, title: "Топ-5 ошибок при самостоятельном ремонте", excerpt: "Частые ошибки, которые могут усугубить проблему с техникой", category: "Важно", date: "15 января 2024", readTime: "6 мин" },
    { id: 4, title: "Как продлить жизнь батареи ноутбука", excerpt: "Проверенные способы увеличить срок службы аккумулятора", category: "Советы", date: "12 января 2024", readTime: "5 мин" },
    { id: 5, title: "Что делать если ноутбук не включается", excerpt: "Пошаговая инструкция диагностики и решения проблемы", category: "Гайды", date: "10 января 2024", readTime: "7 мин" },
    { id: 6, title: "Модернизация старого компьютера: стоит ли?", excerpt: "Анализируем когда апгрейд имеет смысл, а когда нет", category: "Аналитика", date: "8 января 2024", readTime: "8 мин" },
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
              <BreadcrumbPage>Блог</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Наш блог</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Блог</h1>
          <p className="text-lg text-muted-foreground">
            Полезные статьи о ремонте и обслуживании компьютерной техники
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Изображение статьи</div>
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">{post.category}</Badge>
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to={`/blog/${post.id}`}>
                    Читать далее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
