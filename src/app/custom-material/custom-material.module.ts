import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatIconModule, MatGridListModule, MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
