import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';
import {Meta, Title} from '@angular/platform-browser';
import {scrollOptions} from '../../../constants';

const META_TITLE = 'Повары - услуги личного повара в Киеве - повар в дом (Киев) - Family Service';

@Component({
  selector: 'app-povar',
  templateUrl: './povar.component.html',
  styleUrls: ['./povar.component.less']
})
export class PovarComponent implements OnInit {
  data = {
    titleInverte: false,
    buttonInverte: false,
    imgSrc: 'assets/img/povar_banner2.jpeg',
    title: 'Вы сможете выбрать повара в соответствии с Вашими желаниями и вкусами у нас в агентстве.',
    buttonText: 'Заказать Повара',
    description: `Наши повара обладают фантазией, даром импровизации, чувством прекрасного, тонким вкусом
(в том числе и эстетическим). К тому же, у нас повара имеют безупречный глазомер, для точного
смешивания ингредиентов и добавления в нужных пропорциях. Более того, наши кандидаты
хорошо разбираються в диетологии, знают всё о калорийности тех или иных продуктов и их
насыщенности витаминами и другими полезными микроэлементами. Наш кулинар не только
готовить качественные блюда, но и готовить их быстро.`,
    cards: [
      {
        title: 'Повар домашней кухни',
        img: 'assets/img/p1.jpg',
        description: `Домашние повара – незаменимый персонал. С ними можно как быстро подготовиться к роскошному торжеству с большим 
        количеством приглашенных, так и без труда накормить всю семью вкусным завтраком, обедом и ужином. Избавьте себя от рутинного 
        приготовления различных блюд! Передайте решение такой задачи профессионалам!`
      },
      {
        title: 'Повар универсал',
        img: 'assets/img/p5.jpg',
        description: `Повар универсал может работать по оптимальному для вас графику, утром, днем, вечером или даже посуточно 
        (в том числе с проживанием в вашем доме). В обязанности повара универсала обычно включают не только приготовление пищи, но и 
        разработку меню и даже рецептур различных блюд. Это позволяет питаться максимально разнообразно и постоянно пробовать какие-то 
        оригинальные новинки.`
      },
      {
        title: 'Повар на банкет',
        img: 'assets/img/p4.jpg',
        description: `Мы подберем специалиста для обслуживания корпоративного или иного банкета, приготовления блюд для фуршета и др. 
        Просто заранее сообщите нам обо всех пожеланиях и запросах. `
      }
    ],
    about: [
      {
        title: 'Обязанности повара включают в себя:',
        tags: [
          'Приготовление пищи на вкус работодателя',
          'Знание различных кухонь',
          'Умение готовить блюда различной сложности, в том числе диетические и блюда по системе «раздельного питания',
          'Составление меню (на день, на неделю)',
          'Умение пользоваться современной кухонной техникой',
          'Закупка продуктов или составление перечня необходимых продуктов для закупки (по договоренности с работодателем)',
          'Соблюдение санитарно-гигиенических норм',
          'Поддержание рабочего места и инвентаря в чистоте'
        ]
      }
    ]
  };
  selectOptions = [
    'Повар домашней кухни',
    'Повар универсал',
    'Повар на банкет'
  ];

  requestTitle = 'Заказать повара прямо сейчас !';

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
