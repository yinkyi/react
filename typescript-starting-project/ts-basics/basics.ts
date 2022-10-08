let age:number;
age=12;

let userName:string;
userName="Max";

let isInstructor:boolean;
isInstructor=true;

let hobbies:string[];
hobbies=["swimming","singing"];

let person:{
    name:string,
    age:number
};
person={
    name:"Aye",
    age:32
};

let people:{
    name:string,
    age:number
}[];
people=[{
    name:"Ko",
    age:33
},{
    name:"Me",
    age:32
}];

//Type Inference
let course = "React - The Complete Guide";
course="Ok Lay";

//union Type
let outline:string | number |boolean="React is bla bla";
outline = 1234;

//type alias 
type Student = {
    name:string,
    age:number
};
let student:Student;
student ={
 name:"Aung",
 age:30
}
let studentArr:Student[];
studentArr=[
    {
        name:"Aung",
         age:30
    },
    {
        name:"Nora",
         age:29
    },
]

//function & type
function addition(a:number,b:number){
    return a+b;
}
//void never return
function print(value:any){
    console.log(value);

}
//generic
//simple
function insertAtBeginning(array:any[],value:any){
    const newArray = [value,...array];
    return newArray;
}
const demoArray=[1,2,3];
const updatedArray = insertAtBeginning(demoArray,-1);
updatedArray[0].split();
//convert to simple to generic
//simple
function insertAtBeginning1<T>(array:T[],value:T){//array and value must be same type
    const newArray = [value,...array];
    return newArray;
}
const demoArray1=[1,2,3];
const updatedArray1 = insertAtBeginning1<number>(demoArray,-1);
const updatedArray1_s = insertAtBeginning1<string>(['a','b','c'],'k');
updatedArray1_s[0].split('');
// #### updatedArray1[0].split(); ### // error occur property split does not exist on type number;
