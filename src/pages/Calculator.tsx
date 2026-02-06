import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Calculator = () => {
  const [price, setPrice] = useState(0);

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
              <BreadcrumbPage>Калькулятор стоимости</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Калькулятор</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Рассчитать стоимость ремонта</h1>
          <p className="text-lg text-muted-foreground">
            Примерная оценка стоимости ремонта вашего устройства
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Тип устройства</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="laptop">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="laptop" id="laptop" />
                    <Label htmlFor="laptop">Ноутбук</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pc" id="pc" />
                    <Label htmlFor="pc">Настольный ПК</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tablet" id="tablet" />
                    <Label htmlFor="tablet">Планшет</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Тип ремонта</CardTitle>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип ремонта" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diagnostics">Диагностика</SelectItem>
                    <SelectItem value="screen">Замена экрана</SelectItem>
                    <SelectItem value="keyboard">Замена клавиатуры</SelectItem>
                    <SelectItem value="battery">Замена батареи</SelectItem>
                    <SelectItem value="hdd">Замена HDD/SSD</SelectItem>
                    <SelectItem value="cleaning">Чистка</SelectItem>
                    <SelectItem value="virus">Удаление вирусов</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Дополнительные услуги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="urgent" />
                  <Label htmlFor="urgent">Срочный ремонт (+50%)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pickup" />
                  <Label htmlFor="pickup">Выезд мастера (+500₽)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="backup" />
                  <Label htmlFor="backup">Резервное копирование (+600₽)</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Итоговая стоимость</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary mb-2">{price || "от 500"} ₽</div>
                  <p className="text-sm text-muted-foreground">
                    Примерная стоимость ремонта
                  </p>
                </div>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Диагностика:</span>
                    <span className="font-semibold">Бесплатно</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Гарантия:</span>
                    <span className="font-semibold">12 месяцев</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Время:</span>
                    <span className="font-semibold">1-2 часа</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">Записаться на ремонт</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
