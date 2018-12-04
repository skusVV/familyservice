import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/vacancies').subscribe((res: any) => {
      this.hidenvacancies = res.data;
      this.vacancies = this.hidenvacancies.slice(0, this.sum);
    });
  }

  onScrollDown () {
    this.sum += 5;
    this.vacancies = this.hidenvacancies.slice(0, this.sum);
  }

}
