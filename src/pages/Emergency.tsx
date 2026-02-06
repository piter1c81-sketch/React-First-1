import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Emergency = () => {
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
              <BreadcrumbPage>Срочный ремонт</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Срочно</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Срочный ремонт</h1>
          <p className="text-lg text-muted-foreground">
            Экспресс-ремонт вашего устройства в течение нескольких часов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">2-4 часа</h3>
              <p className="text-sm text-muted-foreground">
                Время экспресс-ремонта
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">24/7</h3>
              <p className="text-sm text-muted-foreground">
                Работаем круглосуточно
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Вызов</h3>
              <p className="text-sm text-muted-foreground">
                Выезд мастера за 2 часа
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-3xl font-bold mb-4">Нужен срочный ремонт?</h3>
            <p className="text-xl mb-6">Позвоните нам прямо сейчас</p>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+79001234567">
                <Phone className="mr-2 h-5 w-5" />
                +7 (900) 123-45-67
              </a>
            </Button>
            <p className="mt-4 text-sm opacity-90">Или оставьте заявку онлайн</p>
            <Button size="sm" variant="outline" className="mt-2 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/booking">Оставить заявку</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Emergency;
