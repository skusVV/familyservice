import { Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as uuid from 'uuid/v4';

@Component({
  selector: 'app-add-vacantion',
  templateUrl: './addVacantion.component.html',
  styleUrls: ['./addVacantion.component.less'],
})
export class AddVacantionComponent {
  form = this.createForm();

  radio = ['free', 'tags', 'subtitle'];
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}


  get blocks(): FormArray {
    return this.form.get('blocks') as FormArray;
  }

  submitForm() {
    const {title, location, salary, blocks} = this.form.getRawValue();
    const data = {
      title,
      location,
      salary,
      blocks,
      id: uuid(),
      data: new Date(),
    };

    this.http.post('api/vacancy', data).subscribe(() => {
      this.form  = this.createForm();
    });
  }

  createBlock(): any {
    return this.formBuilder.group({
      blockTitle: '',
      text: '',
      type: '',
    });
  }

  addBlock() {
    this.blocks.push(this.createBlock());
  }

  radioChange({value}, i) {
    (<any>this.form.get('blocks')).controls[i].get('type').setValue(value);
  }

  private createForm() {
    return new FormGroup({
      title: new FormControl(''),
      location: new FormControl(''),
      salary: new FormControl(''),
      blocks: this.formBuilder.array([ this.createBlock() ]),
      // date will added before submit
      // id will added before submit
    });
  }
}
