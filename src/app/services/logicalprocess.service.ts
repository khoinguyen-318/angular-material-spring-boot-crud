import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicalprocessService {
  private baseUrl = 'http://localhost:8080/backend/api';

  constructor(private http: HttpClient) { }
  getById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createObject(obj: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, obj);
  }

  updateObject(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteObject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  searchAllList(key:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?q=${key}`);
  }
}
