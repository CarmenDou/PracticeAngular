import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc01ParentBlogComponent } from './myc01-parent-blog/myc01-parent-blog.component';
import { Myc02Child1ModifyComponent } from './myc02-child1-modify/myc02-child1-modify.component';
import { Myc03Child2PhotoComponent } from './myc03-child2-photo/myc03-child2-photo.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

//声明路由词典--路由地址和路由组件的对应集合
let routes = [
  // {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path:'plist',component:ProductListComponent},
  {path:'pdetail/:lid',component:ProductDetailComponent},
  {path:'ucenter',component:UserCenterComponent},
  // {path:'',component:UserCenterComponent},
  //** 星星匹配任意格式地址，所以不能放在最前面，会把别的路径覆盖掉 */
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Myc01ParentBlogComponent,
    Myc02Child1ModifyComponent,
    Myc03Child2PhotoComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserCenterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
