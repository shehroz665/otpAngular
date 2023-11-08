import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { HttpService } from './Services/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //countdownConfig: CountdownConfig = { leftTime: 59 }; 
  otp:number=0;
  flag:boolean=true;
  buttonClicked :boolean= false;
  countdownDuration: number = 59;
  countdown:number;
  showTimer:boolean=true;
  url:string='https://localhost:7295/api/auth/send';
  constructor(private api:HttpService) {
    this.countdown = this.countdownDuration;
    this. getOTPFromApi();
  }
  ngOnInit(): void {
    const timerInterval = setInterval(() => {
      this.updateCountdown();
      if (this.countdown === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  updateCountdown() {
    if (this.countdown > 0) {
      this.countdown--;
    }
  }
  getOTPFromApi(){
    this.showTimer=true;
    this.api.getOTP(this.url).subscribe((response:any)=> {
      this.otp=response.data.otp;
     this.buttonClicked=true;
    
    })
  }
  onOtpChange(value:any){
    var input= Number(value);
    if(this.otp===input){
      alert("You entered valid otp");
      this.showTimer=false;
    }
    else if(this.otp!=input && value.toString().length===6){
      alert("You entered an invalid otp");
    }
  }
  resendOTP(){
    this.countdown=59;
    this.getOTPFromApi();
  }
 

}
