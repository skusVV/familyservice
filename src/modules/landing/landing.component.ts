import { Component } from '@angular/core';
import { SmoothScroll } from '../../directives/scroll.directive';
import {allPersonal} from '../../constants';

const COLOR_SECOND_GREY = '#F3F3F3';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent {
//   sections: any[] = [
//     {
//       title: 'Подбор Персонала',
//       bgColor: COLOR_FIRST,
//       scrollToId: 'personal',
//       items: [
//         {
//           title: 'Услуги Няни',
//           imgSrc: 'assets/img/nyania.jpeg',
//           description: `Надежным помощником для вашего малыша станет няня воспитатель. Это
// квалифицированный специалист со среднеспециальным или высшим
// педагогическим образованием, который возьмет на себя ответственность за
// интеллектуальное и эстетическое развитие вашего ребенка.
// Заказывая у нас услуги няни, вы можете быть полностью спокойны за своего
// ребенка. Все предлагаемые кандидатуры прошли тщательную проверку, имеют
// специальное образование, опыт работы и положительные рекомендации! Доверьте
// подбор профессионалам.`,
//           mobileDescription: `Надежным помощником для вашего малыша станет няня воспитатель. Это
// квалифицированный специалист со среднеспециальным или высшим
// педагогическим образованием, который возьмет на себя ответственность за развитие вашего ребенка.`,
//           reverse: true,
//         },
//         {
//           title: 'Услуги Гувернантки',
//           imgSrc: 'assets/img/huvernantka.jpeg',
//           description: `Гувернантка сопровождает ребенка в кружки, секции, помогает делать школьные
// домашние задания и проверяет их. Домашняя учительница также организует досуг
// детей, знакомит с этикетом, обучает поведению в обществе. Наши педагоги владеют
// методиками преподавания иностранного языка, имеют музыкальное и/или
// художественное образование. Знания педагогики дошкольного воспитания
// обеспечивают развитие ребенка в соответствии с его возрастом и способностями.
// Подготовка к школе обязательно входит в перечень задач работника.`,
//           mobileDescription: `Гувернантка сопровождает ребенка в кружки, секции, помогает делать школьные
// домашние задания и проверяет их. Домашняя учительница также организует досуг
// детей.`,
//         },
//         {
//           title: 'Услуги Домработницы',
//           imgSrc: 'assets/img/domorabot.jpeg',
//           description: `Горничная или домработница поддержит чистоту и порядок, приготовит пищу,
// организует покупку продуктов и оплату счетов, осуществит сезонные работы в доме.
//
// Как следствие, ваша квартира или коттедж станут местом отдыха, а не вторым
// рабочим местом. Если дом находится за пределами Киева, вы можете пригласить домработницу с
// проживанием.`,
//           reverse: true,
//           mobileDescription: `Горничная или домработница поддержит чистоту и порядок, приготовит пищу,
// организует покупку продуктов и оплату счетов, осуществит сезонные работы в доме.`,
//         },
//         {
//           title: 'Услуги Сиделки',
//           imgSrc: 'assets/img/sidelka.jpeg',
//           description: `Сиделка будет приходить либо постоянно проживать дома с больным и следить за
// его самочувствием. При необходимости оказывает первичную помощь,  делать
// нужные медицинские процедуры по указаниям врача.Пожилой или больной
// мужчина или женщина находится под опекой 24 часа в сутки.`,
//           mobileDescription: `Сиделка будет приходить либо постоянно проживать дома с больным и следить за
// его самочувствием.`,
//         },
//         {
//           title: 'Услуги Повара',
//           imgSrc: 'assets/img/povar.jpeg',
//           description: `Наши повара обладают фантазией, даром импровизации, чувством прекрасного, тонким вкусом
// (в том числе и эстетическим). К тому же, у нас повара имеют безупречный глазомер, для точного
// смешивания ингредиентов и добавления в нужных пропорциях. Более того, наши кандидаты
// хорошо разбираються в диетологии, знают всё о калорийности тех или иных продуктов и их
// насыщенности витаминами и другими полезными микроэлементами. Наш кулинар не только
// готовить качественные блюда, но и готовить их быстро.`,
//           reverse: true,
//           mobileDescription: `Наши повара обладают фантазией, даром импровизации, чувством прекрасного, тонким вкусом.
//           Наш кулинар не только готовить качественные блюда, но и готовить их быстро.`,
//         },
//         {
//           title: 'Услуги Водителя',
//           imgSrc: 'assets/img/voditel.jpeg',
//           description: `Наши водителя — это сервис высшего качества. Отлично знают город, терпеливые и
// тактичные. А уж профессиональные навыки, безаварийная езда и тотальное соблюдение
// ПДД – это даже не обсуждается. Помимо перевозки, наши водителя помогают клиенту в
// решении его вопросов: исполнить важные поручения, отвезти документы, забрать детей
// из школы, помочь донести покупки до квартиры и главное — дать почувствовать клиенту
// максимальный комфорт. Нашим кандидатам вы сможите доверить не только дорогостоящий
// автомобиль, но и жизнь и членов его семьи.`,
//           mobileDescription: `Наши водителя — это сервис высшего качества. Отлично знают город, терпеливые и
// тактичные.`,
//         },
//         {
//           title: 'Услуги Садовника-Хозяйственника',
//           imgSrc: 'assets/img/sadovnik.jpeg',
//           description: `Наш садовник Вам сделает ухоженный сад и дачный участок. Сможет предоставить качественный
// уход за экзотическими растениями, маленьким водопадом или каменными дорожками. Мы
// сможем вам предоставить садовника - профессионала, который воплотит все ваши мечты в
// реальность, сотворит истинное произведение искусства в вашем саду и приусадебном участке,
// которое будет круглый год доставлять вам и вашим гостям удовольствие.`,
//           reverse: true,
//           mobileDescription: `Наш садовник Вам сделает ухоженный сад и дачный участок.`,
//         },
//         {
//           title: 'Услуги Гардеробщицы',
//           imgSrc: 'assets/img/hardirobchik.jpeg',
//           description: `Наш специалист по гардеробу осуществляет уход за гардеробной комнатой и ведет
// домашнее хозяйство, связанное с гардеробом. Ткани, из которых сшит VIP-
// гардероб, имеют высокую стоимость и могут быть очень хрупкими. Специалист
// по VIP-гардеробу знает все тонкости, связанные с ними, и может подобрать
// надлежащий комплекс ухода, организовать его или осуществить самостоятельно. 
//
// Наши кандидаты наделены опрятностю, усидчивостю, повышенное внимание к
// деталям, ответственностю и осторожностю при обращении с одеждой и обувью.`,
//           mobileDescription: `Наш специалист по гардеробу осуществляет уход за гардеробной комнатой и ведет
// домашнее хозяйство, связанное с гардеробом.`,
//         },
//         {
//           title: 'Услуги Семейной пары',
//           imgSrc: 'assets/img/simeyna_para.jpeg',
//           description: `В процессе поиска семейной пары мы видим своей задачей найти семью, члены которой в равной
// степени являются высококвалифицированными специалистами, по всем возложенным на них
// функциональным обязанностям. Мужчина выполняет обязанности садовника, сантехника, электрика,
// слесаря, охранника, хозяйственного водителя. Женщина работает в доме: уборка, уход за
// гардеробом, приготовление пищи и др. Важным моментом является, то, что пара проживает на
// территории работодателя и дом находится под постоянным присмотром.
// Семейная пара - команда работников в составе двух человек, которые всегда придут друг другу на
// помощь.`,
//           reverse: true,
//           mobileDescription: `Семейная пара - команда работников в составе двух человек, которые всегда придут друг другу на
// помощь.`,
//         },
//         {
//           title: 'Услуги Охраны',
//           imgSrc: 'assets/img/security_2.jpeg',
//           description: `Загородный дом должен иметь защиту, которую смогут предоставить наши охранники. В случае
// проникновения нежелательных гостей на участок или в дом,наши кандидаты смогут остановить
// процесс кражи, а в идеале — задержать воров на месте преступления. Наши кандидаты
// гарантиуют организацию четкого контрольно-пропускного режима гостей,
// обслуживающего персонала и автотранспорта.`,
//           mobileDescription: `Загородный дом должен иметь защиту, которую смогут предоставить наши охранники.`,
//         },
//       ]
//     }
//   ];

  clients = {
      title: 'Агентство домашнего персонала Family Service',
      bgColor: COLOR_SECOND_GREY,
      scrollToId: 'forCustomers',
      firstItem: {
        title: 'Клиентам',
        description: 'Находим лучших помощников для вашей семьи и бизнеса',
        tags: [
          'Работа по Вашему заказу на конкретный результат (поиск достаточного числа кандидатов,  проведение интервью, сопровождение)',
          'Консультируем на весь период работы персонала',
          'Скрупулёзный, но быстрый отбор по Вашим строгим критериям',
          'За Вами будет закреплен личный менеджер по подбору',
          'Удобный  офис  в центре города',
          'Гарантируем бесплатную замену в течение года',
          'Строго относимся к конфиденциальности'
        ],
      },
    secondItem: {
      title: 'Кандидатам',
      description: 'Помогаем найти хорошую работу с достойной оплатой',
      tags: [
        'Профессионально оцениваем ваш уровень знаний',
        'Конкурентный уровень вознаграждения',
        'Информационная поддержка и консультирование',
        'Трудоустройство заграницей',
        'Предлагаем возможность профессионального обучения',
        'Гарантируем конфиденциальность'
      ]
    }
  };

  workWithAgency = {
    title: 'О Нас',
    bgColor: COLOR_SECOND_GREY,
    scrollToId: 'aboutUs',
    generalDescription: `
      Мы – профессионалы своего дела! Опыт наших специалистов в сфере подбора домашнего персонала, составляет уже более
5-ти лет! В нашем коллективе работают дипломированные сотрудники, которые выполняют свою
роль в системе обслуживания клиента четко, грамотно и максимально быстро! Обращаясь в наше агентство, Вы получаете внимательное отношение и качественное
исполнение своего запроса. Наши специалисты будут рады принять Ваш заказ с помощью контактного телефона,
скайпа, электронной почты или личной встречи!
    `,
    firstItem: {
      title: 'Порядок работы с агентством',
      tags: [
        'Подбор соответствующих кандидатов',
        'Проведение собеседования (проходит в один или несколько этапов)',
        'Утверджение подходящей кандидатуры',
        'Заключение договора',
        'Оплата услуг агентства',
        'Выход персонала на пробные дни'
      ],
    },
    secondItem: {
      title: 'Преимущества работы с нами',
      tags: [
        'Проверенный домашний персонал с опытом работы и рекомендациями',
        'Гарантия бесплатной замены 1 год',
        'Скидки постоянным клиентам',
        'Выезд менеджера к заказчику'
      ]
    }
  };

  contacts = {
    title: 'Контакты',
    scrollToId: 'contacts',
    firstItem: {
      title: 'Телефоны для соискателей',
      description: 'Консультации по трудоустройству:',
      phones: [
        {
          name: '(098) 88 66 878',
          phone: 'tel:+380988866878'
        },
        {
          name: '(050) 88 66 878',
          phone: 'tel:+380508866878'
        },
        {
          name: '(093) 88 66 878',
          phone: 'tel:+380938866878'
        },
      ],
    },
    secondItem: {
      title: 'Телефоны для работодателей',
      description: 'Заказ услуг:',
      phones: [
        {
          name: '(095) 88 66 877',
          phone: 'tel:+3800958866877'
        },
        {
          name: '(093) 88 66 877',
          phone: 'tel:+3800938866877'
        },
      ]
    }
  };

  selectOptions = allPersonal;

  doScroll() {
    new SmoothScroll(document.getElementById('request'), {
      duration: 800,
      offset: null,
      easing: null,
      callbackBefore: () => {},
      callbackAfter: () => {},
      containerId: null
    });
  }
}
