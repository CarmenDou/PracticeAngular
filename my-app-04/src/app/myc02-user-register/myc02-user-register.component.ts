import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-myc02-user-register',
  templateUrl: './myc02-user-register.component.html',
  styleUrl: './myc02-user-register.component.css',
  providers: [TimerService] //only can be used in this component
})
export class Myc02UserRegisterComponent {
  timer:any = null
  constructor(timer:TimerService){
    this.timer = timer
  }
  doRegister(){
    this.timer.start()
    this.timer.end('doRegister')
  }
}
