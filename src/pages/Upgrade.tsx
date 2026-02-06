import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

const Upgrade = () => {
  const upgradeOptions = [
    {
      title: "Базовый апгрейд",
      price: "от 3000 ₽",
      features: [
        "Увеличение RAM до 16GB",
        "Установка SSD 256GB",
        "Чистка и замена термопасты",
      ]
    },
    {
      title: "Продвинутый апгрейд",
      price: "от 8000 ₽",
      features: [
        "Увеличение RAM до 32GB",
        "Установка SSD 512GB",
        "Обновление видеокарты",
        "Новая система охлаждения",
      ]
    },
    {
      title: "Максимальный апгрейд",
      price: "от 15000 ₽",
      features: [
        "Новый процессор",
        "RAM 64GB",
        "SSD 1TB + HDD 2TB",
        "Топовая видеокарта",
        "Жидкостное охлаждение",
      ]
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
              <BreadcrumbPage>Модернизация ПК</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Популярно</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Модернизация компьютера
          </h1>
          <p className="text-lg text-muted-foreground">
            Улучшите производительность вашего ПК без покупки нового
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">До 300% прирост</h3>
              <p className="text-sm text-muted-foreground">
                Производительности после апгрейда
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Экономия до 70%</h3>
              <p className="text-sm text-muted-foreground">
                По сравнению с покупкой нового ПК
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Быстрая установка</h3>
              <p className="text-sm text-muted-foreground">
                Апгрейд за 1-2 дня
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Пакеты модернизации</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upgradeOptions.map((option, index) => (
              <Card key={index} className={index === 1 ? "border-2 border-primary" : ""}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">{option.price}</div>
                  <Separator className="mb-6" />
                  <ul className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"} asChild>
                    <Link to="/booking">Выбрать</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Нужна индивидуальная консультация?</h3>
            <p className="text-muted-foreground mb-6">
              Мы поможем подобрать оптимальный вариант модернизации для ваших задач
            </p>
            <Button size="lg" asChild>
              <Link to="/calculator">Рассчитать стоимость</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upgrade;
