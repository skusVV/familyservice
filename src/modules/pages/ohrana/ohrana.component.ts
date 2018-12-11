import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';
import {Meta, Title} from '@angular/platform-browser';
import {scrollOptions} from '../../../constants';

const META_TITLE = 'Услуги охраны - услуги охранника в Киеве - личный охранник (Киев) - Family Service';

@Component({
  selector: 'app-ohrana',
  templateUrl: './ohrana.component.html',
  styleUrls: ['./ohrana.component.less']
})
export class OhranaComponent implements OnInit {
  data = {
    titleInverte: false,
    buttonInverte: false,
    imgSrc: 'assets/img/ohrana_banner2.jpeg',
    title: 'Предлагаем услуги охраны вашего дома в Киеве и Киевской области',
    buttonText: 'Заказать Охрану',
    description: `
    <p>Вы хотите, чтобы в Ваше отсутствие Ваш дом был надежно защищен от хулиганов? </p>
    <p>&#8203;</p>
    <p>В этом случае Вам придет на помощь охранник для загородного дома от нашего агентства домашнего персонала Family Service. </p>
    <p>&#8203;</p>
    <p>С охранниками от нашего агентства Вы можете быть спокойны за сохранность своего имущества. Если в Ваше отсутствие кто-то посягнет
     на Ваш загородный дом, охранник для загородного дома сохранит ваш дом в безопасности. Кроме того, вы будете спокойны как за 
     безопасность своего дома, так и за порядок на своем приусадебного участке. В обязанности охранника загородного дома также входит 
     помощь по хозяйству: летом он будет следить и ухаживать за Вашим садом, зимой уберет снег и собьет сосули, осенью – сухие листья,
      всегда накормит Вашу собаку.</p>
      <p>&#8203;</p>
    <p>Охранник в загородный дом – это универсальный помощник в хозяйстве загородного дома: он обеспечит безопасность Вашего дома и 
    порядок Вашего приусадебного хозяйства. Вы будете спокойны за сохранность своего имущества в Ваше отсутствие./p>
    <p>спокойны за сохранность своего имущества в Ваше отсутствие.
Если перед Вами встала проблема поиска охранника в загородный дом, просто обратитесь к нам. </p>
<p>&#8203;</p>
    <p>Квалифицированные специалисты нашего агентства подберут для Вас опытного и надежного охранника в загородный дом, с которым Вы будете
     уверены в своей безопасности и сохранности Вашего имущества. При подборе охранника, наши специалисты учтут все Ваши требования.</p>
`,
    cards: [
    ],
  };
  selectOptions = [
    'Охрана',
  ];

  requestTitle = 'Заказать охрану прямо сейчас !';

  constructor(private titleService: Title, private meta: Meta) { }

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
