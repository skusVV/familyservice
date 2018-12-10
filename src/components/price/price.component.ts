import { Component, Input } from '@angular/core';
import {SmoothScroll} from '../../directives/scroll.directive';
import {scrollOptions} from '../../constants';

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
    new SmoothScroll(document.getElementById('request'), scrollOptions);
  }
}
