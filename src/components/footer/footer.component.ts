import { Component } from '@angular/core';
import { blackRed, creamyRed, droppff, Farmaraybldg, red, Test1, Hinabu, Honest, greyredMap, rered, Halisstyle } from './mapStyles';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  title = 'My first AGM project';
  lat = 50.42055963;
  lng = 30.5209984;

  styles = Halisstyle;
}
