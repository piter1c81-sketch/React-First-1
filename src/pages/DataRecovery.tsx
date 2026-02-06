import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, HardDrive, Database, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DataRecovery = () => {
  const devices = [
    { icon: HardDrive, title: "Жесткие диски (HDD)", description: "Восстановление данных с поврежденных HDD" },
    { icon: Database, title: "SSD накопители", description: "Восстановление с твердотельных накопителей" },
    { icon: Smartphone, title: "Флеш-накопители", description: "Восстановление с USB флешек и карт памяти" },
  ];

  const cases = [
    "Случайное удаление файлов",
    "Форматирование диска",
    "Повреждение файловой системы",
    "Вирусная атака",
    "Механическое повреждение",
    "Сбой операционной системы",
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
              <BreadcrumbPage>Восстановление данных</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Профессиональная услуга</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Восстановление данных
          </h1>
          <p className="text-lg text-muted-foreground">
            Восстановление потерянной информации с любых носителей. Работаем с самыми сложными случаями.
          </p>
        </div>

        <Alert className="mb-12 max-w-4xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Важно!</AlertTitle>
          <AlertDescription>
            При потере данных не записывайте ничего на диск и не пытайтесь восстановить данные самостоятельно.
            Это может снизить шансы на успешное восстановление.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {devices.map((device, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <device.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{device.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{device.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">С какими случаями мы работаем</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {cases.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Успешных восстановлений</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">24 часа</div>
              <p className="text-muted-foreground">Среднее время работы</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">5TB+</div>
              <p className="text-muted-foreground">Восстановленных данных</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Нужна помощь с восстановлением данных?</h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами для бесплатной консультации и оценки возможности восстановления
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/booking">Заказать восстановление</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contacts">Задать вопрос</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataRecovery;
