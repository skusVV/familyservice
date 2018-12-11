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
    imgSrc: 'assets/img/nania2_banner.jpeg',
    title: 'Предлагаем услуги няни для ухода за вашим ребенком',
    buttonText: 'Заказать няню',
    description: `Надежным помощником для вашего малыша станет няня воспитатель. Это
квалифицированный специалист со среднеспециальным или высшим
педагогическим образованием, который возьмет на себя ответственность за
интеллектуальное и эстетическое развитие вашего ребенка.
Заказывая у нас услуги няни, вы можете быть полностью спокойны за своего
ребенка. Все предлагаемые кандидатуры прошли тщательную проверку, имеют
специальное образование, опыт работы и положительные рекомендации! Доверьте
подбор профессионалам.`,
    cards: [
      {
        title: 'Няня грудничку',
        img: 'assets/img/n1.jpg',
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
      }
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
