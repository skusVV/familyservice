import { Component, Input } from '@angular/core';
import {SmoothScroll} from '../../directives/scroll.directive';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent {
  @Input() data: any;
  @Input() selectOptions: any;

  doScroll() {
    new SmoothScroll(document.getElementById('request'), {
      duration: 800,
      offset: null,
      easing: null,
      callbackBefore: () => {},
      callbackAfter: () => {},
      containerId: null
    });
  }
}
