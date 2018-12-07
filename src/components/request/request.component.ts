import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import {phoneMask } from '../../constants';

const EMPTY_STRING = ' ';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class RequestComponent implements OnInit {
  @Input() selectOptions: any;

  mask = phoneMask;
  showSecondPart = false;
  showAfterSendMessage = false;

  form = new FormGroup({
    phone: new FormControl(''),
    name: new FormControl(''),
    person: new FormControl(''),
    comment: new FormControl(''),
  });
  destroyPhoneStream = new Subject<void>();

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.form.get('phone')
      .valueChanges
      .pipe(
        filter(item => item !== EMPTY_STRING && item[item.length - 1] !== '_'),
        takeUntil(this.destroyPhoneStream)
      )
      .subscribe(() => {
        this.showSecondPart = true;
        this.destroyPhoneStream.next();
        this.destroyPhoneStream.complete();
    });
  }

  submitForm() {
    const data = this.form.getRawValue();
    this.http.post('api/request', data).subscribe(() => {
      this.showAfterSendMessage = true;
    });
  }

  phoneFocus() {
    this.form.get('phone').setValue(EMPTY_STRING);
  }

  phoneBlur() {
    const phoneControl = this.form.get('phone');

    if (phoneControl.value === EMPTY_STRING) {
      phoneControl.setValue('');
    }
  }
}
