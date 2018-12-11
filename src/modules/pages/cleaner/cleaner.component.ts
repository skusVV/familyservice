import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';
import {Meta, Title} from '@angular/platform-browser';
import {scrollOptions} from '../../../constants';

const META_TITLE = 'Домработницы - услуги домработницы в Киеве - домработница для дома (Киев) - Family Service';

@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.less']
})
export class CleanerComponent implements OnInit {
  data = {
    titleInverte: false,
    buttonInverte: false,
    imgSrc: 'assets/img/domrab_banner7.jpeg',
    title: 'Предлагаем услуги домработницы по уходу за вашим домом',
    buttonText: 'Заказать домработницу',
    description: `Горничная или домработница поддержит чистоту и порядок, приготовит пищу,
организует покупку продуктов и оплату счетов, осуществит сезонные работы в доме.

Как следствие, ваша квартира или коттедж станут местом отдыха, а не вторым
рабочим местом. Если дом находится за пределами Киева, вы можете пригласить домработницу с
проживанием.`,
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
        description: `Поиск домработниц с полной занятостью ведут люди, которым необходим постоянный присмотр за домом, но которые не хотят 
        при этом, чтобы помощница проживала вместе с ними. Домработница обычно приходит пять раз в неделю, занимается уборкой и готовкой,
         может выполнять некоторые другие заранее оговоренные функции.`
      },
      {
        title: 'Домработница с проживанием',
        img: 'assets/img/d4.jpg',
        description: `Если вы работаете по скользящему графику или по каким-то другим причинам не можете спрогнозировать, как часто и в
         какое время вам необходима будет домработница, мы можем предложить массу домашнего персонала с проживанием в доме работодателя.`
      }
    ],
  };

  selectOptions = [
    'на разовые уборки',
    'с полной занятостью',
    'с проживанием'
  ];

  requestTitle = 'Заказать домработницу прямо сейчас !';

  constructor(private titleService: Title, private meta: Meta ) { }

  ngOnInit() {
    this.titleService.setTitle(META_TITLE);
    this.meta.updateTag({property: 'og:title', content: META_TITLE});
    this.doScroll('body');
  }

  private doScroll(scrollTo: string) {
    setTimeout(() => {
      new SmoothScroll(document.getElementById(scrollTo), scrollOptions);
    }, 200);
  }
}
