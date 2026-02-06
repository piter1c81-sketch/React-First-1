import { Card, CardContent } from "@/components/ui/card";
import { Users, Wrench, Award, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "15000+",
      label: "Довольных клиентов",
      color: "text-blue-500"
    },
    {
      icon: Wrench,
      value: "25000+",
      label: "Выполненных ремонтов",
      color: "text-green-500"
    },
    {
      icon: Award,
      value: "14",
      label: "Лет опыта",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      value: "2",
      label: "Часа средний ремонт",
      color: "text-orange-500"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2">
              <CardContent className="pt-6">
                <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
