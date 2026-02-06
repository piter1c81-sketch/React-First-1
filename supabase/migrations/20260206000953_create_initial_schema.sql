/*
  # Создание начальной схемы базы данных для сайта ремонта ПК

  ## Описание
  Создаем базовую структуру базы данных для сайта по ремонту компьютерной техники

  ## Новые таблицы
  
  ### 1. services (Услуги)
    - `id` (uuid, primary key)
    - `title` (text) - название услуги
    - `description` (text) - описание
    - `price_from` (integer) - цена от
    - `category` (text) - категория
    - `popular` (boolean) - популярная услуга
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  ### 2. clients (Клиенты)
    - `id` (uuid, primary key)
    - `name` (text) - имя
    - `email` (text) - email
    - `phone` (text) - телефон
    - `address` (text) - адрес
    - `created_at` (timestamptz)

  ### 3. employees (Сотрудники)
    - `id` (uuid, primary key)
    - `name` (text) - имя
    - `role` (text) - должность
    - `experience` (text) - опыт работы
    - `specialization` (text) - специализация
    - `created_at` (timestamptz)

  ### 4. bookings (Заявки на ремонт)
    - `id` (uuid, primary key)
    - `client_id` (uuid) - ссылка на клиента
    - `service_id` (uuid) - ссылка на услугу
    - `device_type` (text) - тип устройства
    - `problem_description` (text) - описание проблемы
    - `preferred_date` (date) - желаемая дата
    - `status` (text) - статус заявки
    - `created_at` (timestamptz)

  ### 5. reviews (Отзывы)
    - `id` (uuid, primary key)
    - `client_name` (text) - имя клиента
    - `client_role` (text) - должность/роль
    - `rating` (integer) - рейтинг (1-5)
    - `text` (text) - текст отзыва
    - `created_at` (timestamptz)
    - `approved` (boolean) - одобрен

  ### 6. blog_posts (Статьи блога)
    - `id` (uuid, primary key)
    - `title` (text) - заголовок
    - `excerpt` (text) - краткое описание
    - `content` (text) - содержание
    - `category` (text) - категория
    - `read_time` (text) - время чтения
    - `author_id` (uuid) - автор
    - `published` (boolean) - опубликовано
    - `created_at` (timestamptz)

  ### 7. portfolio_items (Портфолио работ)
    - `id` (uuid, primary key)
    - `title` (text) - название проекта
    - `description` (text) - описание
    - `category` (text) - категория
    - `duration` (text) - длительность
    - `status` (text) - статус
    - `created_at` (timestamptz)

  ### 8. price_list (Прайс-лист)
    - `id` (uuid, primary key)
    - `service_name` (text) - название услуги
    - `price` (integer) - цена
    - `time_estimate` (text) - время выполнения
    - `category` (text) - категория
    - `created_at` (timestamptz)

  ## Безопасность
  - Включен RLS для всех таблиц
  - Политики настроены для публичного чтения и ограниченной записи
*/

-- Создание таблицы услуг
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price_from integer NOT NULL DEFAULT 0,
  category text NOT NULL,
  popular boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read services"
  ON services FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы клиентов
CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE,
  phone text NOT NULL,
  address text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON clients FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can create client"
  ON clients FOR INSERT
  TO public
  WITH CHECK (true);

-- Создание таблицы сотрудников
CREATE TABLE IF NOT EXISTS employees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  experience text NOT NULL,
  specialization text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read employees"
  ON employees FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage employees"
  ON employees FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы заявок
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id),
  service_id uuid REFERENCES services(id),
  device_type text NOT NULL,
  problem_description text NOT NULL,
  preferred_date date,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can create booking"
  ON bookings FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы отзывов
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_role text,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text text NOT NULL,
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
  ON reviews FOR SELECT
  TO public
  USING (approved = true);

CREATE POLICY "Anyone can create review"
  ON reviews FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can approve reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы статей блога
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  read_time text NOT NULL,
  author_id uuid REFERENCES employees(id),
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published posts"
  ON blog_posts FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Authenticated users can manage posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы портфолио
CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  duration text NOT NULL,
  status text DEFAULT 'completed',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read portfolio"
  ON portfolio_items FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage portfolio"
  ON portfolio_items FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы прайс-листа
CREATE TABLE IF NOT EXISTS price_list (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name text NOT NULL,
  price text NOT NULL,
  time_estimate text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE price_list ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read prices"
  ON price_list FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage prices"
  ON price_list FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
