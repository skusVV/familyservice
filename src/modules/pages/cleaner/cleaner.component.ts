import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.less']
})
export class CleanerComponent implements OnInit {
  data = {
    titleInverte: false,
    buttonInverte: false,
    imgSrc: 'assets/img/domrab_banner2.jpeg',
    title: 'Предлагаем услуги домработниц по уходу за вашим домом.',
    buttonText: 'Заказать домработника',
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
        title: 'Домработница на разовые уборки',
        img: 'assets/img/c1.jpg',
        description: `Наведение порядка может включать в себя любой спектр услуг, вплоть до генеральной уборки, с чисткой карнизов и люстр,
         мытьем окон, кухонных поверхностей и сантехники. И вполне возможно, что, глядя на результаты трудов профессиональной домработницы,
          хозяйка примет решение пользоваться ее услугами на постоянной основе.`
      },
      {
        title: 'Домработница с полной занятостью',
        img: 'assets/img/c2.jpg',
        description: `Если вы работаете по скользящему графику или по каким-то другим причинам не можете спрогнозировать, как часто и в
         какое время вам необходима будет домработница, мы можем предложить массу домашнего персонала с проживанием в доме работодателя.`
      },
      {
        title: 'Домработница с проживанием',
        img: 'assets/img/c3.jpg',
        description: `Поиск домработниц с полной занятостью ведут люди, которым необходим постоянный присмотр за домом, но которые не хотят 
        при этом, чтобы помощница проживала вместе с ними. Домработница обычно приходит пять раз в неделю, занимается уборкой и готовкой,
         может выполнять некоторые другие заранее оговоренные функции.`
      }
    ],
  };

  selectOptions = [
    'на разовые уборки',
    'с полной занятостью',
    'с проживанием'
  ];

  constructor(private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( 'cleaner' );
    this.doScroll('body');
  }

  private doScroll(scrollTo: string) {
    setTimeout(() => {
      new SmoothScroll(document.getElementById(scrollTo), {
        duration: 800,
        offset: null,
        easing: null,
        callbackBefore: () => {},
        callbackAfter: () => {},
        containerId: null
      });
    }, 200);
  }
}
