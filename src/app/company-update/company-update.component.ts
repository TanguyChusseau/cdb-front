import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit {

  company: Company = new Company();
  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.update();
  }

  update() {
    this.companyService.updateCompany(this.company.id, this.company)
      .subscribe(() => this.router.navigate(['Companies']),
        error => console.error(error));
  }
}
