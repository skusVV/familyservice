import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import {phoneMask } from '../../constants';
import {AnalyticService} from '../../services/analytic.service';

const EMPTY_STRING = ' ';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class RequestComponent implements OnInit {
  @Input() selectOptions: any;
  @Input() title: string;

  mask = phoneMask;
  showSecondPart = true;
  showAfterSendMessage = false;

  form = new FormGroup({
    phone: new FormControl(''),
    name: new FormControl(''),
    person: new FormControl(''),
    comment: new FormControl(''),
  });
  destroyPhoneStream = new Subject<void>();

  constructor(private http: HttpClient, private analytic: AnalyticService) {
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
    this.form.get('phone').markAsTouched();
    this.analytic.click('Заявка на подбор персонала', 'Filled Form', this.title, '100');

    const data = this.form.getRawValue();

    this.http.post('api/request', data).subscribe(() => {
      this.showAfterSendMessage = true;
    });
  }

  phoneBlur() {
    this.analytic.click('Заявка на подбор персонала', `Phone: ${this.form.get('phone').value}`, this.title, '10');
  }
}
