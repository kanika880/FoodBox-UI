import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './service/helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isloggedin: any;

  constructor(private http:HttpClient) { }

  public addUser(user:any){
    return (this.http.post(`${baseUrl}/user/signup`,user));
  }

  //private url:string = "http://localhost:8085/api/v1/user";
  

  public loginUser(user:any){
    return (this.http.post(`${baseUrl}/user/login`,user));
  }

  public logoutUser(user : string){
    return (this.http.post(`${baseUrl}/user/logout/${user}`,null));
  }

  public getUsers(user:any){
    return (this.http.post(`${baseUrl}/user/getUsers`,user));
  }

  public getUser(id : number){
    return (this.http.get(`${baseUrl}/user/getuser/${id}`));
  }

  public updateUser(user : any, id : number){
    return (this.http.put(`${baseUrl}/updateuser/${id}`,user));
  }

  public deleteUser(id : number){
    return (this.http.delete(`${baseUrl}/delete/${id}`));
  }

}
