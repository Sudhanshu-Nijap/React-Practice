// while loop
let p = 5;
while(p>0){
    console.log(p);
    p-=1;
}

// do=while
m=0;
do{
    console.log(m);
    m+=1;
}while(m<10);

// for
for(let i=0;i<5;i++){
    let row = "";
    for(let j=0;j<i+1;j++){
        row+="*";
    }
    console.log(row);
}

let obj = {
    name:"sudhu",
    role:"engineer",
    edu:"btech",
}

// similar as range (for i in range(arr)) 
// k returns index (moves index-by-index)
// for in
let a = [10,20,30,40];
for (const k in a){
    console.log(a[k]);
}

// dict or object
for (const key in obj) {
        console.log(key,obj[key]);
}

// similar as in (for i in arr)
// c returns value (moves value-by-value)
// for of
for (const c of "sudhu") {
    console.log(c);
}

// used for arrays
// forEach - does not returns new array
let num = [1,2,3,4,5]
num.forEach((element) => {
    console.log(element*element+"sudhu");   
});

//Array.from -> converts to array
let str = "sudhu";
let arr = Array.from(str);
console.log(arr)

let num1 = [1,2,3,4,5]
// map - returns new array
let newArray = num1.map((num)=>console.log(num*num));
newArray;

findEle = num1.find((num)=>num===4)
console.log(findEle) // returns number when it is true

filterArray=num1.filter((num)=>num%2==0)
console.log(filterArray) // returns numbers when it is true
