import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from './model/company.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanyService {

  private companyUrl = 'http://localhost:8080/web/companies';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  public getById(id: string): Observable<Company> {
    return this.http.get<Company>(`${ this.companyUrl }/${ id }`);
  }

  public addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.companyUrl, JSON.stringify(company));
  }

  public updateCompany(id: number, company: Company): Observable<any> {
    return this.http.put(`${ this.companyUrl }/${ id }`, JSON.stringify(company));
  }

  public deleteCompany(id: number): Observable<Company> {
    return this.http.delete<Company>(`${ this.companyUrl }/${ id }`);
  }
}
