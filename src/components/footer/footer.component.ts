import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Honest } from './mapStyles';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  lat = 50.42055963;
  lng = 30.5209984;

  styles = Honest;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
