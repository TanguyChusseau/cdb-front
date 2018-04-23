import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Company } from '../model/company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  isExpanded = false;
  @Input() company: Company;
  @Output() deletedCompany: EventEmitter<Company> = new EventEmitter();

  constructor(private recipeService: CompanyService) {
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  deleteRecipe(): void {
    this.recipeService.delete(this.company.id)
      .subscribe(() => this.deletedCompany.emit(this.company));
  }

}