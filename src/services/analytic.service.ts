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
      console.log([eventCategory], [eventAction], [eventLabel], [eventValue]);
      this.nativeWindow.ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue])
    }
  }

}
