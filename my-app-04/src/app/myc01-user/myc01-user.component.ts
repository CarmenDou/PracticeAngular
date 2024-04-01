import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-myc01-user',
  templateUrl: './myc01-user.component.html',
  styleUrl: './myc01-user.component.css'
})
export class Myc01UserComponent {
  // timer:any = null
  // constructor(timer:TimerService){
  //   this.timer = timer
  // }
  //same like below
  constructor(private timer:TimerService){}
  doLogin(){
    // let start = new Date().getTime()
    // console.log('request login information...')
    // console.log('response successfully...')
    // let end = new Date().getTime()
    // console.log('LoginTimeUsed:',end-start)
    this.timer.start()
    this.timer.end('doLogin')
  }
  doRegister(){
    // console.log('request register information...')
    // console.log('response successfully...')
    this.timer.start()
    this.timer.end('doRegister')
  }
}
