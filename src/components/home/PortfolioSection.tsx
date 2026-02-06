import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle2 } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Восстановление MacBook Pro после залития",
      description: "Полное восстановление материнской платы и замена клавиатуры",
      date: "15 января 2024",
      image: "/placeholder.svg",
      status: "Завершено"
    },
    {
      title: "Модернизация игрового ПК",
      description: "Установка новой видеокарты и увеличение объема RAM до 32GB",
      date: "12 января 2024",
      image: "/placeholder.svg",
      status: "Завершено"
    },
    {
      title: "Восстановление данных с SSD",
      description: "Успешное восстановление 450GB корпоративных данных",
      date: "10 января 2024",
      image: "/placeholder.svg",
      status: "Завершено"
    },
    {
      title: "Ремонт ноутбука ASUS",
      description: "Замена матрицы и чистка системы охлаждения",
      date: "8 января 2024",
      image: "/placeholder.svg",
      status: "Завершено"
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Портфолио</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши последние работы
          </h2>
          <p className="text-lg text-muted-foreground">
            Примеры успешно выполненных ремонтов различной сложности
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-muted-foreground">Изображение работы</div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    {project.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.date}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild>
            <Link to="/portfolio">Все работы</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
