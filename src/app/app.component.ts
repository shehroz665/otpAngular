import { Component } from '@angular/core';
import { HttpService } from './Services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otp';
  otp:number=0;
  flag:boolean=true;
  url:string='https://localhost:7295/api/auth/send';
  constructor(private api:HttpService) {}
  getOTPFromApi(){
    this.api.getOTP(this.url).subscribe((response:any)=> {
      this.otp=response.data.otp;
      this.flag=true;
    })
  }
}
