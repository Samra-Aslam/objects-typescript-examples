//example=1

let student = {
    name:"samra",
    age:28,
}
console.log(student);
console.log(student.name);
console.log(student["age"]);


//example=2
//anonymous type

const a : {
    name:string;
    age:number
}={
    name:"sonia",
    age:16,
}
console.log(a.name);
console.log(a.age);


//example = 3
//object aliased

type studentType ={
    name:string;
    age:number;
}
let studnt : studentType
studnt= {
    name:"ali",
    age:20,

}
console.log(studnt.name);
console.log(student["age"]);

//example=4
//interface
//interface is same as "type" just replace "type" with word "interface" and remove = sign befor 

interface stype {
    name:string;
    age:number;
}
let mystudent : stype
mystudent= {
    name:"Armish",
    age:3,

}
console.log(mystudent.name);
console.log(mystudent["age"]);








