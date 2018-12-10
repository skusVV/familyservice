import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';
import {Title} from '@angular/platform-browser';
import {scrollOptions} from '../../../constants';

@Component({
  selector: 'app-sidelka',
  templateUrl: './sidelka.component.html',
  styleUrls: ['./sidelka.component.less']
})
export class SidelkaComponent implements OnInit {
  data = {
    titleInverte: true,
    buttonInverte: true,
    imgSrc: 'assets/img/sidelka_banner.jpeg',
    title: 'Предлагаем помощь няни для ухода за вашим малышом',
    buttonText: 'Заказать Сиделку',
    description: `Сиделка будет приходить либо постоянно проживать дома с больным и следить за
его самочувствием. При необходимости оказывает первичную помощь,  делать
нужные медицинские процедуры по указаниям врача.Пожилой или больной
мужчина или женщина находится под опекой 24 часа в сутки.`,
    cards: [
      {
        title: 'Сиделка в больницу',
        img: 'assets/img/s1.jpg',
        description: `Наши сотрудники имеют опыт работы с тяжело больными подопечными, в том числе с пациентами, частично потерявшими 
        коммуникативные навыки. Вы можете нанять нашего сотрудника для постоянного, посменного или почасового пребывания в больнице.`
      },
      {
        title: 'Сиделка приходящая',
        img: 'assets/img/s2.jpg',
        description: `В нашем агентстве можно найти и нанять приходящую сиделку для пожилого человека или лежачего больного в Киеве или 
        Киевской обл. 
Некоторые родные не могут бросить хорошую работу, чтобы полностью находится дома, в этом случае довертесь нашему агентству. `
      },
      {
        title: 'Сиделка с проживанием',
        img: 'assets/img/s3.jpg',
        description: `Уход за тяжело больным или пожилым человеком требует постоянного присутствия рядом с ним, чуткого внимания,
         квалифицированной медицинской подготовки и запас терпения. Обращаясь к нам, ваши близкие круглосуточно будут в надежных руках. `
      }
    ],
    about: {
      title: `Наши опытные специалисты помогут повысить безопасность и независимость пожилых людей и людей с ограниченными возможностями 
      в домашних и стационарных условиях путём предоставления помощи в повседневной жизни`,
      tags: [
        'Приготовление пищи',
        'Сопровождение',
        'Личная гигиена',
        'Помощь по дому',
        'Прием медикаментов',
        'Дружеские отношения',
        'Вызов врача'
      ]
    }
  };
  selectOptions = [
    'Сиделка в больницу',
    'Сиделка приходящая',
    'Сиделка с проживанием'
  ];

  requestTitle = 'Заказать сиделку прямо сейчас !';

  constructor(private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( 'sidelka' );
  }

  private doScroll(scrollTo: string) {
    setTimeout(() => {
      new SmoothScroll(document.getElementById(scrollTo), scrollOptions);
    }, 200);
  }
}
