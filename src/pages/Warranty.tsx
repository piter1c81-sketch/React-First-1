import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Warranty = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Гарантия</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Гарантия качества</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Гарантийные условия</h1>
          <p className="text-lg text-muted-foreground">
            Мы гарантируем качество всех выполненных работ
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6 text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
            <div className="text-5xl font-bold text-primary mb-4">12 месяцев</div>
            <p className="text-xl">Гарантия на ремонт и запчасти</p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Что входит в гарантию</h2>
            <div className="space-y-3">
              {[
                "Бесплатное устранение выявленных дефектов",
                "Замена установленных запчастей при неисправности",
                "Повторная диагностика без оплаты",
                "Консультации по эксплуатации"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Условия гарантии</h2>
            <p className="text-muted-foreground">
              Гарантия действует при соблюдении правил эксплуатации и не распространяется на
              механические повреждения, залитие жидкостью или вмешательство третьих лиц.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
