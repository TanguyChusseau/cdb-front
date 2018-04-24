import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompanyComponent } from './company.component';
import { CompaniesComponent } from '../companies/companies.component';
import { CompanyGetByIdComponent } from '../company-getById/company-getById.component';
import { CompanyAddComponent } from '../company-add/company-add.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    CompanyComponent,
    CompaniesComponent,
    CompanyGetByIdComponent,
    CompanyAddComponent,
  ]
})

export class CompanyModule { }
