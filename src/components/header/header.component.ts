import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {SmoothScroll} from '../../directives/scroll.directive';
import {scrollOptions} from '../../constants';
import {AnalyticService} from '../../services/analytic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  scrollTo: string;

  constructor(private router: Router, private analytic: AnalyticService) {
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd && this.router.url  === '/' && this.scrollTo) {
          this.doScroll(this.scrollTo);
        }
      });
  }

  get isAdmin() {
    return this.router.url === '/admin';
  }

  get isVacancies() {
    return this.router.url === '/vacancies';
  }

  onClick(route, scrollTo) {
    if (scrollTo === 'request' && (this.router.url === '/cleaner' || this.router.url === '/nania' || this.router.url === '/ohrana'
      || this.router.url === '/huvernantka' || this.router.url === '/sidelka' || this.router.url === '/povar'
      || this.router.url === '/voditel' || this.router.url === '/sadovnik' || this.router.url === '/hardirobchik'
      || this.router.url === '/para')) {
      this.doScroll('request');
      this.analytic.click('Кнопка заказа персонала', null, 'Opened Form', '10');
      return;
    }



    if ( route === '/') {
      this.scrollTo = scrollTo;
    }

    if (this.router.url  === '/' && route === '/') {
      this.analytic.click('Кнопка заказа персонала', null, 'Opened Form', '10');
      this.doScroll(scrollTo);
    }
    this.router.navigate([route]);
  }

  private doScroll(scrollTo: string) {
    setTimeout(() => {
      new SmoothScroll(document.getElementById(scrollTo), scrollOptions);
    }, 200);
  }

  analytics() {
    this.analytic.click('Телефонный звонок', null, 'Phone Call', '50');
  }
}
