import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Team = () => {
  const team = [
    { name: "Алексей Сидоров", role: "Ведущий инженер", experience: "12 лет", specialization: "Ремонт материнских плат" },
    { name: "Михаил Кузнецов", role: "Специалист по данным", experience: "8 лет", specialization: "Восстановление информации" },
    { name: "Сергей Новиков", role: "Мастер по ремонту", experience: "10 лет", specialization: "Ремонт ноутбуков" },
    { name: "Андрей Соколов", role: "Диагност", experience: "7 лет", specialization: "Диагностика неисправностей" },
    { name: "Дмитрий Волков", role: "Инженер", experience: "6 лет", specialization: "Модернизация ПК" },
    { name: "Игорь Морозов", role: "Специалист по ПО", experience: "9 лет", specialization: "Настройка систем" },
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
              <BreadcrumbPage>Команда</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Наша команда</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши специалисты</h1>
          <p className="text-lg text-muted-foreground">
            Профессионалы с многолетним опытом работы в сфере ремонта техники
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <Badge variant="secondary" className="mb-3">{member.experience} опыта</Badge>
                <p className="text-sm text-muted-foreground">{member.specialization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
