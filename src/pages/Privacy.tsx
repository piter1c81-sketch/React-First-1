import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Privacy = () => {
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
              <BreadcrumbPage>Политика конфиденциальности</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Документы</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Политика конфиденциальности</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса.</p>
          <h2>1. Общие положения</h2>
          <p>Мы серьезно относимся к защите вашей конфиденциальности и обязуемся защищать вашу личную информацию.</p>
          <h2>2. Сбор информации</h2>
          <p>Мы собираем только необходимую информацию для предоставления наших услуг.</p>
          <h2>3. Использование информации</h2>
          <p>Ваши данные используются исключительно для оказания услуг и улучшения качества обслуживания.</p>
          <h2>4. Защита данных</h2>
          <p>Мы применяем современные технологии защиты данных и не передаем информацию третьим лицам.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
