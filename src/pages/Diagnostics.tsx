import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Diagnostics = () => {
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
              <BreadcrumbPage>Диагностика</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Бесплатно</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Бесплатная диагностика</h1>
          <p className="text-lg text-muted-foreground">
            Точное определение неисправности вашего устройства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <Search className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Точная диагностика</h3>
              <p className="text-sm text-muted-foreground">
                Используем профессиональное оборудование
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">30 минут</h3>
              <p className="text-sm text-muted-foreground">
                Среднее время диагностики
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Бесплатно</h3>
              <p className="text-sm text-muted-foreground">
                При ремонте в нашем центре
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Запишитесь на диагностику</h3>
            <p className="mb-6">Бесплатная диагностика при ремонте</p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/booking">Записаться</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Diagnostics;
