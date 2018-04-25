import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../model/company.model';
import { CompanyGetByIdComponent } from '../company-getById/company-getById.component';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit {

  company: Company = new Company();
  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.companyService.getById(this.route.snapshot.paramMap.get('id'))
    .subscribe(company => this.company = company, () => alert('receipe not found'));
  }
  update() {
    this.companyService.updateCompany(this.company).subscribe(() => this.router.navigate(['/companies']));
  }

}
