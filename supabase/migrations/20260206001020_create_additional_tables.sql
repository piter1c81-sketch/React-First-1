/*
  # Создание дополнительных таблиц
  
  ## Новые таблицы

  ### 1. repairs (Ремонты)
    - `id` (uuid, primary key)
    - `booking_id` (uuid) - ссылка на заявку
    - `employee_id` (uuid) - ответственный сотрудник
    - `start_date` (timestamptz) - дата начала
    - `end_date` (timestamptz) - дата окончания
    - `status` (text) - статус ремонта
    - `cost` (integer) - стоимость
    - `notes` (text) - заметки
    - `created_at` (timestamptz)

  ### 2. parts (Запчасти)
    - `id` (uuid, primary key)
    - `name` (text) - название
    - `category` (text) - категория
    - `price` (integer) - цена
    - `stock_quantity` (integer) - количество на складе
    - `manufacturer` (text) - производитель
    - `created_at` (timestamptz)

  ### 3. repair_parts (Связь ремонтов и запчастей)
    - `id` (uuid, primary key)
    - `repair_id` (uuid) - ссылка на ремонт
    - `part_id` (uuid) - ссылка на запчасть
    - `quantity` (integer) - количество
    - `created_at` (timestamptz)

  ### 4. invoices (Счета)
    - `id` (uuid, primary key)
    - `repair_id` (uuid) - ссылка на ремонт
    - `total_amount` (integer) - общая сумма
    - `paid` (boolean) - оплачено
    - `payment_date` (timestamptz) - дата оплаты
    - `created_at` (timestamptz)

  ### 5. faq (FAQ)
    - `id` (uuid, primary key)
    - `question` (text) - вопрос
    - `answer` (text) - ответ
    - `category` (text) - категория
    - `order` (integer) - порядок отображения
    - `created_at` (timestamptz)

  ### 6. contacts (Контактные формы)
    - `id` (uuid, primary key)
    - `name` (text) - имя
    - `email` (text) - email
    - `phone` (text) - телефон
    - `message` (text) - сообщение
    - `status` (text) - статус обработки
    - `created_at` (timestamptz)

  ## Безопасность
  - Включен RLS для всех таблиц
  - Настроены соответствующие политики доступа
*/

-- Создание таблицы ремонтов
CREATE TABLE IF NOT EXISTS repairs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid REFERENCES bookings(id),
  employee_id uuid REFERENCES employees(id),
  start_date timestamptz DEFAULT now(),
  end_date timestamptz,
  status text DEFAULT 'in_progress',
  cost integer DEFAULT 0,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE repairs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read repairs"
  ON repairs FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage repairs"
  ON repairs FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы запчастей
CREATE TABLE IF NOT EXISTS parts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  price integer NOT NULL DEFAULT 0,
  stock_quantity integer DEFAULT 0,
  manufacturer text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE parts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read parts"
  ON parts FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage parts"
  ON parts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание связующей таблицы ремонтов и запчастей
CREATE TABLE IF NOT EXISTS repair_parts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  repair_id uuid REFERENCES repairs(id) ON DELETE CASCADE,
  part_id uuid REFERENCES parts(id),
  quantity integer DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE repair_parts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can manage repair_parts"
  ON repair_parts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы счетов
CREATE TABLE IF NOT EXISTS invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  repair_id uuid REFERENCES repairs(id),
  total_amount integer NOT NULL DEFAULT 0,
  paid boolean DEFAULT false,
  payment_date timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can manage invoices"
  ON invoices FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы FAQ
CREATE TABLE IF NOT EXISTS faq (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE faq ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read faq"
  ON faq FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage faq"
  ON faq FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Создание таблицы контактных форм
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create contact"
  ON contacts FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contacts"
  ON contacts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
