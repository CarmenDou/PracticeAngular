class Student {
    // private sname:string = ''

    // constructor(sname:string){
    //     this.sname = sname
    // }

    //same 
    //which is special because type parameter has an access modifier, but actually a method cannot has an aceess modifier.
    constructor(private sname:string){

    }
}

let s2 = new Student('Carmen')