import { Company } from './../model/company.model';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  //companyAddFormGroup: FormGroup;
  company: Company = new Company();
  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
   //this.createForm();
   //this.add();
  }

add() {
  this.companyService.addCompany(this.company)
      .subscribe(() => this.router.navigate(['companies']),
          error => console.error(error));
}

/*
  submitMethod(): void{
    const obj = this.companyAddFormGroup.value;
    console.log(obj);
    let newCompany: Company;
    newCompany = obj as Company;
    console.log(newCompany);
    this.companyService.addCompany(this.company)
      .subscribe(() => this.router.navigate(['companies']),
          error => console.error(error));
  }

  createForm() {
    this.companyAddFormGroup = this.fb.group({
      name: ['', Validators.required]
    });
}
*/

}
