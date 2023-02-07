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
// const list ={firstname:'jeeva',
// age:20,
// job:'student',
// friend:['jeeva','tamil','nithin'],
// driver:true,
// // function use inbuild.....
// objfun:function(){
//     this.agee= 41-this.age;
//     return this.agee;
//     }
// };
//console.log(list.objfun(2022));
//console.log(list['objfun'](2022));
// list["naveen"]="karthi";
// console.log(list);
//// display the answer in on call in the function
//console.log(list.objfun);
// console.log(list.agee);
// console.log(list.agee);
// console.log(list.agee);
////program
// const pro ={firstname:'jeeva',
// age:20,
// driver:true,
// function use inbuild.....
// di:function(){
//     return `my name is ${pro.firstname} i have drive lissance ${this.driver ? 'yes' :'no'}`;
//     }
//     };
// console.log(pro.di());
//// challange program with obj......
// const jeeva={
// weight:72,
// hight:176,
// bmi:function(){
//     this.bmi=this.weight/this.hight**2;
//     return this.bmi;
// }
// };
// const tamil={
//     weight:60,
//     hight:160,
//     bmi:function(){
//         this.bmi=this.weight/this.hight**2;
//         return this.bmi;
//     }
//     }
//     jeeva.bmi();
//     tamil.bmi();
// console.log(jeeva.bmi,tamil.bmi);
// if(jeeva.bmi>tamil.bmi){
//     console.log(`jeeva is higher ${jeeva.bmi}`);
// }
// else if(tamil.bmi>jeeva.bmi){
//     console.log(`tamil is higher ${tamil.bmi}`) ;
// }
// /////  for loop function............
// for(let i=1;i<=10;i++){
//     console.log(`haiii jeeva.. ${i}`);
// }
///// loop array and breaking, continue........
//const jeeva=['hello',2002,'eat','byee',['jeeva','tamil','nithin']];
// console.log(jeeva[0]);
// console.log(jeeva[1]);
// console.log(jeeva[4][0]);
// jeeva.pop();  // delete the element at last
// jeeva.push(55)  // add element at last
// jeeva.shift() // remove the 1st element
// jeeva.unshift("jeeva")// add the value at first element at 1at poss
// const value=[];
// for(let i=0;i<jeeva.length;i++){
//     console.log(jeeva[i]);
//     // type of arrray... 
//     value[i]=typeof jeeva[i];
// }
//console.log(value);
// age calculator.........................
// const year=[2002,2003,2004,2005];
// const age=[];
// for (let j=0;j<year.length;j++){
//       age.push(2024-year[j]);
// }
// console.log(age);
//continue and break.........
// const jeeva=['hello',2002,'eat','byee',['jeeva','tamil','nithin']];
// const name1=[]
// for(let i=0;i<jeeva.length;i++){
//     if(typeof jeeva[i]!=='string')continue
//        name1.push(jeeva[i]) 
    
// }
// console.log(name1);
// let arr=[10,20,30,40,50,60,70];
// for(let i=0;i<arr.length;i++){
// if(arr[i]===40)
// {
//     continue;
// }
// else{
//     console.log(arr[i]);
// }
// }
// while loppp..................
// let a=10
// while(a>0){
//     if(a%2==0){
//     console.log(`the even number is :${a}`);
//     }
//    a--;
// }
//// program...............


// const val=function(temp){
// let max=temp[0];
// for(let i=0;i<temp.length;i++){
//     if(max<temp[i]) max=temp[i];
// }
// console.log(max);
// };
// val([1,4,3]);
// console.log(document.querySelector('.main').textContent);
// console.log(document.querySelector('.main').textContent='....correct number....');
// // write the guse number change and score change..
// console.log(document.querySelector('.ques').textContent='13');
// console.log(document.querySelector('.scrhi').textContent=20);
///----------------------++++++++===startproject////////////////////////////////===============
// let ans= Math.trunc(Math.random()*20);
// console.log(ans);
// let score=10;
// let higscr=0;

// document.querySelector('.but').addEventListener('click',function() 
// {
//    const a=Number(document.querySelector('.num').value);
//    console.log(a);
// //   console.log(document.querySelector('.main').textContent='....correct number....');
//     if(!a)
//     {
//     document.querySelector('.cc').textContent='Enter the value it is Empty';   
//     }
//     else if( a=== ans )
//     {
//         console.log(document.querySelector('.cc').textContent='It is The correct Number');
//         console.log(document.querySelector('.ques').textContent=ans);
//         if(score>higscr)
//         {
//         console.log(document.querySelector('.higsc').textContent=score);
//         }
//        // document.querySelector('body').style.backgroundColor=' rgb(97, 175, 18)';
//     }
//     else if( a>ans )
//     {
//         if(score>1)
//         {
//         console.log(document.querySelector('.cc').textContent='Enter The Less Number');
//         score--;
//         console.log(document.querySelector('.scrhi').textContent=score);
//         }
//         else
//         {
//             console.log(document.querySelector('.cc').textContent='You loss... The Game')
//             console.log(document.querySelector('.scrhi').textContent=0);
//         }
//     }
//     else if( a<ans )
//     {
//         if(score>1)
//         {
//         console.log(document.querySelector('.cc').textContent='Enter The Large Number');
//         score--;
//         console.log(document.querySelector('.scrhi').textContent=score);
//         console.log(document.querySelector('.scrhi').textContent=0);
//         }
//         else
//         {
//             console.log(document.querySelector('.cc').textContent='You loss... The Game')
//         }
//     }
//     document.querySelector('.aga').addEventListener('click',function(){
//          ans= Math.trunc(Math.random()*20);
//         score=20;
//         console.log(document.querySelector('.cc').textContent='Start checking...');
//         console.log(document.querySelector('.scrhi').textContent=score);
//         console.log(document.querySelector('.ques').textContent='?');
//         const a=Number(document.querySelector('.num').value='');

//     })
// });

const dis=document.querySelector('.mess');
const close=document.querySelector('.closebut');
const open=document.querySelector('.openmess');
const value=document.querySelectorAll('.but');
for(let i=0;i<value.length;i++){
value[i].addEventListener('click',function(){
dis.classList.remove('mess');
})
};
///// close button
// close.addEventListener('click',function(){
// dis.classList.add('mess');
// });
//////////// all click
// dis.addEventListener('click',function(){
//     dis.classList.add('mess');
//     });
//// if enter key press remove
document.addEventListener('keydown',function(ev){
   console.log(ev.key);
    if(ev.key==='Enter'){
        dis.classList.add('mess');
         }
});