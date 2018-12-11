import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';
import {Meta, Title} from '@angular/platform-browser';
import {scrollOptions} from '../../../constants';

const META_TITLE = 'Гардеробщицы - услуги гардеробщицы в Киеве - гардеробщица (Киев) - Family Service';

@Component({
  selector: 'app-harderobchik',
  templateUrl: './harderobchik.component.html',
  styleUrls: ['./harderobchik.component.less']
})
export class HarderobchikComponent implements OnInit {
  data = {
    titleInverte: false,
    buttonInverte: false,
    imgSrc: 'assets/img/hardirobchik_banner.jpeg',
    title: 'Услуги гардеробщицы',
    buttonText: 'Заказать Градеробщицу',
    description: `
    Гардеробщица – профессионал высокой квалификации. Данная работа требует тщательности, аккуратности, системности и знания тонкостей 
    эффективного ухода за всеми видами одежды, обуви и аксессуаров. Специалисты в данной области хорошо разбираются в различных материалах,
     могут произвести мелкий ремонт одежды, обеспечить должные условия для хранения вещей.
    `,
    cards: [
    ],
    about: [
      {
        title: 'Наши требования к специалисту:',
        tags: [
          'высшее или средне-профессиональное образование (швея, портная и пр.);',
          'сертификат о прохождении специальных курсов (курсы кройки и шитья, курсы домашнего персонала) приветствуется;',
          'опыт работы в семье;',
          'опыт работы в vip ателье и/или химчистке;',
          'навыки ухода за одеждой, обувью и аксессуарами из различных материалов;',
          'навыки ухода за деликатными тканями;',
          'знание и навыки использования различных средств по уходу за одеждой и обувью;',
          'навыки сбора багажа;',
          'навык составления каталогов одежды, обуви и аксессуаров;',
          'навыки инвентаризации гардероба;',
          'навыки ведения повседневных журналов учета-утилизации предметов гардероба;',
          'навыки работы с современной бытовой техникой;',
          'навыки планирования работы по дому;',
          'хорошее физическое здоровье;',
          'медицинская книжка;',
          'рекомендации.'
        ]
      },
      {
        title: 'Обязанности:',
        tags: [
          'профессиональный уход за  мужским, женским и детским гардеробом, обувью и аксессуарами;',
          'уход за домашним и кухонным текстилем;',
          'подготовка, сдача вещей в химчистку, проверка качества поступивших из химчистки вещей;',
          'упаковка и разбор багажа;',
          'мелкий ремонт и реставрация одежды;',
          'инвентаризация гардероба;',
          'соблюдение условий хранения вещей;',
          'сезонная консервация вещей.',
        ]
      }
    ]
  };
  selectOptions = [
    'Гардеробщица'
  ];

  requestTitle = 'Заказать гардеробщицу прямо сейчас !';

  constructor(private titleService: Title,  private meta: Meta) { }

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
