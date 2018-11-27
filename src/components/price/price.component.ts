import { Component, Input } from '@angular/core';
import {SmoothScroll} from '../../directives/scroll.directive';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less'],
})
export class PriceComponent {
  @Input() data: any;

  active: boolean;

  makeActive() {
    this.active = true;
  }

  makeInactive() {
    this.active = false;
  }

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
