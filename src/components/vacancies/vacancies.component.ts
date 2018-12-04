import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.less']
})
export class VacanciesComponent {
  @Input() vacancies: any;
  @Input() isAdmin: boolean;
  @Output() onRemove: EventEmitter<string> = new EventEmitter();

  removeElement(element: any) {
    this.onRemove.emit(element._id);
  }
}
