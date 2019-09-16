import { NgModule } from '@angular/core';
import{MatButtonModule, MatTabsModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [MatButtonModule,MatMenuModule,MatFormFieldModule,MatCardModule, MatTabsModule
]


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
