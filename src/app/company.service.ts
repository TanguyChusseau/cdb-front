import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from './model/company.model';

@Injectable()
export class CompanyService {

  private companyUrl = 'http://10.0.1.190:8080/web/companies';

  const;
httpOptions = {
headers: new HttpHeaders({'Content-Type': 'application/json'})
};

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  public getById(id: string): Observable<Company> {
    return this.http.get<Company>(`${ this.companyUrl }/${ id }`);
  }

  public addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.companyUrl, company, this.httpOptions);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(this.companyUrl, company, this.httpOptions);
  }

  public deleteCompany(id: number): Observable<Company> {
    return this.http.delete<Company>(`${ this.companyUrl }/${ id }`);
  }
}
