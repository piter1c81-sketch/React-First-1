import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Portfolio = () => {
  const projects = [
    {
      title: "Восстановление MacBook Pro после залития",
      description: "Полное восстановление материнской платы, замена клавиатуры и чистка от следов жидкости",
      date: "15 января 2024",
      duration: "3 дня",
      category: "Ноутбуки",
      status: "Завершено"
    },
    {
      title: "Модернизация игрового ПК",
      description: "Установка RTX 4070, увеличение RAM до 32GB, замена на SSD 1TB",
      date: "12 января 2024",
      duration: "1 день",
      category: "ПК",
      status: "Завершено"
    },
    {
      title: "Восстановление данных с SSD Samsung",
      description: "Успешное восстановление 450GB корпоративных данных с поврежденного SSD",
      date: "10 января 2024",
      duration: "2 дня",
      category: "Данные",
      status: "Завершено"
    },
    {
      title: "Ремонт ноутбука ASUS после падения",
      description: "Замена матрицы 15.6 дюймов, ремонт корпуса и петель",
      date: "8 января 2024",
      duration: "2 дня",
      category: "Ноутбуки",
      status: "Завершено"
    },
    {
      title: "Удаление вируса-шифровальщика",
      description: "Полная очистка системы, восстановление зашифрованных файлов",
      date: "5 января 2024",
      duration: "4 часа",
      category: "Программы",
      status: "Завершено"
    },
    {
      title: "Сборка рабочей станции для видеомонтажа",
      description: "Сборка мощного ПК на базе AMD Ryzen 9 и RTX 4090",
      date: "3 января 2024",
      duration: "1 день",
      category: "ПК",
      status: "Завершено"
    },
    {
      title: "Ремонт материнской платы MSI",
      description: "Замена южного моста и восстановление USB портов",
      date: "28 декабря 2023",
      duration: "5 дней",
      category: "ПК",
      status: "Завершено"
    },
    {
      title: "Настройка офисной сети",
      description: "Настройка роутера, коммутаторов и 15 рабочих станций",
      date: "22 декабря 2023",
      duration: "2 дня",
      category: "Сети",
      status: "Завершено"
    },
    {
      title: "Замена батареи MacBook Air",
      description: "Установка оригинальной батареи с калибровкой",
      date: "20 декабря 2023",
      duration: "2 часа",
      category: "Ноутбуки",
      status: "Завершено"
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
              <BreadcrumbPage>Портфолио</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Наши работы</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Портфолио
          </h1>
          <p className="text-lg text-muted-foreground">
            Примеры успешно выполненных ремонтов различной сложности
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все работы</SelectItem>
              <SelectItem value="pc">ПК</SelectItem>
              <SelectItem value="laptop">Ноутбуки</SelectItem>
              <SelectItem value="data">Данные</SelectItem>
              <SelectItem value="software">Программы</SelectItem>
              <SelectItem value="network">Сети</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Изображение работы</div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline">{project.category}</Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    {project.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {project.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Ваша техника нуждается в ремонте?</h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами, и мы добавим ваш проект в наше портфолио успешных ремонтов
            </p>
            <Button size="lg" asChild>
              <Link to="/booking">Записаться на ремонт</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
