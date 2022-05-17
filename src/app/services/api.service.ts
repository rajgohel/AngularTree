import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTreeItems(obj): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(obj);
    return this.http.post('https://poc.molecularconnections.com/Tree/getTerm', body, { 'headers': headers })
  }
}
