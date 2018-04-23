import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from './model/company.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanyService {

  private companyUrl = 'api/recipes';
  constructor(private http: HttpClient) {
  }

  public getAll<T>(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  public getById<T>(id: number): Observable<Company> {
    return this.http.get<Company>(`${ this.companyUrl }/${ id }`);
  }

  public add<T>(name: string): Observable<Company> {
    return this.http.post<Company>(this.companyUrl, name);
  }

  public update<T>(id: number, company: Company): Observable<Company> {
    return this.http.put(`${ this.companyUrl }/${ id }`, company);
  }

  delete<T>(id: number): Observable<Company> {
    return this.http.delete<Company>(`${ this.companyUrl }/${ id }`);
  }
}
