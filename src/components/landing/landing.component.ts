import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent {
  sections: any[] = [
    {
      title: 'Персонал',
      bgColor: '#F7F7F7',
      scrollToId: 'personal',
      items: [
        {
          title: 'Няня',
          imgSrc: 'assets/img/nyania.jpg',
          description: `Надежным помощником для вашего малыша станет няня воспитатель. Это
квалифицированный специалист со среднеспециальным или высшим
педагогическим образованием, который возьмет на себя ответственность за
интеллектуальное и эстетическое развитие вашего ребенка.
Заказывая у нас услуги няни, вы можете быть полностью спокойны за своего
ребенка. Все предлагаемые кандидатуры прошли тщательную проверку, имеют
специальное образование, опыт работы и положительные рекомендации! Доверьте
подбор профессионалам.`,
          reverse: true,
        },
        {
          title: 'Гувернантка',
          imgSrc: 'assets/img/huvernantka.jpg',
          description: `Гувернантка сопровождает ребенка в кружки, секции, помогает делать школьные
домашние задания и проверяет их. Домашняя учительница также организует досуг
детей, знакомит с этикетом, обучает поведению в обществе. Наши педагоги владеют
методиками преподавания иностранного языка, имеют музыкальное и/или
художественное образование. Знания педагогики дошкольного воспитания
обеспечивают развитие ребенка в соответствии с его возрастом и способностями.
Подготовка к школе обязательно входит в перечень задач работника.`
        },
        {
          title: 'Домоработница',
          imgSrc: 'assets/img/domorabot.jpg',
          description: `Горничная или домработница поддержит чистоту и порядок, приготовит пищу,
организует покупку продуктов и оплату счетов, осуществит сезонные работы в доме.

Как следствие, ваша квартира или коттедж станут местом отдыха, а не вторым
рабочим местом.`,
          reverse: true,
          tags: [
            `Если дом находится за пределами Киева, вы можете пригласить домработницу с
проживанием.`
          ]
        },
        {
          title: 'Сиделка',
          imgSrc: 'assets/img/sidelka.jpg',
          description: `Сиделка будет приходить либо постоянно проживать дома с больным и следить за
его самочувствием. При необходимости оказывает первичную помощь,  делать
нужные медицинские процедуры по указаниям врача.Пожилой или больной
мужчина или женщина находится под опекой 24 часа в сутки.`
        },
        {
          title: 'Повар',
          imgSrc: 'assets/img/povar.jpg',
          description: `Наши повара обладают фантазией, даром импровизации, чувством прекрасного, тонким вкусом
(в том числе и эстетическим). К тому же, у нас повара имеют безупречный глазомер, для точного
смешивания ингредиентов и добавления в нужных пропорциях. Более того, наши кандидаты
хорошо разбираються в диетологии, знают всё о калорийности тех или иных продуктов и их
насыщенности витаминами и другими полезными микроэлементами. Наш кулинар не только
готовить качественные блюда, но и готовить их быстро.`,
          reverse: true
        },
        {
          title: 'Водитель',
          imgSrc: 'assets/img/voditel.jpg',
          description: `Наши водителя — это сервис высшего качества. Отлично знают город, терпеливые и
тактичные. А уж профессиональные навыки, безаварийная езда и тотальное соблюдение
ПДД – это даже не обсуждается. Помимо перевозки, наши водителя помогают клиенту в
решении его вопросов: исполнить важные поручения, отвезти документы, забрать детей
из школы, помочь донести покупки до квартиры и главное — дать почувствовать клиенту
максимальный комфорт. Нашим кандидатам вы сможите доверить не только дорогостоящий
автомобиль, но и жизнь и членов его семьи.`
        },
        {
          title: 'Садовник-Хозяйственник',
          imgSrc: 'assets/img/sadovnik.jpg',
          description: `Наш садовник Вам сделает ухоженный сад и дачный участок. Сможет предоставить качественный
уход за экзотическими растениями, маленьким водопадом или каменными дорожками. Мы
сможем вам предоставить садовника - профессионала, который воплотит все ваши мечты в
реальность, сотворит истинное произведение искусства в вашем саду и приусадебном участке,
которое будет круглый год доставлять вам и вашим гостям удовольствие.`,
          reverse: true
        },
        {
          title: 'Гардеробщица',
          imgSrc: 'assets/img/hardirobchik.jpg',
          description: `Наш специалист по гардеробу осуществляет уход за гардеробной комнатой и ведет
домашнее хозяйство, связанное с гардеробом. Ткани, из которых сшит VIP-
гардероб, имеют высокую стоимость и могут быть очень хрупкими. Специалист
по VIP-гардеробу знает все тонкости, связанные с ними, и может подобрать
надлежащий комплекс ухода, организовать его или осуществить самостоятельно. 

Наши кандидаты наделены опрятностю, усидчивостю, повышенное внимание к
деталям, ответственностю и осторожностю при обращении с одеждой и обувью.`
        },
        {
          title: 'Семейная пара',
          imgSrc: 'assets/img/simeyna_para.jpg',
          description: `В процессе поиска семейной пары мы видим своей задачей найти семью, члены которой в равной
степени являются высококвалифицированными специалистами, по всем возложенным на них
функциональным обязанностям. Мужчина выполняет обязанности садовника, сантехника, электрика,
слесаря, охранника, хозяйственного водителя. Женщина работает в доме: уборка, уход за
гардеробом, приготовление пищи и др. Важным моментом является, то, что пара проживает на
территории работодателя и дом находится под постоянным присмотром.
Семейная пара - команда работников в составе двух человек, которые всегда придут друг другу на
помощь.`,
          reverse: true
        },
        {
          title: 'Охрана',
          imgSrc: 'assets/img/ohrana.jpg',
          description: `Загородный дом должен иметь защиту, которую смогут предоставить наши охранники. В случае
проникновения нежелательных гостей на участок или в дом,наши кандидаты смогут остановить
процесс кражи, а в идеале — задержать воров на месте преступления. Наши кандидаты
гарантиуют организацию четкого контрольно-пропускного режима гостей,
обслуживающего персонала и автотранспорта.`
        },
      ]
    }
  ];

  clients = {
      title: '',
      bgColor: '#F7F7F7',
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
      imgSrc: 'assets/img/5.jpg',
      tags: [
        'Порядок работы с агентством',
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
      imgSrc: 'assets/img/5.jpg',
      tags: [
        'Проверенный домашний персонал с опытом работы и рекомендациями',
        'Гарантия бесплатной замены 1 год',
        'Скидки постоянным клиентам',
        'Выезд менеджера к заказнику'
      ]
    }
  };
}
