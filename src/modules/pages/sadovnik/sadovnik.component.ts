import { Component, OnInit } from '@angular/core';
import {SmoothScroll} from '../../../directives/scroll.directive';

@Component({
  selector: 'app-sadovnik',
  templateUrl: './sadovnik.component.html',
  styleUrls: ['./sadovnik.component.less']
})
export class SadovnikComponent implements OnInit {
  data = {
    titleInverte: false,
    buttonInverte: true,
    imgSrc: 'assets/img/sadovnik_banner.jpeg',
    title: 'Предлагаем помощь няни для ухода за вашим малышом',
    buttonText: 'Заказать Садовника',
    description: `Наш садовник Вам сделает ухоженный сад и дачный участок. Сможет предоставить качественный
уход за экзотическими растениями, маленьким водопадом или каменными дорожками. Мы
сможем вам предоставить садовника - профессионала, который воплотит все ваши мечты в
реальность, сотворит истинное произведение искусства в вашем саду и приусадебном участке,
которое будет круглый год доставлять вам и вашим гостям удовольствие.`,
    cards: [
//       {
//         title: 'Няня грудничку',
//         img: 'assets/img/n1.jpg',
//         description: `Няня для грудных деток (от рождения до одного года) – это специалист с медицинским и педагогическим образованием и
//         опытом работы с новорожденными. Это человек, который будет активно участвовать в развитии крохи на первых этапах его жизни, а
//         также помогать родителям преодолеть первые трудности.`
//       },
//       {
//         title: 'Няня дошкольнику',
//         img: 'assets/img/n2.jpg',
//         description: `Няня воспитатель быстрее сумеет выявить способности и таланты ребенка, если занимается только им одним, а не
//         двумя десятками других деток. Ребенку будет интересно с таким другом, а родители будут уверены, что их дитя получает максимум
//          внимания и что его способности не останутся незамеченными.
// `
//       },
//       {
//         title: 'Няня гувернантка',
//         img: 'assets/img/n3.jpg',
//         description: `Для обучения ребенка чтению, счету, основам математики и логики требуется подготовленный работник, обладающим
//          определёнными навыками общения и работы с детьми, а не обычная няня. Необходимо обладать глубокими познаниями в детской
//           психологии, знать методики обучения, понимать, каким задачам необходимо уделять больше внимания, чтобы ребенок пошел в школу
//           действительно подготовленным. Поэтому хорошая гувернантка совмещает функции обычной няни, педагога и детского психолога.`
//       }
    ],
    // about: {
      // title: 'Наши клиенты могут выбрать наиболее удобный для себя график работы няни',
      // tags: [
      //   'Няня на час',
      //   'Няня на 1-2 дня в неделю',
      //   'Няня с проживанием',
      //   'На 5 дней в неделю',
      //   'Няня выходного дня'
      // ]
    // }
  };
  selectOptions = [
    // 'Няня грудничек',
    // 'Няня дошкольнику',
    // 'Няня гувернантка'
  ];

  ngOnInit() {
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
