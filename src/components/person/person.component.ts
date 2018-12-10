import { Component, Input } from '@angular/core';
import {SmoothScroll} from '../../directives/scroll.directive';
import {scrollOptions} from '../../constants';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent {
  @Input() data: any;
  @Input() selectOptions: any;

  doScroll() {
    new SmoothScroll(document.getElementById('request'), scrollOptions);
  }
}
