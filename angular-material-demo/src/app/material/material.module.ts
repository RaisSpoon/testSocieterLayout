import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [MatButtonModule,MatMenuModule,MatFormFieldModule
]


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
