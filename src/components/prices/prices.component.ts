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
      generalPrice: '60грн',
      perHourPrice: '60-100 грн',
      perDayPrice: '700-1 500 грн',
      perMonthPrice: '10 000-20 000 грн',
      imgSrc: 'assets/img/nyania.jpeg',
      transition: 'nyania',
    },
    {
      title: 'Гувернантка',
      generalPrice: '70грн',
      perHourPrice: '70-120 грн',
      perDayPrice: '700-1 200 грн',
      perMonthPrice: '2 000-20 000 грн',
      imgSrc: 'assets/img/huvernantka.jpeg',
      transition: 'huvernantka',
    },
    {
      title: 'Домработница',
      generalPrice: '250грн',
      perHourPrice: '80-150 грн',
      perDayPrice: '700-1500 грн',
      perMonthPrice: '4 000-20 000 грн.',
      imgSrc: 'assets/img/domorabot.jpeg',
      transition: 'domorabot',
    },
    {
      title: 'Сиделка',
      generalPrice: '250грн',
      perHourPrice: '30-80 грн',
      perDayPrice: '250-800 грн',
      perMonthPrice: '6000-12000 грн',
      imgSrc: 'assets/img/sidelka.jpeg',
      transition: 'sidelka',
    },
    {
      title: 'Повар',
      generalPrice: '250грн',
      perHourPrice: '80-150 грн',
      perDayPrice: '500-1200 грн.',
      perMonthPrice: '8 000-20 000 грн',
      imgSrc: 'assets/img/povar.jpeg',
      transition: 'povar',
    },
    {
      title: 'Водитель',
      generalPrice: '250грн',
      perHourPrice: '60-180 грн',
      perDayPrice: '600-1000грн',
      perMonthPrice: '10 000-20 000 грн',
      imgSrc: 'assets/img/voditel.jpeg',
      transition: 'voditel',
    }
  ];

  getClass(): string {
    return 'nyania';
  }
}
