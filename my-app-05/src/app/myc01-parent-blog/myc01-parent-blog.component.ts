import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-myc01-parent-blog',
  templateUrl: './myc01-parent-blog.component.html',
  styleUrl: './myc01-parent-blog.component.css'
})
export class Myc01ParentBlogComponent {
  //private userName:string = "Carmen"
  userName:string = "Carmen"

  //处理子组件的changeUserName
  doChange(e:any){
    console.log("Parent.changeUserName(): ")
    console.log(e) 
    this.userName = e
  }

  //此时还对应不起来，需要装饰一下，如果没有ngif，ngfor就是静态的
  @ViewChild('c0',{static:true})
  child0:any
  @ViewChild('c1')
  child1:any
  @ViewChild('c2')
  child2:any
  print(){
    console.log(this.child0)
    console.log(this.child1)
    console.log(this.child2)
  }
}
