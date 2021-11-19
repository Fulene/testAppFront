import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  public host: string = 'http://localhost:7001';

  constructor(private http: HttpClient) {}

  saveUser(user: string): Observable<any> {
    // use model entity
    return this.http.post(this.host + '/user', user);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.host + '/users');
  }
}
