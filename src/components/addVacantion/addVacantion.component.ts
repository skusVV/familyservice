import { Component, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-add-vacantion',
  templateUrl: './addVacantion.component.html',
  styleUrls: ['./addVacantion.component.less'],
})
export class AddVacantionComponent {
  @Output() onAdd = new EventEmitter();

  form = this.createForm();
  radio = ['free', 'tags', 'subtitle'];
  constructor(private formBuilder: FormBuilder) {}


  get blocks(): FormArray {
    return this.form.get('blocks') as FormArray;
  }

  get vacancy() {
    return this.form.getRawValue();
  }

  submitForm() {
    const {title, location, salary, blocks} = this.form.getRawValue();
    const data = {
      title,
      location,
      salary,
      blocks,
    };
    this.onAdd.emit(data);
    this.form  = this.createForm();
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
    });
  }
}
