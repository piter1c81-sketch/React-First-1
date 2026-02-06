import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Terms = () => {
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
              <BreadcrumbPage>Условия использования</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Документы</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Условия использования</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>Настоящие Условия определяют правила использования наших услуг.</p>
          <h2>1. Принятие условий</h2>
          <p>Используя наши услуги, вы соглашаетесь с этими условиями.</p>
          <h2>2. Описание услуг</h2>
          <p>Мы предоставляем услуги по ремонту и обслуживанию компьютерной техники.</p>
          <h2>3. Права и обязанности</h2>
          <p>Клиент обязуется предоставлять достоверную информацию о неисправности.</p>
          <h2>4. Ограничение ответственности</h2>
          <p>Мы не несем ответственности за данные на устройстве, не сохраненные клиентом.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
