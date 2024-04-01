import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myc04-productlist',
  templateUrl: './myc04-productlist.component.html',
  styleUrl: './myc04-productlist.component.css'
})
export class Myc04ProductlistComponent {
  private productList:any = []
  private pno:number = 0
  //dependency injection
  constructor(private http:HttpClient){}
  //private productList = [{"lid":101,"title":"aaa","pic":"asd","price":"1000"}]

  public loadMore():void {
    this.pno++;
    let url = "https://www.baidu.com"
    this.http.get(url).subscribe((res:any)=>{
      console.log('response successfully!')
      this.productList = [{"lid":101,"title":"aaa","pic":"asd","price":"1000"}]
    })
    // this.productList = [{"lid":101,"title":"aaa","pic":"asd","price":"1000"}]
  }

  public getProductList(){
    return this.productList
  }

  ngOnInit() {
    //组件初始化完成，立即请求一次服务器端数据
    this.loadMore()
  }
}
