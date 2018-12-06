import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit{
  @Input() data: any;

  ngOnInit() {
    console.log(this.data);
  }

}
