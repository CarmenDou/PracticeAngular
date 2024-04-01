import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-myc02-child1-modify',
  templateUrl: './myc02-child1-modify.component.html',
  styleUrl: './myc02-child1-modify.component.css'
})
export class Myc02Child1ModifyComponent {
  userInput:string = "";

  //事件发射器
  @Output() //输出型属性装饰下
  changeUserNameEvent = new EventEmitter()

  doModify(){
    console.log(this.userInput)
    //子组件发射数据给父组件
    this.changeUserNameEvent.emit(this.userInput)
  }
}
