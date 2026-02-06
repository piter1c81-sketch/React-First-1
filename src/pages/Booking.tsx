import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
              <BreadcrumbPage>Запись на ремонт</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Онлайн запись</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Запись на ремонт</h1>
          <p className="text-lg text-muted-foreground">
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Информация о ремонте</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Тип устройства</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pc">Настольный ПК</SelectItem>
                    <SelectItem value="laptop">Ноутбук</SelectItem>
                    <SelectItem value="tablet">Планшет</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Тип услуги</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="repair">Ремонт</SelectItem>
                    <SelectItem value="diagnostics">Диагностика</SelectItem>
                    <SelectItem value="upgrade">Модернизация</SelectItem>
                    <SelectItem value="data-recovery">Восстановление данных</SelectItem>
                    <SelectItem value="virus-removal">Удаление вирусов</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Описание проблемы</label>
                <Textarea placeholder="Опишите подробно проблему с устройством" rows={5} />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                <Input placeholder="Введите ваше имя" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" type="tel" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input placeholder="your@email.com" type="email" />
              </div>

              <Button className="w-full" size="lg">Отправить заявку</Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Выберите дату</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold mb-1">Бесплатная диагностика</p>
                  <p className="text-muted-foreground">При ремонте диагностика бесплатно</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Быстрый ремонт</p>
                  <p className="text-muted-foreground">Большинство ремонтов за 1-2 часа</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Гарантия</p>
                  <p className="text-muted-foreground">До 12 месяцев на все работы</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
