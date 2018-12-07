import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

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
              private titleService: Title) {}

  ngOnInit() {
    this.http.get('/api/vacancies').subscribe((res: any) => {
      this.hidenvacancies = res.data;
      this.vacancies = this.hidenvacancies.slice(0, this.sum);
    });
    this.titleService.setTitle( 'Vacancy' );
  }

  onScrollDown () {
    this.sum += 5;
    this.vacancies = this.hidenvacancies.slice(0, this.sum);
  }

}
