import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doubleSection',
  templateUrl: './doubleSection.component.html',
  styleUrls: ['./doubleSection.component.less']
})
export class DoubleSectionComponent {
  @Input() section: any;
}
