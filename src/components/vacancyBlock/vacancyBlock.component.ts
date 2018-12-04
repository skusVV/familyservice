import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-vacancy-block',
  templateUrl: './vacancyBlock.component.html',
  styleUrls: ['./vacancyBlock.component.less']
})
export class VacancyBlockComponent {
  @Input() block: any;
}
