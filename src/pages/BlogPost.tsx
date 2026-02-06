import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const BlogPost = () => {
  const { id } = useParams();

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
              <BreadcrumbLink href="/blog">Блог</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Статья {id}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Button variant="ghost" size="sm" className="mb-4" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к блогу
          </Link>
        </Button>

        <article>
          <Badge className="mb-4">Гайды</Badge>
          <h1 className="text-4xl font-bold mb-4">
            Как выбрать SSD для вашего компьютера
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              20 января 2024
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              5 мин чтения
            </span>
          </div>

          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-8 flex items-center justify-center">
            <div className="text-muted-foreground">Главное изображение</div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              SSD накопители стали стандартом в современных компьютерах благодаря своей
              скорости и надежности. В этой статье мы разберем основные типы SSD и
              поможем выбрать оптимальный вариант для ваших нужд.
            </p>

            <h2>Типы SSD накопителей</h2>
            <p>
              Существует несколько типов SSD накопителей, каждый со своими особенностями...
            </p>

            <h3>SATA SSD</h3>
            <p>
              Наиболее распространенный и доступный тип. Подключается через интерфейс SATA
              и обеспечивает скорость до 550 МБ/с.
            </p>

            <h3>NVMe SSD</h3>
            <p>
              Современный стандарт, использующий интерфейс PCIe. Скорость может достигать
              7000 МБ/с и выше.
            </p>

            <h2>На что обратить внимание при выборе</h2>
            <p>
              При выборе SSD учитывайте следующие параметры: объем памяти, скорость чтения/записи,
              тип памяти, ресурс перезаписи и гарантию производителя.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
