import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-myc02-user-login',
  templateUrl: './myc02-user-login.component.html',
  styleUrl: './myc02-user-login.component.css',
  providers: [TimerService] //only can be used in this component
})
export class Myc02UserLoginComponent {
  timer:any = null
  constructor(timer:TimerService){
    this.timer = timer
  }
  doLogin(){
    this.timer.start()
    this.timer.end('doLogin')
  }
}
