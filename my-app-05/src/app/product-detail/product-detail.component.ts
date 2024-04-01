import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent{
  productId:number | undefined;
  route: any;
  //声明依赖：读取参数需要“当前的路由”服务对象
  constructor(route:ActivatedRoute){}

  ngOnInit(){
    //组件初始化完成，读取路由参数，进而根据此
    this.route.params.subscribe((data:any)=>{
      console.log('得到了订阅的路由参数:')
      console.log(data)
      this.productId = data.lid
    })
  }
}
