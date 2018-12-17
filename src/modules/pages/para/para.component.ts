import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';
import {Meta, Title} from '@angular/platform-browser';
import {scrollOptions} from '../../../constants';

const META_TITLE = 'Услуги семейной пары в Киеве для ухода за домом и садом с проживанием  (Киев) -  - Family Service';

@Component({
  selector: 'app-para',
  templateUrl: './para.component.html',
  styleUrls: ['./para.component.less']
})
export class ParaComponent implements OnInit {
  data = {
    titleInverte: false,
    buttonInverte: false,
    imgSrc: 'assets/img/para_banner2.jpeg',
    title: 'Услуги семейной пары',
    buttonText: 'Заказать Семейную пару',
    description: `<p>Семейная пара для работы в загородном доме работодателя - это надежные помощники в ведении домашнего хозяйства и 
гарантия Вашего спокойствия о Вашем доме. Семейная пара с проживанием - это одни из самых востребованных специалистов-помощников по 
загородному дому. Поддерживать большое хозяйство без помощи домашних помощников невозможно. Основные обязанности распределяются следующим 
образом: мужчина следит за техническим состоянием дома, выполняет тяжелые работы по прилегающей территории, часто функции водителя. 
Женщина выполняет функции экономки, повара, домработницы. </p>
<p>&#8203;</p>
<p>В наше время спрос на данный вид услуг постепенно возрастает. Большой популярностью пользуются семейные пары для работы в Киевской
 области. Нанимая семейную пару на работу, вы будете спокойно уезжать по необходимым делам, оставляя свой загородный дом под присмотром
  семейной пары. В основные обязанности мужчины входит выполнение всех хозяйственных и садовых работ, а женщина обеспечивает порядок в
   доме, оплачивает всевозможные счета и покупает продукты и средства для дома.</p>`,
    descriptionMobile: `<p>Семейная пара для работы в загородном доме работодателя - это надежные помощники в ведении домашнего хозяйства и 
гарантия Вашего спокойствия о Вашем доме. Семейная пара с проживанием - это одни из самых востребованных специалистов-помощников по 
загородному дому. Поддерживать большое хозяйство без помощи домашних помощников невозможно. Основные обязанности распределяются следующим 
образом: мужчина следит за техническим состоянием дома, выполняет тяжелые работы по прилегающей территории, часто функции водителя. 
Женщина выполняет функции экономки, повара, домработницы. </p>
<p>&#8203;</p>
<p>В наше время спрос на данный вид услуг постепенно возрастает. Большой популярностью пользуются семейные пары для работы в Киевской
 области. Нанимая семейную пару на работу, вы будете спокойно уезжать по необходимым делам, оставляя свой загородный дом под присмотром
  семейной пары. В основные обязанности мужчины входит выполнение всех хозяйственных и садовых работ, а женщина обеспечивает порядок в
   доме, оплачивает всевозможные счета и покупает продукты и средства для дома.</p>`,
    cards: [
    ],
    about: [
      {
        title: 'Общие обязанности:',
        tags: [
          'Полное ведение домашнего хозяйства;',
          'Обслуживание дома и прилегающей территории;',
        ]
      },
      {
        title: 'Обязанности для мужчин:',
        tags: [
          'Уборка прилегающей к дому территории, уборка снега;',
          'Стрижка газонов, уход за растениями;',
          'Выгул и уход за собаками;',
          'Контроль за работой систем водо-, электроснабжения, сигнализации;'
        ]
      },
      {
        title: 'Обязанности для женщин:',
        tags: [
          'Уборка дома;',
          'Стирка (ручная, машинная);',
          'Глажение белья;',
          'Уборка постелей;',
          'Замена постельного белья;',
          'Уход за мебелью;',
          'Сезонное мытье окон;'
        ]
      },
      {
        title: `
        <p>По договоренности с работодателем женщина может выполнять обязанности няни, а мужчина функции семейного водителя.</p>
        `,
  }
    ]
  };
  selectOptions = [
    'Семейная пара',
  ];

  requestTitle = 'Заказать семейную пару прямо сейчас !';

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
