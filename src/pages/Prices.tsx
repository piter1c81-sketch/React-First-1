import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Prices = () => {
  const computerServices = [
    { service: "Диагностика неисправностей", price: "Бесплатно", time: "30 мин" },
    { service: "Чистка от пыли", price: "от 500 ₽", time: "1 час" },
    { service: "Замена термопасты", price: "от 400 ₽", time: "30 мин" },
    { service: "Установка Windows", price: "от 800 ₽", time: "2 часа" },
    { service: "Замена блока питания", price: "от 800 ₽", time: "1 час" },
    { service: "Замена видеокарты", price: "от 600 ₽", time: "1 час" },
  ];

  const laptopServices = [
    { service: "Диагностика", price: "Бесплатно", time: "30 мин" },
    { service: "Замена матрицы", price: "от 2000 ₽", time: "2-3 часа" },
    { service: "Замена клавиатуры", price: "от 1500 ₽", time: "1-2 часа" },
    { service: "Замена батареи", price: "от 1200 ₽", time: "1 час" },
    { service: "Чистка системы охлаждения", price: "от 800 ₽", time: "1-2 часа" },
    { service: "Ремонт разъема питания", price: "от 1500 ₽", time: "2-3 часа" },
  ];

  const softwareServices = [
    { service: "Установка Windows", price: "от 800 ₽", time: "2 часа" },
    { service: "Удаление вирусов", price: "от 400 ₽", time: "1-2 часа" },
    { service: "Установка драйверов", price: "от 300 ₽", time: "1 час" },
    { service: "Настройка сети", price: "от 500 ₽", time: "1 час" },
    { service: "Восстановление данных", price: "от 1500 ₽", time: "1-3 дня" },
    { service: "Резервное копирование", price: "от 600 ₽", time: "1-2 часа" },
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
              <BreadcrumbPage>Цены</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Прайс-лист</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Цены на услуги
          </h1>
          <p className="text-lg text-muted-foreground">
            Прозрачное ценообразование без скрытых платежей
          </p>
        </div>

        <Tabs defaultValue="computer" className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
            <TabsTrigger value="computer">ПК</TabsTrigger>
            <TabsTrigger value="laptop">Ноутбуки</TabsTrigger>
            <TabsTrigger value="software">Программы</TabsTrigger>
          </TabsList>

          <TabsContent value="computer" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Услуга</TableHead>
                      <TableHead>Стоимость</TableHead>
                      <TableHead>Время</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {computerServices.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.service}</TableCell>
                        <TableCell className="text-primary font-semibold">{item.price}</TableCell>
                        <TableCell className="text-muted-foreground">{item.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="laptop" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Услуга</TableHead>
                      <TableHead>Стоимость</TableHead>
                      <TableHead>Время</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {laptopServices.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.service}</TableCell>
                        <TableCell className="text-primary font-semibold">{item.price}</TableCell>
                        <TableCell className="text-muted-foreground">{item.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="software" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Услуга</TableHead>
                      <TableHead>Стоимость</TableHead>
                      <TableHead>Время</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {softwareServices.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.service}</TableCell>
                        <TableCell className="text-primary font-semibold">{item.price}</TableCell>
                        <TableCell className="text-muted-foreground">{item.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">Бесплатно</div>
              <p className="text-muted-foreground">Диагностика при ремонте</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">12 мес</div>
              <p className="text-muted-foreground">Гарантия на работы</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">-20%</div>
              <p className="text-muted-foreground">Скидка для новых клиентов</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Рассчитайте стоимость ремонта</h3>
            <p className="mb-6">Воспользуйтесь нашим калькулятором для точного расчета</p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/calculator">Открыть калькулятор</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Prices;
