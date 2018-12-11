import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';
import {Meta, Title} from '@angular/platform-browser';
import {scrollOptions} from '../../../constants';

const META_TITLE = 'Садовники - услуги садовника в Киеве - садовник для усадьбы (Киев) - Family Service';

@Component({
  selector: 'app-sadovnik',
  templateUrl: './sadovnik.component.html',
  styleUrls: ['./sadovnik.component.less']
})
export class SadovnikComponent implements OnInit {
  data = {
    titleInverte: false,
    buttonInverte: false,
    imgSrc: 'assets/img/sadovnik_banner3.jpeg',
    title: 'Предлагаем услуги садовника-хозяйственника в Киеве и Киевской области',
    buttonText: 'Заказать Садовника',
    description: `Наш садовник Вам сделает ухоженный сад и дачный участок. Сможет предоставить качественный
уход за экзотическими растениями, маленьким водопадом или каменными дорожками. Мы
сможем вам предоставить садовника - профессионала, который воплотит все ваши мечты в
реальность, сотворит истинное произведение искусства в вашем саду и приусадебном участке,
которое будет круглый год доставлять вам и вашим гостям удовольствие.`,
    cards: [
      {
        title: 'Садовник',
        img: 'assets/img/sad1.jpg',
        description: `Садовник — специалист по уходу за садом, лесным участком, домашними растениями. Профессиональный садовник должен 
        обладать знаниями в почвоведении, агрономии, цветоводстве, ботанике, агротехнике, дендрологии. Как правило, садовники не занимаются 
        проектированием сада, так как это функция ландшафтного дизайнера.`
      },
      {
        title: 'Хозяйственник',
        img: 'assets/img/sad2.jpg',
        description: `Контролирует техническое состояние дома и  коммуникаций, поддерживает порядок на  прилегающей к дому территории.
         Осуществляет мелкий ремонт в доме и необходимые сезонные работы на участке. Список его функциональных обязанностей достаточно 
         широк и определяется нуждами домовладельцев.
         
Чаще всего проживает на территории работодателя, что обеспечивает постоянный присмотр за  домом и хозяйством.

`
      },
      {
        title: 'Помощник по дому ',
        img: 'assets/img/sad3.jpg',
        description: `Помощник по хозяйству - очень нужная профессия в сфере домашнего персонала. Люди этой профессии нужны в тех семьях, 
        у которых есть коттеджи, дачи, загородные дома. Такой сотрудник будет полезен для поддержания жизнедеятельности вашего дома. 
        Помощник по хозяйству - мастер на все руки, универсальный работник который должен быть в каждом загородном доме. `
      }
    ],
    about: [
      {
        title: 'Обязанности:',
        tags: [
          'обслуживание систем жизнеобеспечения дома, сантехнического оборудования, котельной, электросети;',
          'уход за  камином, сауной, бассейном;',
          'мелкий ремонт;',
          'уход за прилегающей территорией (уход за растениями, стрижка газонов, уборка снега и т.п.);',
          'работа с подрядными ремонтными организациями;',
          'ведение отчетной документации.',
          'профессиональный уход за садом, прополка, обрезка и формовка крон, обработка насаждений от вредителей;',
          'подбор необходимых удобрений и подкормок для растений;',
          'генеральная уборка сада весной и осенью;',
          'устройство клумб, цветников, альпинариев;',
          'уход за газоном;',
          'посадка и ухода за садово-огородными культурами;',
          'обустройство зимних садов, оранжерей;',
          'содержание садовой техники в исправном состоянии;',
          'ведение дневника садовника, ведение финансовой отчетности, выполнение хозяйственных поручений работодателя.'
        ]
      }
    ]
  };
  selectOptions = [
    'Садовник',
    'Хозяйственник',
    'Помощник по дому'
  ];

  requestTitle = 'Заказать садовника прямо сейчас !';

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
