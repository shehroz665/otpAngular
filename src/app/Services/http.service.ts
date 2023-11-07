import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Response } from '../response';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {}
  getOTP(url:string):Observable<Response[]>{
    return this.http.get<Response[]>(url);
  }
}
