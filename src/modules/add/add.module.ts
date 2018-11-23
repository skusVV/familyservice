import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { AddRoutingModule } from './add.routing';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {TextMaskModule} from 'angular2-text-mask';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AddComponent,
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    MatInputModule,
    MatSelectModule,
    TextMaskModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AddComponent]
})
export class AddModule { }
