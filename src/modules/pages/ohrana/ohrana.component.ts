import { Component } from '@angular/core';

@Component({
  selector: 'app-ohrana',
  templateUrl: './ohrana.component.html',
  styleUrls: ['./ohrana.component.less']
})
export class OhranaComponent {
  data = {
    imgSrc: 'assets/img/security_banner.jpeg',
    title: 'Предлагаем помощь няни для ухода за вашим малышом',
    buttonText: 'Заказать Охрану',
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
    about: {
      // title: 'Наши клиенты могут выбрать наиболее удобный для себя график работы няни',
      // tags: [
      //   'Няня на час',
      //   'Няня на 1-2 дня в неделю',
      //   'Няня с проживанием',
      //   'На 5 дней в неделю',
      //   'Няня выходного дня'
      // ]
    }
  };
  selectOptions = [
    // 'Няня грудничек',
    // 'Няня дошкольнику',
    // 'Няня гувернантка'
  ];
}
