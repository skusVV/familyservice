import { Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-add-vacantion',
  templateUrl: './addVacantion.component.html',
  styleUrls: ['./addVacantion.component.less'],
})
export class AddVacantionComponent {
  form = new FormGroup({
    title: new FormControl(''),
    conditions: new FormArray([ this.createItem() ])
  });

  constructor(private formBuilder: FormBuilder) {

  }


  get conditions(): FormArray {
    return this.form.get('conditions') as FormArray;
  }

  submitForm() {
    const data = this.form.getRawValue();
    console.log(data);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      condition: '',
    });
  }

  addCondition() {
    this.conditions.push(this.createItem());
  }
}
