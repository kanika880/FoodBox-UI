import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  public post(url: any, params?: any, payload?: any ) {
    let param = new HttpParams()
    .set('username', params.username)
    .set('password', params.password)
    //.set('role',params.role)
    return this.http.post(`${baseUrl + url}`, payload, {params: param})
  }
}
