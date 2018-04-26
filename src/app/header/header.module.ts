import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule { }
