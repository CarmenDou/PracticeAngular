import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(private router:Router){

  }
  jump(){
    //跳转到商品列表页-需要“路由器”服务
    this.router.navigateByUrl('/plist')
  }
}
