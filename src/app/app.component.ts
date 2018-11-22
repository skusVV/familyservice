import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  contacts = {
    title: 'Контакты',
    scrollToId: 'contacts',
    firstItem: {
      title: 'Телефон для соискателей',
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
}
