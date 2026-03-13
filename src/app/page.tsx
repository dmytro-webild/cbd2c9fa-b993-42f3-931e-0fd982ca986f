"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Heart, Phone, Smile, Sparkles, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="circleGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Премудрая"
          navItems={[
            { name: "Услуги", id: "services" },
            { name: "О нас", id: "about" },
            { name: "Отзывы", id: "testimonials" },
            { name: "Контакты", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Салон красоты «Премудрая» в Ижевске"
          description="Подчеркнем вашу естественную красоту. Опытные мастера, профессиональные материалы и уютная атмосфера."
          background={{ variant: "plain" }}
          kpis={[
            { value: "5.0 ★", label: "211 оценок" },
            { value: "182+", label: "отзывов" },
            { value: "8:00-21:00", label: "Ежедневно" }
          ]}
          enableKpiAnimation={true}
          tag="Премиум услуги"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Записаться онлайн", href: "#booking" },
            { text: "Позвонить", href: "tel:+73412330191" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4wwhx5"
          imageAlt="Салон красоты Премудрая"
          mediaAnimation="blur-reveal"
          imagePosition="right"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardTwo
          title="Наши услуги"
          description="Полный спектр косметических услуг для вашей красоты"
          tag="Услуги"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="bento-grid"
          products={[
            {
              id: "1",              brand: "Макияж",              name: "Образ невесты",              price: "6000 ₽",              rating: 5,
              reviewCount: "48",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=u9t362&_wi=1",              imageAlt: "Свадебный макияж"
            },
            {
              id: "2",              brand: "Макияж",              name: "Экспресс сбор",              price: "4100 ₽",              rating: 5,
              reviewCount: "32",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=u9t362&_wi=2",              imageAlt: "Экспресс макияж и укладка"
            },
            {
              id: "3",              brand: "Макияж",              name: "Вечерний макияж",              price: "2400 ₽",              rating: 5,
              reviewCount: "25",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=u9t362&_wi=3",              imageAlt: "Вечерний макияж"
            },
            {
              id: "4",              brand: "Парикмахерские услуги",              name: "Женская стрижка",              price: "от 2000 ₽",              rating: 5,
              reviewCount: "56",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qobyil&_wi=1",              imageAlt: "Женская стрижка"
            },
            {
              id: "5",              brand: "Парикмахерские услуги",              name: "Окрашивание",              price: "от 4300 ₽",              rating: 5,
              reviewCount: "41",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qobyil&_wi=2",              imageAlt: "Профессиональное окрашивание"
            },
            {
              id: "6",              brand: "Ногтевой сервис",              name: "Маникюр + гель лак",              price: "2300 ₽",              rating: 5,
              reviewCount: "63",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=polwdm",              imageAlt: "Маникюр с гель лаком"
            }
          ]}
          carouselMode="buttons"
          buttons={[
            { text: "Посмотреть все услуги", href: "#contact" }
          ]}
        />
      </div>

      <div id="promotion" data-section="promotion">
        <FeatureBento
          title="Весеннее обновление для вашего тела"
          description="После зимы организм нуждается в перезагрузке. В нашем салоне доступны специальные предложения для ваше здоровья и красоты."
          tag="Специальное предложение"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Массаж тела",              description: "Полный курс восстановления мышц и релаксации",              bentoComponent: "marquee",              centerIcon: Sparkles,
              variant: "text",              texts: ["Восстановление", "Релаксация", "Здоровье"]
            },
            {
              title: "Лимфодренажный массаж",              description: "Улучшение циркуляции и вывода токсинов",              bentoComponent: "marquee",              centerIcon: Zap,
              variant: "text",              texts: ["Детокс", "Энергия", "Легкость"]
            },
            {
              title: "Массаж лица",              description: "Омоложение и улучшение тонуса кожи",              bentoComponent: "marquee",              centerIcon: Heart,
              variant: "text",              texts: ["Молодость", "Сияние", "Красота"]
            },
            {
              title: "Скульптурно-буккальный массаж",              description: "Коррекция овала лица и улучшение контуров",              bentoComponent: "marquee",              centerIcon: Smile,
              variant: "text",              texts: ["Контур", "Лифтинг", "Объем"]
            }
          ]}
          buttons={[
            { text: "Записаться на массаж", href: "#booking" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Почему выбирают салон «Премудрая»"
          description={[
            "Мы предоставляем услуги на самом высоком уровне качества. Наша команда состоит из опытных профессионалов, прошедших специальное обучение.",            "Салон оснащен современным оборудованием и использует только сертифицированные, гипоаллергенные материалы. Стерильность и безопасность - наш приоритет.",            "Каждый клиент получает индивидуальный подход и расслабляющую атмосферу. Удобная парковка и расположение в центре города делают нас доступными для вас."
          ]}
          useInvertedBackground={false}
          showBorder={true}
          buttons={[
            { text: "О нас подробнее", href: "#contact" }
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <MetricCardEleven
          title="Галерея наших работ"
          description="Посмотрите результаты нашей работы - фото наших клиентов до и после"
          tag="Портфолио"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",              value: "Маникюр",              title: "Гель лак дизайн",              description: "Профессиональная работа опытного мастера",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9i54eq",              imageAlt: "Маникюр до и после"
            },
            {
              id: "2",              value: "Парикмахер",              title: "Стрижка и укладка",              description: "Стильная трансформация прически",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=z291t2",              imageAlt: "Прическа до и после"
            },
            {
              id: "3",              value: "Салон",              title: "Интерьер",              description: "Современное оборудование и уютная атмосфера",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=jy7vcg",              imageAlt: "Интерьер салона"
            },
            {
              id: "4",              value: "Услуги",              title: "Релаксация",              description: "Зона отдыха для комфорта клиентов",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1jzk6y",              imageAlt: "Зона массажа и отдыха"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Отзывы наших клиентов"
          description="Прочитайте, что говорят наши постоянные клиенты о качестве услуг"
          tag="Отзывы"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          showRating={true}
          testimonials={[
            {
              id: "1",              name: "Элла Кацнеллгогенн",              handle: "@ella_k",              testimonial: "Салон довольно молодой, но в нём всё продумано. Очень удобная локация и приятная атмосфера. Мастера настоящие профессионалы своего дела!",              rating: 5,              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pxvt54",              imageAlt: "Элла"
            },
            {
              id: "2",              name: "Зарина",              handle: "@zarina_beauty",              testimonial: "Очень приятный сервис! Мастер была внимательна и создала расслабляющую атмосферу. Результат превзошел мои ожидания!",              rating: 5,              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3ydx7b",              imageAlt: "Зарина"
            },
            {
              id: "3",              name: "Анна Мехоношина",              handle: "@anna_m",              testimonial: "Хочу выразить огромную благодарность мастеру Дарье. Настоящий профессионал своего дела. Буду приходить только сюда!",              rating: 5,              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oni624",              imageAlt: "Анна"
            },
            {
              id: "4",              name: "Ульяна",              handle: "@ulyana_style",              testimonial: "Люблю этот салон! Особенно массаж у мастера Татьяны и оформление бровей. Каждый раз выходу с улыбкой!",              rating: 5,              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kahcu6",              imageAlt: "Ульяна"
            },
            {
              id: "5",              name: "Полина",              handle: "@polina_nails",              testimonial: "Регулярно хожу на маникюр к мастеру Томиле. Сервис и качество всегда на высоте. Рекомендую всем подругам!",              rating: 5,              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ey9pqq",              imageAlt: "Полина"
            },
            {
              id: "6",              name: "Светлана",              handle: "@svetlana_salon",              testimonial: "Лучший салон в Ижевске! Профессионалы высокого уровня, приятная атмосфера, вежливый персонал. Спасибо большое!",              rating: 5,              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bvhsdd",              imageAlt: "Светлана"
            }
          ]}
        />
      </div>

      <div id="booking" data-section="booking">
        <ContactFaq
          ctaTitle="Записаться на процедуру"
          ctaDescription="Оставьте заявку и администратор салона свяжется с вами для подтверждения записи"
          ctaButton={{
            text: "Позвонить: +7 (3412) 33-01-91",            href: "tel:+73412330191"
          }}
          ctaIcon={Phone}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            {
              id: "1",              title: "Какие способы оплаты вы принимаете?",              content: "Мы принимаем наличный расчет, оплату картой, мобильные платежи и переводы. Возможна предоплата для забронированных услуг."
            },
            {
              id: "2",              title: "Как долго длится каждая процедура?",              content: "Время процедур варьируется: маникюр 1-1,5 часа, стрижка 45 минут - 1,5 часа, макияж 1-2 часа, массаж 50-60 минут. Точное время уточняйте при бронировании."
            },
            {
              id: "3",              title: "Можно ли сделать запись по телефону?",              content: "Да, мы принимаем записи по телефону +7 (3412) 33-01-91. Звоните ежедневно с 8:00 до 21:00. Также вы можете заполнить форму на сайте."
            },
            {
              id: "4",              title: "Есть ли скидки для постоянных клиентов?",              content: "Да, у нас действует программа лояльности для постоянных клиентов. Узнайте детали у администратора салона при первом визите."
            }
          ]}
        />
      </div>

      <div id="location" data-section="location">
        <FaqSplitMedia
          title="Как нас найти"
          description="Мы расположены в центре города Ижевска с удобной парковкой и хорошей транспортной доступностью"
          tag="Контакты"
          textboxLayout="default"
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y1vov3"
          imageAlt="Карта расположения салона Премудрая"
          mediaAnimation="slide-up"
          mediaPosition="left"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "Адрес",              content: "г. Ижевск, ул. Пушкинская, 265<br/>ЖК Ocean City<br/>(первый этаж)"
            },
            {
              id: "2",              title: "Телефон",              content: "+7 (3412) 33-01-91<br/>(доступна отправка SMS и WhatsApp)"
            },
            {
              id: "3",              title: "Режим работы",              content: "Ежедневно<br/>с 8:00 до 21:00<br/>(без выходных)"
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Премудрая"
          leftLink={{
            text: "Политика конфиденциальности",            href: "#"
          }}
          rightLink={{
            text: "Условия использования",            href: "#"
          }}
        />
      </div>
    </ThemeProvider>
  );
}
