//elzero web school Rest Parameters
function addAll(...myParam){
    let number = 0;
    for(let param of myParam) number += param;
        
    return number;
}
console.log(addAll(2,3));

function timesAll(...myParam){
    let number = 1;
    for(let param of myParam) number *= param;

    return number;
}
console.log(timesAll(2,3));

console.log("#".repeat(25));
console.log("#".repeat(25));


//elzero web school Destructuring 
let city = "Default",
    name = "Default",
    gander = "Default",
    age = "Default",
    address = "Default";

var user = {
    name:"Ali",
    gander:"Male",
    age:"27",
    address:"KSA",
    city:"Jeddah"
};

({city = "Makkeh",name, age} = user);

console.log(`My name is: ${name}
 I'm ${age} years old
 I live in ${city} `);

console.log("#".repeat(25));
console.log("#".repeat(25));

 //elzero web school Mixed Destructuring

 const userName = {
     Name:"Wejdan",
     Gender:"Female",
     Address:
     {
         Cuntry:"KSA",
         City:"Taif",
         Street:"K1",
         Info:
         {
             BuildingNo:"4388956350",
             Mobile:"0536598834"
         }
     },
     Skills:
     {
         s1:"Vue", s2:"React", s3:"Angular"
     }
 };

const 
{
    Name, Gender, 
    Address:
    {
        Cuntry, City, Street,
        Info:
        {
            BuildingNo, Mobile
        }
    }, 
    Skills:{s1:One,s3:Three}
} = userName;

console.log(`my name ${Name}, I'm a ${Gender}.
I'm from ${Cuntry}, I live in ${City},${BuildingNo}.
my phone No is: ${Mobile}.
my skills ${One}, ${Three}. `);

console.log("#".repeat(25));
console.log("#".repeat(25));

 //elzero web school Parameters Destructuring

function myInfo({city = "Makkeh",name, age})
{
    console.log(`My name is: ${name}
    I'm ${age} years old
    I live in ${city} `);
}
myInfo(user);

console.log("#".repeat(25));
console.log("#".repeat(25));

//elzero web school Object Enhancment

var firstName = "Saleeh",
    lastName = "Bajaber",
    personAge = 28,
    OUschool = "B.sc";

const personInfo = {
    no:1,
    firstName,
    family:lastName,
    age:personAge,
    OUschool
};
console.log(personInfo);
console.log("#".repeat(25));
console.log("#".repeat(25));


//elzero web school Set 

let setArray = [1, 2, 2, 3, 3, 4, 5, 5, 6]; // Array can store any values

const mySet = new Set(setArray);  // Set only store unique values 
console.log(mySet);
console.log(`the size is: ${mySet.size}`);
mySet.add('my name is Ali')
.add({A:1,B:2});
console.log(mySet);
console.log(mySet.values());
console.log(mySet.keys());
mySet.delete('my name is Ali');
console.log(mySet.size);
console.log(mySet);


console.log("#".repeat(25));
console.log("#".repeat(25));

//elzero web school weakSet 

//const myWeakSet = new WeakSet(setArray);  // WeakSet can't store Array
const myWeakSet = new WeakSet();  // WeakSet only store Objects 

console.log(myWeakSet);
console.log(`the size is: ${myWeakSet.size}`);
//myWeakSet.add('my name is Ali')  // WeakSet can't store String
myWeakSet.add({A:1,B:2});         // we add new Object here
console.log(myWeakSet);
//console.log(myWeakSet.values());  // values() not allowed
//console.log(myWeakSet.keys());    // keys() not allowed
console.log(myWeakSet.size);        // if we use size in weakSet we get undefined value
console.log(myWeakSet);

console.log("#".repeat(25));
console.log("#".repeat(25));

/*
  Custom Iterable Object
*/

const myObject = {
    name: "Osama",
    age: 36,
    country: "Egypt",
    favSkill: "JavaScript",
    [Symbol.iterator] () {
      let step = 0;
      let properties = Object.keys(this);
       //console.log(properties);
      return {
        next() {
          return {
            value: myObject[properties[step]],
            done: step++ === properties.length
          }
        }
      }
    }
  }
  
  for (let prop of myObject) {
    console.log(prop);
  }
  
  console.log(myObject['favSkill']);

  console.log("#".repeat(25));
  console.log("#".repeat(25));
  
  const aliObject = {
      name: "Ali",
      age: 26,
      country: "Egypt",
      favSkill: "JavaScript",
      [Symbol.iterator] () {
          let count = 0,
          keysProp = Object.keys(this);
          // console.log(keysProp);
          return{
              next(){
                  return{
                    value: `${keysProp[count]} - ${aliObject[keysProp[count]]}`,
                    done: count++ === keysProp.length 
                }
            }
        }
    }
}
//keysProp[count] + "-" + aliObject[keysProp[count]]
for (let char of aliObject){
    console.log(char);
}

console.log("#".repeat(25));
console.log("#".repeat(25));

/*
Generators Part 3
  Create Infinite Numbers
*/

function * ticketInfo(){

    let ticketNum = 0;
    let ticketCode ;

    while (ticketNum <= 20){
        
        yield ticketNum++;
        /*
        function randomNum(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        yield ticketCode = randomNum(10,20);
        */

    }
}

let ticketPrint = ticketInfo();
console.log(ticketPrint.next());
console.log(ticketPrint.next());


for (let x of ticketPrint){

    //var step = 1;

   // if(step < 8 ){
    //    step++;
   /// }
    //else 
    if(x > 8){
    
        //console.log(ticketPrint.next());

        break;
    }

    console.log(x);
            
}

//console.log(ticketPrint.next());
//console.log(ticketInfo().next());

//container6 DOM exercise from lessen no #9 

var myPara = document.getElementById('pId'),
    myButton = document.getElementById('clickHere');
    myPara.setAttribute("class","k i y e");
console.log(myPara);
console.log(myButton.textContent);

if (myPara.classList.contains(myButton.textContent))
{d
    console.log("yes");

}
else if (!myPara.classList.contains(myButton.textContent))
{
    myPara.setAttribute("class",myButton.textContent);
    console.log("yes just has set");
}
else
{
    console.log("No");
}

var newParagragh = document.createElement('p'),
    newText = document.createTextNode('nwe Text from JS');

newParagragh.appendChild(newText);

var myContainer6 = document.querySelector('.container6');

myContainer6.insertBefore(newParagragh, myContainer6.childNodes[5]);
