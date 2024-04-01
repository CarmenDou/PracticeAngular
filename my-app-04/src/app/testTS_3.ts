class Emp{
    protected ename:string = "Carmen"
    protected salary:number = 0

    getEname(){
        return this.ename;
    }
}

class Coder extends Emp{
    private lang:string = ""
    printInfo(){
        console.log('ename is: ',this.ename)
        console.log('good at language is: ',this.lang)
    }
}

let c2 = new Coder()
// c2.ename = 'Tom'
// c2.salary = 8000
// c2.lang = 'sql'