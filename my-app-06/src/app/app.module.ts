import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';
import { InfoComponent } from './info/info.component';
import { SecurityComponent } from './security/security.component';
import { loginGuard } from './login.guard';
import { timeGuard } from './time.guard';

const routes = [
  {path:'',component:IndexComponent},
  {path:'index',component:IndexComponent},
  {
    path:'user/center',
    component:UserCenterComponent,
    //当前路由组件可以被激活吗？-- 应用路由守卫
    canActivate: [loginGuard,timeGuard],
    children:[
      {path:'',component:InfoComponent},
      {path:'info',component:InfoComponent},
      {path:'avatar',component:AvatarComponent},
      {path:'security',component:SecurityComponent}
    ]
  },
  {path:'**',component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserCenterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
