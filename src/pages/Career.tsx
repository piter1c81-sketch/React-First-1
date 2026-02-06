import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Career = () => {
  const jobs = [
    { title: "Инженер по ремонту ПК", location: "Москва", type: "Полная занятость", salary: "от 80 000 ₽" },
    { title: "Специалист по восстановлению данных", location: "Москва", type: "Полная занятость", salary: "от 100 000 ₽" },
    { title: "Мастер по ремонту ноутбуков", location: "Москва", type: "Полная занятость", salary: "от 70 000 ₽" },
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
              <BreadcrumbPage>Карьера</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Вакансии</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Работа у нас</h1>
          <p className="text-lg text-muted-foreground">
            Присоединяйтесь к нашей команде профессионалов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobs.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center text-sm font-semibold text-primary">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {job.salary}
                </div>
                <Button className="w-full">Откликнуться</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
