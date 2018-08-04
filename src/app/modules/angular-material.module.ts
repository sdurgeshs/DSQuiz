import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
