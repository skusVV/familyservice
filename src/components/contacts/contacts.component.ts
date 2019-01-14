import { Component, Input } from '@angular/core';
import {AnalyticService} from '../../services/analytic.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent {
  @Input() section: any;

  constructor(private analytic: AnalyticService){

  }

  analytics() {
    this.analytic.click('Телефонный звонок', null, 'Phone Call', '50');
  }
}
