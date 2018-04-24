import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from './model/company.model';
import { Map, Catch, Throw } from 'rxjs/operator';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CompanyService {

  private companyUrl = 'http://localhost:8080/web/companies';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  public errorHandler(error: HttpResponse) {
    return Observable.throw(error || 'SERVER ERROR');
  }

  public getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl).map((response: HttpResponse) => response.body).catch(this.errorHandler);
  }

  public getById(id: string): Observable<Company> {
    return this.http.get<Company>(`${ this.companyUrl }/${ id }`)
      .map((response: HttpResponse) => response.body).catch(this.errorHandler);
  }

  public addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.companyUrl, JSON.stringify(company));
  }

  public updateCompany(id: number, company: Company): Observable<Company> {
    return this.http.put(`${ this.companyUrl }/${ id }`, JSON.stringify(company));
  }

  public deleteCompany(id: number): Observable<Company> {
    return this.http.delete<Company>(`${ this.companyUrl }/${ id }`)
      .map((response: HttpResponse) => response.body).catch(this.errorHandler);
  }
}
