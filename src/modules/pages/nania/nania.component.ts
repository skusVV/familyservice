import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';
import {Title, Meta} from '@angular/platform-browser';
import {scrollOptions} from '../../../constants';

const META_DESCRIPTION = `Ищете няню в Киеве или пригороде? С проживанием или без? Няня грудничку или дошкольнику? Нам есть что Вам
 предложить! Проверенные няни от агентства домашего персонала Family Service. Быстрый подбор. Большой выбор кандидатур. Гарантия замены.
  Оставьте заявку или позвоните сейчас!`;
const META_TITLE = 'Услуги няни в Киеве - няня для ребенка (Киев) - почасово / с проживанием - Family Service';

@Component({
  selector: 'app-nania',
  templateUrl: './nania.component.html',
  styleUrls: ['./nania.component.less']
})
export class NaniaComponent implements OnInit {
  data = {
    titleInverte: false,
    buttonInverte: false,
    imgSrc: 'assets/img/nurse_new.jpg',
    title: 'Предлагаем услуги няни по уходу за вашим ребенком',
    buttonText: 'Заказать няню',
    description: `Надежным помощником для вашего малыша станет няня воспитатель. Это
квалифицированный специалист со среднеспециальным или высшим
педагогическим образованием, который возьмет на себя ответственность за
интеллектуальное и эстетическое развитие вашего ребенка.
Заказывая у нас услуги няни, вы можете быть полностью спокойны за своего
ребенка. Все предлагаемые кандидатуры прошли тщательную проверку, имеют
специальное образование, опыт работы и положительные рекомендации! Доверьте
подбор профессионалам.`,
    descriptionMobile: `Все предлагаемые кандидатуры прошли тщательную проверку, имеют
специальное образование, опыт работы и положительные рекомендации! Доверьте
подбор профессионалам.`,
    cards: [
      {
        title: 'Няня грудничку',
        img: 'assets/img/n5.jpg',
        description: `Няня для грудных деток (от рождения до одного года) – это специалист с медицинским и педагогическим образованием и 
        опытом работы с новорожденными. Это человек, который будет активно участвовать в развитии крохи на первых этапах его жизни, а 
        также помогать родителям преодолеть первые трудности.`
      },
      {
        title: 'Няня дошкольнику',
        img: 'assets/img/n2.jpg',
        description: `Няня воспитатель быстрее сумеет выявить способности и таланты ребенка, если занимается только им одним, а не 
        двумя десятками других деток. Ребенку будет интересно с таким другом, а родители будут уверены, что их дитя получает максимум
         внимания и что его способности не останутся незамеченными.
`
      },
      {
        title: 'Няня гувернантка',
        img: 'assets/img/n4.jpg',
        description: `Для обучения ребенка чтению, счету, основам математики и логики требуется подготовленный работник, обладающим
         определёнными навыками общения и работы с детьми, а не обычная няня. Необходимо обладать глубокими познаниями в детской
          психологии, знать методики обучения, понимать, каким задачам необходимо уделять больше внимания, чтобы ребенок пошел в школу 
          действительно подготовленным. Поэтому хорошая гувернантка совмещает функции обычной няни, педагога и детского психолога.`
      }
    ],
    about: [
      {
        title: 'Наши клиенты могут выбрать наиболее удобный для себя график работы няни',
        tags: [
          'Няня на час',
          'Няня на 1-2 дня в неделю',
          'Няня с проживанием',
          'На 5 дней в неделю',
          'Няня выходного дня'
        ]
      },
      {
        texts: [
          `<strong>Няня для малыша</strong> – это такой человек, которому можно доверять, «как самому себе». Просто ли найти такую помощницу (гувернантку)?
           Безусловно, нет. Существует два варианта подбора. Первый – самостоятельно просматривать объявления «ищу работу няней в Киеве» 
           и находить время для встреч с кандидатами. Второй путь – доверить всю подготовительную работу профессионалам. Такой подход
            приобретает все большую популярность – и для этого существует целый ряд причин. `
        ]
      },
      {
        title: `Поиск с помощью агентства – это:`,
        tags: [
          `безопасность;`,
          `надежность выполнения обязательств договора;`,
          `экономия времени и сил;`,
          `доступные цены на услуги подбора няни.`
        ]
      },
      {
        texts: [
          `Важно учитывать, что у кандидата может быть «отличное» резюме и множество рекомендаций по работе в качестве гувернантки или 
          няни, но это не дает оснований полагать, что такой кандидат обязательно подойдет именно вашей семье.`,
          `Выбирая по формальным признакам, очень легко совершить ошибку. Возраст, семейное положение, наличие прописки, опыт работы или
           образование – все эти данные важны, но «идеальная» анкета не является гарантией того, что няня сумеет найти подход к 
           Вашему ребенку и правильно выполнить поставленные перед ней задачи. Всем известно, какие проблемы могут возникать в том случае,
            когда сделан поспешный выбор. Многие работодатели бывают вынуждены поменять несколько сотрудников, чтобы наконец-то найти
             подходящего человека.`,
          `<strong>Возможно, Вы уже не раз давали объявление «ищу няню» и почти отчаялись найти достойную работницу? 
          Мы поможем Вам!</strong>`
        ]
      },
      {
        title: `НЯНЯ ДЛЯ РЕБЕНКА ВЫБИРАЕТСЯ С УЧЕТОМ ТРЕХ ОСНОВНЫХ ТРЕБОВАНИЙ:`,
        tags: [
          `обладать соответствующей профессиональной квалификацией`,
          `подходить для работы именно в вашей семье`,
          `соответствовать всем Вашим требованиям.`
        ]
      },
      {
        texts: [
          `Мы очень внимательно относимся к выбору персонала на вакансию няня (гувернантка) и проводим тщательную работу.`,
        ]
      },
      {
        title: `ОТБОР ПРОИСХОДИТ В ТРИ ЭТАПА`,
        tags: [
          `Просмотр анкет и рекомендаций кандидатов, отобранных нашими специалистами. На данном этапе Ваше личное присутствие не требуется, 
          информация может быть передана по телефону или e-mail.`,
          `Собеседование в нашем агентстве с выбранными кандидатами. В беседе с будущей няней Вы можете понять ее характер.`,
          `Прохождение пробных дней (часов) няней, позволит Вам окончательно убедиться в правильности выбора кандидата.`
        ]
      },
      {
        texts: [
          `Наши специалисты помогут Вам обозначить основные цели, обязанности и определиться с графиком работы няни именно в Вашей семье.
           Эти требования должны быть обязательно выражены – для того, чтобы работница верно понимала свои задачи.`
        ]
      },
      {
        title: `Преимущества работы с нашим агентством:`,
        tags: [
          `Ответственность, закрепленная в договоре`,
          `Конфиденциальность`,
          `Гарантированная замена персонала (при необходимости)`
        ]
      },
      {
        texts: [
          `В распоряжении наших сотрудников имеется огромная база данных профессионалов, работающих в сфере домашнего персонала. 
          Мы поможем Вам найти помощницу, которая будет соответствовать всем Вашим требованиям.`,
          `<strong>На эти и другие вопросы смогут ответить специалисты нашего агентства. Звоните прямо сейчас! </strong>`
        ]
      },
      {
        title: 'Нам Доверяют'
      }
    ],
    partners: [
      'assets/img/partner_fozzy.jpeg',
      'assets/img/partner_uniqa.jpeg',
      'assets/img/partner_toyota.jpg',
      'assets/img/partner_fornet.jpeg',
      'assets/img/partner_nova.jpeg',
    ]
  };
  selectOptions = [
    'Няня грудничек',
    'Няня дошкольнику',
    'Няня гувернантка'
  ];

  requestTitle = 'Заказать няню прямо сейчас !';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(META_TITLE);
    this.meta.updateTag({property: 'og:title', content: META_TITLE});
    this.meta.updateTag({name: 'description', content: META_DESCRIPTION});
    this.meta.updateTag({property: 'og:description', content: META_DESCRIPTION});
    this.doScroll('body');
  }

  private doScroll(scrollTo: string) {
    setTimeout(() => {
      new SmoothScroll(document.getElementById(scrollTo), scrollOptions);
    }, 200);
  }
}
