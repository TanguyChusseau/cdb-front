import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './company.service';
import { CompanyGetByIdComponent } from './company-getById/company-getById.component';
import { CompanyGetAllComponent } from './company-getAll/company-getAll.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { AppRoutingModule } from './/app-routing.module';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyComponent,
    CompanyGetByIdComponent,
    CompanyGetAllComponent,
    CompanyAddComponent,
    CompanyUpdateComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
