import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.less']
})
export class VacanciesComponent implements OnInit {
  vacancies: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/vacancies').subscribe((res: any) => {
      this.vacancies = res.data;
    });
  }

}
