import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company.component';
import { CompaniesComponent } from '../companies/companies.component';
import { CompanyGetByIdComponent } from '../company-getById/company-getById.component';
import { CompanyAddComponent } from '../company-add/company-add.component';
import { CompanyUpdateComponent } from '../company-update/company-update.component';
import { CompanyService } from '../company.service';

@NgModule({
  imports: [
  CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CompanyComponent,
    CompaniesComponent,
    CompanyGetByIdComponent,
    CompanyAddComponent,
    CompanyUpdateComponent,
  ],
  providers: [CompanyService]
})

export class CompanyModule { }
