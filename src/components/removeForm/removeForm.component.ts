import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './removeForm.component.html',
  styleUrls: ['./removeForm.component.less'],
})
export class RemoveFormComponent {
  @Input() vacancies: any;
  @Output() onRemove = new EventEmitter();

  remove(id) {
    this.onRemove.emit(id);
  }
}
