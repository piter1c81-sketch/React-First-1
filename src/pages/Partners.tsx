import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Partners = () => {
  const partners = [
    "Intel", "AMD", "ASUS", "MSI", "Gigabyte", "Samsung", "Kingston", "Crucial", "Western Digital", "Seagate", "Corsair", "Thermaltake"
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
              <BreadcrumbPage>Партнеры</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Партнеры</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши партнеры</h1>
          <p className="text-lg text-muted-foreground">
            Мы работаем с ведущими производителями комплектующих
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                  <span className="text-muted-foreground">Logo</span>
                </div>
                <p className="font-semibold">{partner}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
