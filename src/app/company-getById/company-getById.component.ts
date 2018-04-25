import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company.model';
import { CompanyService } from '../company.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-company-get-by-id',
  templateUrl: './company-getById.component.html',
  styleUrls: ['./company-getById.component.scss']
})
export class CompanyGetByIdComponent implements OnInit {

  company: Company;

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getById();
  }

  getById(): void {
    this.companyService.getById(this.route.snapshot.paramMap.get('id'))
      .subscribe(company => this.company = company, error => console.error(error));
  }

  deleteCompany(): void {
    this.companyService.deleteCompany(this.company.id)
      .subscribe(() => this.router.navigate(['companies']),
        error => console.error(error));
  }

}
