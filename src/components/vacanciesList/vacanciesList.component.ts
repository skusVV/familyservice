import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacanciesList.component.html',
  styleUrls: ['./vacanciesList.component.less']
})
export class VacanciesListComponent {
  @Input() vacancies: any;
  @Input() isAdmin: boolean;
  @Output() onRemove: EventEmitter<string> = new EventEmitter();

  removeElement(element: any) {
    this.onRemove.emit(element._id);
  }
}
