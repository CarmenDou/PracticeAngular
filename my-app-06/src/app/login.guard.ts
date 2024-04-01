import { Injectable } from "@angular/core"
import { Router } from "@angular/router"

@Injectable({ //路由守卫都是可注入的服务对象
    providedIn:'root'
})
export class loginGuard {
    constructor(private router:Router){}
    isLogin = false
    canActivate(){
        console.log("login validate!")
        if (this.isLogin) {
            return true
        } else {
            console.log("cannot login!")
            this.router.navigateByUrl('/index')
            return false
        }
    }
}