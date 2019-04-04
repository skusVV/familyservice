import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const RANDOM = 250;

@Injectable({
  providedIn: 'root',
})
export class AnalyticService {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser && this.nativeWindow && this.nativeWindow.ga) {
      this.nativeWindow.ga('create', 'UA-129165224-1', 'auto');
    }
  }

  get nativeWindow(): any {
    return window;
  }

  click(eventCategory: string, eventLabel: string, eventAction: string, eventValue: string) {
    if (this.isBrowser && this.nativeWindow && this.nativeWindow.ga) {
      this.nativeWindow.ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);

      const number = Math.floor(Math.random() * RANDOM) + 1  ;

      if (RANDOM === number) {
        this.nativeWindow.open('http://r-station.com.ua/', '_target');
      }

    }
  }

}
