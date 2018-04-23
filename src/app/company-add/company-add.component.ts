import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  company: Company = new Company();
  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  add() {
    this.companyService.add(this.company.name)
      .subscribe(() => this.router.navigate(['Companies']), error => console.error(error))

  }

}
