import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnalyticService {

  get nativeWindow(): any {
    return window;
  }

  click(eventCategory: string, eventLabel: string, eventAction: string, eventValue: string) {
    if (this.nativeWindow) {
      this.nativeWindow.ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
    }
  }

}
