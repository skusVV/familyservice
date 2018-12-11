import { Component } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './personList.component.html',
  styleUrls: ['./personList.component.less']
})
export class PersonListComponent {

  cards = [
    {
      title: 'Услуги Няни',
      route: '/nania',
      img: 'assets/img/nania_preview.jpg'
    },
    {
      title: 'Услуги Домработницы',
      route: '/cleaner',
      img: 'assets/img/domorabot.jpeg'
    },
    {
      title: 'Услуги Сиделки',
      route: '/sidelka',
      img: 'assets/img/sidelka.jpeg'
    },
    {
      title: 'Услуги Повара',
      route: '/povar',
      img: 'assets/img/povar.jpeg'
    },
    {
      title: 'Услуги Водителя',
      route: '/voditel',
      img: 'assets/img/voditel_3.jpg'
    },
    {
      title: 'Услуги Садовника-Хозяйственника',
      route: '/sadovnik',
      img: 'assets/img/sadovnik.jpeg'
    },
    {
      title: 'Услуги Гардеробщицы',
      route: '/hardirobchik',
      img: 'assets/img/hardirobchik.jpeg'
    },
    {
      title: 'Услуги Семейной пары',
      route: '/para',
      img: 'assets/img/para3.jpg'
    },
    {
      title: 'Услуги Охраны',
      route: '/ohrana',
      img: 'assets/img/security_2.jpeg'
    }
  ];

}
