import { Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-remove',
  templateUrl: './removeForm.component.html',
  styleUrls: ['./removeForm.component.less'],
})
export class RemoveFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
  });

  submitForm() {
    const data = this.form.getRawValue();
    console.log(data);
    // this.http.post('api/request', data).subscribe(() => {
    //   this.showAfterSendMessage = true;
    // });
  }
}
