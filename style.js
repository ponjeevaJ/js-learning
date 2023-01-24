// function decleration
// function  cal (birth){
//     return 2022-birth;
// }
// const age1=cal(2002);
// console.log(age1);
// function exprection
// const cal1 =function(birth){
//     return 2022-birth;
// }
// const age2=cal1(2002);
// console.log(age2);
// arrow function in oneline code
// const age3= birth=>2022-birth;
// const cal=age3(2002);
// console.log(cal);
// arrow function more than one line code
// const age =birth=>{
//     const year=2022-birth;
//     const ret=65-year;
//     return ret;
// }
// const ans=age(2002);
// console.log(ans);
// arrow function with different parameter
// const age =(birth,name)=>{
//     const year=2022-birth;
//     const ret=65-year;
//     return `i am ${name} i will reter in ${ret} years `;
// }
// const ans=age(2002,'jeeva');
// console.log(ans);
// calling more than one function with help help of other function:
// const pices=function(size){
//     return size*4;
// } 
// const fruit =function(apple,orange){
//     const picapple=pices(apple);
//     const picorange=pices(orange);
//     return `the juice with ${picapple} pice of apple and the juice with ${picorange} we will do`
// }
// const list=fruit(2,4);
// console.log(list);
// array function
// const name1=function(year){
//     return 2022-year;
// }
// const year1=[2002,2003,2004,2001];
// for(let i=0;i<year1.length;i++)
// {
// console.log(name1(year1[i]));
// }
//array challange
// const age=function(value){
// return value>=50 &&value <=300 ? value* 0.15 :value*0.5;
// }
// const val=[444,22];
// const con=[age(val[0]),age(val[1])]
// console.log(val,con);
// make an object and display it  ..............
// const list ={firstname:'jeeva',age:20,job:'student'};
// console.log(list.firstname);
// console.log(list.job);
// console.log(list.age);
// const na='name';
// console.log(list['first'+na]);
// use promt and the detail from the user and display to the output............
// const intin=prompt('firstname,age,job');
// if(list[intin])
// {
//     console.log(list[intin]);
// }
// else
// {
//     console.log("enter the correct value")
// }
//add nue element in the object....
// list.place='attur';
// list['google']='www.google';
// console.log(list);
//  it is used to show the data from the obj by calling the one by one
// const list ={firstname:'jeeva',age:20,job:'student',friend:['jeeva','tamil','nithin']};
// console.log(`list has deteil and the length is${list.friend.length} and his friend name is ${list.friend[0]} and his age is ${list.age}`)
// using the object use function in this
const list ={firstname:'jeeva',
age:20,
job:'student',
friend:['jeeva','tamil','nithin'],
driver:true,
// function use inbuild.....
objfun:function(year){
    return year-2002;
}
}
console.log(list.objfun(2022));
console.log(list['objfun'](2022));
list["naveen"]="karthi";
console.log(list);