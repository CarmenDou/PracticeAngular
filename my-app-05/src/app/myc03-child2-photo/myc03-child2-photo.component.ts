import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-myc03-child2-photo',
  templateUrl: './myc03-child2-photo.component.html',
  styleUrl: './myc03-child2-photo.component.css'
})
export class Myc03Child2PhotoComponent {
  //private child2Name:string = null
  //普通属性不能被父组件传值
  //child2Name:string = ""

  //输入型属性：父组件可以利用这种属性传值进来,但需要用input装饰下，父亲输入进来
  @Input()
  child2Name:string = ''
}
