import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyGetByIdComponent } from './company-getById/company-get-by-id.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
    pathMatch: 'full'
  },
  {
    path: 'company/:id',
    component: CompanyGetByIdComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: CompanyAddComponent,
    pathMatch: 'full'
  },
  {
    path: 'update',
    component: CompanyUpdateComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'company',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})

export class AppRoutingModule { }
