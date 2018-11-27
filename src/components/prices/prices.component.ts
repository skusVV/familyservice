import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.less'],
})
export class PricesComponent {
  prices = [
    {
      title: 'Няня',
      perHourPrice: '60 грн.',
      perDayPrice: '600 грн.',
      perMonthPrice: '10 000 грн.',
      imgSrc: 'assets/img/nyania.jpeg',
      transition: 'nyania',
    },
    {
      title: 'Гувернантка',
      perHourPrice: '70 грн.',
      perDayPrice: '700 грн.',
      perMonthPrice: '12 000 грн.',
      imgSrc: 'assets/img/huvernantka.jpeg',
      transition: 'huvernantka',
    },
    {
      title: 'Домработница',
      perHourPrice: '80 грн.',
      perDayPrice: '700 грн.',
      perMonthPrice: '14 000 грн.',
      imgSrc: 'assets/img/domorabot.jpeg',
      transition: 'domorabot',
    },
    {
      title: 'Сиделка',
      perHourPrice: '30 грн.',
      perDayPrice: '250 грн.',
      perMonthPrice: '6000 грн.',
      imgSrc: 'assets/img/sidelka.jpeg',
      transition: 'sidelka',
    },
    {
      title: 'Повар',
      perHourPrice: '80 грн.',
      perDayPrice: '500 грн.',
      perMonthPrice: '8 000 грн.',
      imgSrc: 'assets/img/povar.jpeg',
      transition: 'povar',
    },
    {
      title: 'Водитель',
      perHourPrice: '100 грн.',
      perDayPrice: '800 грн.',
      perMonthPrice: '12 000 грн.',
      imgSrc: 'assets/img/voditel.jpeg',
      transition: 'voditel',
    }
  ];
}
