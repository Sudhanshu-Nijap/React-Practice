// normal function
function add(a,b,c=9){
    console.log(a,b,c);
    return a+b+c;
}
result = add(2,4);
result1 = add(4,6);
result2 = add(1,3,4);
result3 = add(3);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

function sayHello(){
    console.log("Hello Sudhanshu");
}
sayHello();

//argument operator
function argumentfun(){
    console.log(arguments)    
}
argumentfun(1,2,3,4,5)

function addNumbers(){
    let ans = 0
    for(let i = 0;i<arguments.length;i++){
        ans += arguments[i]; 
    }
    console.log(ans)
}
addNumbers(1,2,3,4,5)


// spread operator
function spreadfun(...num){
    console.log(num)
}
spreadfun(1,2,3,4)

function mulNumbers(...num){
    let ans=1;
    for(let i=0;i<num.length;i++){
        ans *= num[i];
    }
    console.log(ans)
}
mulNumbers(1,2,3,4,5)


// Arrow Function
const add = (a,b) =>{
    console.log("A:",a,"B:",b,"=",a+b);
};
add(10,20)

// without return or console
const hey = (n) => n;   // single line
res = hey("sudhanshu")
console.log(res)

const numbers = (...num) =>{
    console.log(num);
}
numbers(1,2,3,4,5)

let obj = {
    name:"Sudhu",
    age:18,
    address:"Mahim",
    show:  
    ()=>{
        console.log(`The name is ${this.name}`);
    }
}
console.log(obj.name);


// High order function - the function which accepts an function as argument
// callback function
function add(a,b,cb){
    let result = a+b;
    let name = 'Sudhanshu';
    cb(result,name);
}
function showResult(result,name){
    console.log(result,name);
} 

add(2,4,showResult)  // using normal function
add(3,4,(res,n)=>console.log(res,n)) // using arrow function

// return callback function
function call(a,b,cb){
    let res = a+b;
    cb(res);
    return () => console.log(res); // returns a function
}

let resultFunc = call(5,6,()=>{}) // resultFunc is assigned an function
resultFunc()
