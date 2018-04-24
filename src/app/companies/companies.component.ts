import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.companyService.getAll()
      .subscribe(companies => this.companies = companies,
        error => console.error(error));
  }

  deletedCompany(company: Company) {
    const companyIndex = this.companies.indexOf(company);
    this.companies.splice(companyIndex, 1);
  }
}
