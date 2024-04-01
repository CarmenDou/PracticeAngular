//access modifiers used for classes, attributes, methods and constructors.
class User2 {
    private age:number = 20

    public setAge(age:any){
        if(age<18 || age > 60){
            console.log('illegal age')
        }else{
            this.age = age
        }
        this.age = 30
    }

    public getAge() {
        return this.age;
    }
}

let u2 = new User2();
//u2.age = 'tom'
//u2.age = 200
u2.setAge(-30)
let a = u2.getAge()