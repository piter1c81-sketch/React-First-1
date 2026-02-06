import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Progress } from "@/components/ui/progress";

const VirusRemoval = () => {
  const threats = [
    { name: "Вирусы", severity: 80 },
    { name: "Троянские программы", severity: 90 },
    { name: "Шпионское ПО", severity: 75 },
    { name: "Рекламное ПО", severity: 60 },
    { name: "Руткиты", severity: 95 },
    { name: "Программы-вымогатели", severity: 100 },
  ];

  const signs = [
    "Медленная работа компьютера",
    "Всплывающая реклама",
    "Неожиданные перезагрузки",
    "Блокировка антивируса",
    "Изменение домашней страницы браузера",
    "Подозрительная сетевая активность",
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
              <BreadcrumbPage>Удаление вирусов</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Быстрая услуга</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Удаление вирусов и вредоносного ПО
          </h1>
          <p className="text-lg text-muted-foreground">
            Полная очистка системы от любых видов вредоносных программ с гарантией
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Что мы удаляем</h2>
            <div className="space-y-4">
              {threats.map((threat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{threat.name}</span>
                    <span className="text-sm text-muted-foreground">
                      Опасность: {threat.severity}%
                    </span>
                  </div>
                  <Progress value={threat.severity} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Признаки заражения</h2>
            <div className="space-y-3">
              {signs.map((sign, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Процесс очистки</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Диагностика", desc: "Сканирование системы" },
              { step: 2, title: "Удаление", desc: "Очистка от вирусов" },
              { step: 3, title: "Защита", desc: "Установка антивируса" },
              { step: 4, title: "Проверка", desc: "Контрольное сканирование" },
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Защита данных</h3>
              <p className="text-sm text-muted-foreground">
                Сохраняем все ваши файлы и документы
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Гарантия 3 месяца</h3>
              <p className="text-sm text-muted-foreground">
                Гарантируем отсутствие вирусов
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-4">1-2ч</div>
              <h3 className="font-semibold mb-2">Быстрая работа</h3>
              <p className="text-sm text-muted-foreground">
                Очистка за 1-2 часа
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Нужна помощь?</h3>
            <p className="mb-6">Закажите удаление вирусов прямо сейчас</p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/booking">Заказать услугу</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VirusRemoval;
