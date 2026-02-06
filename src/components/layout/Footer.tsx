import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">PC</span>
              </div>
              <span className="font-bold text-xl">Ремонт ПК</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Профессиональный ремонт компьютеров и ноутбуков. Быстро, качественно, с гарантией.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/computer-repair" className="text-muted-foreground hover:text-primary transition-colors">Ремонт компьютеров</Link></li>
              <li><Link to="/services/laptop-repair" className="text-muted-foreground hover:text-primary transition-colors">Ремонт ноутбуков</Link></li>
              <li><Link to="/services/data-recovery" className="text-muted-foreground hover:text-primary transition-colors">Восстановление данных</Link></li>
              <li><Link to="/services/virus-removal" className="text-muted-foreground hover:text-primary transition-colors">Удаление вирусов</Link></li>
              <li><Link to="/services/upgrade" className="text-muted-foreground hover:text-primary transition-colors">Модернизация ПК</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Наша команда</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary transition-colors">+7 (900) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@pcrepair.ru" className="text-muted-foreground hover:text-primary transition-colors">info@pcrepair.ru</a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Подписаться на новости</p>
              <div className="flex space-x-2">
                <Input placeholder="Email" type="email" className="h-9" />
                <Button size="sm">OK</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Ремонт ПК. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-primary transition-colors">Условия использования</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Конфиденциальность</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
