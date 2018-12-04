import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {allPersonal, phoneMask} from '../../constants';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  data: any;
  login: string;
  password: string;
  vacancies: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.data = this.route.snapshot.data.data;
    this.login = this.data.payload.login;
    this.password = this.data.payload.password;
    this.http.get('/api/vacancies').subscribe((res: any) => {
      this.vacancies = res.data;
    });
  }

  remove(id: string) {
    if (confirm('Вы уверены??')) {
      this.http.post('/api/deleteVacancy', id).subscribe(() => {
        this.vacancies = this.vacancies.filter(item => item._id !== id);
      });
    }
  }

  add(data: any) {
    this.http.post('/api/vacancy', data).subscribe(() => {
      this.vacancies = [...this.vacancies, data];
    });
  }
}
