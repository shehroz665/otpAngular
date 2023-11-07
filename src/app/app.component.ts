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
  buttonClicked :boolean= false;
  url:string='https://localhost:7295/api/auth/send';
  constructor(private api:HttpService) {}
  getOTPFromApi(){
    this.api.getOTP(this.url).subscribe((response:any)=> {
      //console.log(response);
      this.otp=response.data.otp;
     this.buttonClicked=true;
    })
  }
  onOtpChange(value:any){
    var input= Number(value);
    if(this.otp===input){
      alert("You entered valid otp");
    }
    else if(this.otp!=input && value.toString().length===6){
      alert("You entered an invalid otp");
    }
  }
}
