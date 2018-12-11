import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Meta, Title} from '@angular/platform-browser';

const META_TITLE = 'Вакансии - Family Service - вакансии (Киев)';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.less']
})
export class VacanciesComponent implements OnInit {
  vacancies: any;
  hidenvacancies: any;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  sum = 10;
  constructor(private http: HttpClient,
              private titleService: Title,
              private meta: Meta) {}

  ngOnInit() {
    this.http.get('/api/vacancies').subscribe((res: any) => {
      this.hidenvacancies = res.data.slice().reverse();
      this.vacancies = this.hidenvacancies.slice(0, this.sum);
    });
    this.titleService.setTitle(META_TITLE);
    this.meta.updateTag({property: 'og:title', content: META_TITLE});
  }

  onScrollDown () {
    this.sum += 5;
    this.vacancies = this.hidenvacancies.slice(0, this.sum);
  }

}
