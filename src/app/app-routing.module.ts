import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyGetByIdComponent } from './company-getById/company-getById.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';

const routes: Routes = [
  {
    path: 'companies',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: 'companies/:id',
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
    redirectTo: 'companies',
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
