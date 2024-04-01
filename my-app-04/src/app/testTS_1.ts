class User{
    userList:any[] = []
    isMarried:any

    f1(n1:string, n2:number):number{
        this.userList = ['Tom','Mary','20']
        return 1
    }
}

let u1 = new User()
u1.f1('tom', 20)