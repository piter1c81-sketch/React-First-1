import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const team = [
    {
      name: "Алексей Сидоров",
      role: "Ведущий инженер",
      avatar: "/placeholder.svg",
      experience: "12 лет опыта"
    },
    {
      name: "Михаил Кузнецов",
      role: "Специалист по данным",
      avatar: "/placeholder.svg",
      experience: "8 лет опыта"
    },
    {
      name: "Сергей Новиков",
      role: "Мастер по ремонту",
      avatar: "/placeholder.svg",
      experience: "10 лет опыта"
    },
    {
      name: "Андрей Соколов",
      role: "Диагност",
      avatar: "/placeholder.svg",
      experience: "7 лет опыта"
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Наша команда</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Опытные специалисты
          </h2>
          <p className="text-lg text-muted-foreground">
            Профессионалы с многолетним опытом работы в сфере ремонта техники
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <Badge variant="secondary">{member.experience}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild>
            <Link to="/team">Вся команда</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
