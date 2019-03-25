import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AnalyticService {
  isBrowser: boolean

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
    }
  }

}
