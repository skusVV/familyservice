import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdminResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve() {
    const login = prompt('Пожалуйста введите логин');
    const password = prompt('Пожалуйста введите пароль');

    return this.makeRequest(login, password);
  }

  makeRequest(login: string, password: string) {
    return this.http.post('/api/admin/auth', {login, password});
  }
}
