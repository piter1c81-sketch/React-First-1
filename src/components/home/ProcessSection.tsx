import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Search, Wrench, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Заявка",
      description: "Оставьте заявку онлайн или позвоните нам. Мастер свяжется с вами в течение 15 минут"
    },
    {
      icon: Search,
      number: "02",
      title: "Диагностика",
      description: "Проводим бесплатную диагностику и определяем точную причину неисправности"
    },
    {
      icon: Wrench,
      number: "03",
      title: "Ремонт",
      description: "Выполняем качественный ремонт с использованием профессионального оборудования"
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Гарантия",
      description: "Проверяем работоспособность и выдаем гарантию на выполненные работы"
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Как мы работаем</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Простой процесс ремонта
          </h2>
          <p className="text-lg text-muted-foreground">
            Всего 4 шага отделяют вас от полностью исправного устройства
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
