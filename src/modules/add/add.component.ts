import {Component, ViewEncapsulation} from '@angular/core';
import {allPersonal, phoneMask} from '../../constants';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AddComponent {
  selectOptions = allPersonal;
  mask = phoneMask;
  form = new FormGroup({
    name: new FormControl(''),
    secondName: new FormControl(''),
    birthDay: new FormControl(''),
    phone: new FormControl(''),
    type: new FormControl(''),
    salary: new FormControl(''),
    about: new FormControl(''),
  });

  constructor(private http: HttpClient) {
  }

  submitForm() {
    const data = this.form.getRawValue();
    this.http.post('api/addNewPerson', data).subscribe();
  }
}
