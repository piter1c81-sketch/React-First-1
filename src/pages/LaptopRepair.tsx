import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LaptopRepair = () => {
  const brands = ["Apple", "ASUS", "Lenovo", "HP", "Dell", "Acer", "Samsung", "MSI"];

  const commonIssues = [
    { issue: "Замена матрицы", price: "от 2000 ₽" },
    { issue: "Ремонт клавиатуры", price: "от 1500 ₽" },
    { issue: "Замена батареи", price: "от 1200 ₽" },
    { issue: "Чистка системы охлаждения", price: "от 800 ₽" },
    { issue: "Замена жесткого диска", price: "от 1000 ₽" },
    { issue: "Ремонт разъема питания", price: "от 1500 ₽" },
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
              <BreadcrumbPage>Ремонт ноутбуков</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Популярная услуга</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ремонт ноутбуков
          </h1>
          <p className="text-lg text-muted-foreground">
            Профессиональный ремонт ноутбуков всех марок и моделей с гарантией до 12 месяцев
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Ремонтируем все бренды</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                {brand}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs defaultValue="issues" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="issues">Частые проблемы</TabsTrigger>
            <TabsTrigger value="benefits">Преимущества</TabsTrigger>
          </TabsList>
          <TabsContent value="issues" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonIssues.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{item.issue}</h3>
                    <p className="text-2xl font-bold text-primary">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="benefits" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Бесплатная диагностика при ремонте",
                "Оригинальные запчасти от производителя",
                "Гарантия до 12 месяцев",
                "Выезд мастера на дом",
                "Срочный ремонт за 2 часа",
                "Сохранение всех данных"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Запишитесь на ремонт</h3>
            <p className="mb-6">Бесплатная диагностика и консультация специалиста</p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/booking">Оставить заявку</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LaptopRepair;
