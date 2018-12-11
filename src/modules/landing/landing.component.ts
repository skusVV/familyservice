import { Component, OnInit } from '@angular/core';
import { SmoothScroll } from '../../directives/scroll.directive';
import {allPersonal, scrollOptions} from '../../constants';
import { Title, Meta } from '@angular/platform-browser';

const COLOR_SECOND_GREY = '#F3F3F3';
const META_DESCRIPTION = `Агентство по подбору домашнего персонала в Киеве. Нужна няня? Домработница? Сиделка? Водитель? Нам есть что 
Вам предложить. Звоните: 095 88 66 877`;
const META_TITLE = 'Family Service - Агентство домашнего персонала';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  clients = {
      title: 'Агентство домашнего персонала Family Service',
      bgColor: COLOR_SECOND_GREY,
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
    bgColor: COLOR_SECOND_GREY,
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
      tags: [
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
      tags: [
        'Проверенный домашний персонал с опытом работы и рекомендациями',
        'Гарантия бесплатной замены 1 год',
        'Скидки постоянным клиентам',
        'Выезд менеджера к заказчику'
      ]
    }
  };

  contacts = {
    title: 'Контакты',
    scrollToId: 'contacts',
    firstItem: {
      title: 'Телефоны для соискателей',
      description: 'Консультации по трудоустройству:',
      phones: [
        {
          name: '(098) 88 66 878',
          phone: 'tel:+380988866878'
        },
        {
          name: '(050) 88 66 878',
          phone: 'tel:+380508866878'
        },
        {
          name: '(093) 88 66 878',
          phone: 'tel:+380938866878'
        },
      ],
    },
    secondItem: {
      title: 'Телефоны для работодателей',
      description: 'Заказ услуг:',
      phones: [
        {
          name: '(095) 88 66 877',
          phone: 'tel:+3800958866877'
        },
        {
          name: '(093) 88 66 877',
          phone: 'tel:+3800938866877'
        },
      ]
    }
  };

  selectOptions = allPersonal;
  requestTitle = 'Оставьте заявку на подбор персонала прямо сейчас !';

  constructor(private titleService: Title, private meta: Meta  ) { }

  ngOnInit() {
    this.titleService.setTitle(META_TITLE);
    this.meta.updateTag({property: 'og:title', content: META_TITLE});
    this.meta.updateTag({name: 'description', content: META_DESCRIPTION});
    this.meta.updateTag({property: 'og:description', content: META_DESCRIPTION});
  }

  doScroll() {
    new SmoothScroll(document.getElementById('request'), scrollOptions);
  }
}
