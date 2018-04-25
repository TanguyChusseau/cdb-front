import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Company } from '../model/company.model';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  isExpanded = false;
  @Input() company: Company;
  @Output() deletedCompany: EventEmitter<Company> = new EventEmitter();

  constructor(private companyService: CompanyService, private router: Router) {
  }

  deleteCompany(): void {
    this.companyService.deleteCompany(this.company.id)
      .subscribe(() => this.router.navigate(['companies']),
        error => console.error(error));
  }

}
