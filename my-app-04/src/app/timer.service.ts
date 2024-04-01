import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class TimerService {
  startTime = 0 //operating starting time
  endTime = 0 //operating ending time
  constructor() {
    console.log('A TimerService object is created.')
  }
  start(){
    this.startTime = new Date().getTime()
  }
  end(actionName:any){
    this.endTime = new Date().getTime()
    console.log(actionName + ' Time used: ',this.endTime-this.startTime)
  }
}
