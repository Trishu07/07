/*const student={
    sname:"Trishu",
    id:"217",
    dept:"IT",
    age:"19"
}
const{sname,id,dept,age}=student;
console.log(student);

class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`${this.name}`);
            }
}
        const c =new student("bobby",30);
        c.greet();*/

function change(){
    document.getElementById("p1").innerText="hello";
    document.querySelector(".h1").innerHTML +="<button>h1</button>";
}
function show(){
    let uname = document.getElementById("uname").value;
    document.getElementById("un").innerText=uname;
}