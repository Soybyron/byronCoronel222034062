import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SolicitudDeVacacionesService {

  appiUrl="https://localhost:7019/api/UsersControler"

  constructor(private http:HttpClient) { }

  register(firstName: string ,lastName: string ,email: string ,phone: string ,directName: string ,directEmail: string ,beginDate: string ,endDate: string, textEdit: string ):Observable<any>
  {
    return this.http.post(`${this.appiUrl}/register`, {firstName,lastName,email,phone,directName,directEmail,beginDate,endDate, textEdit});
  }

  validation(email :string, lastName : string):Observable<any>
  {
    return this.http.post(`${this.appiUrl}/validation`, {lastName,email})
  }
  
}
