import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Shield } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const About = () => {
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
              <BreadcrumbPage>О нас</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">О компании</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О нас</h1>
          <p className="text-lg text-muted-foreground">
            Мы профессионально занимаемся ремонтом компьютерной техники с 2010 года
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Наша история</h2>
            <p className="text-muted-foreground mb-4">
              Компания была основана в 2010 году группой энтузиастов, увлеченных компьютерными технологиями.
              За годы работы мы выросли из небольшой мастерской в крупный сервисный центр.
            </p>
            <p className="text-muted-foreground">
              Сегодня мы гордимся тем, что помогли тысячам клиентов восстановить их технику и
              сохранить важные данные. Наша команда постоянно развивается и следит за новыми
              технологиями в сфере ремонта электроники.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-10 w-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">15000+</div>
                <p className="text-sm text-muted-foreground">Довольных клиентов</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-10 w-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">14</div>
                <p className="text-sm text-muted-foreground">Лет опыта</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Поддержка</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-10 w-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">12 мес</div>
                <p className="text-sm text-muted-foreground">Гарантия</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Качество", desc: "Используем только оригинальные запчасти и профессиональное оборудование" },
              { title: "Честность", desc: "Прозрачные цены без скрытых платежей и честная диагностика" },
              { title: "Скорость", desc: "Выполняем большинство ремонтов в течение 1-2 часов" },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
