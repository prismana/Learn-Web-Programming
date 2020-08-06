//Kemudian const digunakan untuk mendeklarasikan sebuah variabel yang sifatnya immutable atau tidak perlu diinisialisasi kembali. Jika kita menginisialisasi kembali nilai variabel yang menggunakan const, maka akan mendapati eror �TypeError: Assignment to constant variable.�
const z = 100;
console.log(z);
 
z = 200;
console.log(z)
 
/* TypeError: Assignment to constant variable. */


/*__________________________________________________________________________________________________________________________________________________________________________*/
//STRING
console.log("Hallo, nama saya " + user.name.first + " " + user.name.last); 
/* output
Hallo, nama saya Harry Potter
*/

let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);
 
/* output: HelloHello */

//BOOLEAN
const a = 10;
const b = 12;
 
let isGreater = a > b;
let isLess = a < b;
 
console.log(isGreater);
console.log(isLess);
 
/* output:
false
true
*/

//NULL
let someLaterData = null;
console.log(someLaterData);
 
/* output:
null
*/

/*__________________________________________________________________________________________________________________________________________________________________________*/
//ARRAY ATAU OBJECT
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);
 
/* output:
[ 'Coklat', 42.5, 22, true, 'Programming' ]
*/

let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);
 
/* output:
42.5
*/

let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");
 
/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/


/*__________________________________________________________________________________________________________________________________________________________________________*/
//OBJECT
let user = {firstName: "Harry", lastName: "Potter",  age: 20, isMuggle: false, stuff: ["Wand", "Flying Car", "Owl"]}; 

let user = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);  //untuk mengakses menggunakan tanda titik
console.log("Umur saya " + user.age + " tahun");
 
/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/

let user = {		//kita juga bisa menyimpan objek didalam objek
    name: {
        first: "Harry",
        last: "Potter",
    },
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
}

console.log("Hallo, nama saya " + user.name.first + " " + user.name.last);
 
/* output
Hallo, nama saya Harry Potter
*/


/*__________________________________________________________________________________________________________________________________________________________________________*/
//ASSIGMENT OPERATOR
let x = 10;
let y = 5
 
x += y;
 
console.log(x)

let x = 10;
let y = 5
 
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;
console.log(x);

//OERATOR KMPARASI
//== Membandingkan kedua nilai apakah sama. (Tidak Identik)
//!= Membandingkan kedua nilai apakah tidak sama. (Tidak Identik)
//=== Membandingkan kedua nilai apakah identik.
//!== Membandingkan kedua nilai apakah tidak identik.
//> Membandingkan dua nilai apakah nilai pertama lebih besar dari nilai kedua.
//>= Membandingkan dua nilai apakah nilai pertama lebih besar atau sama dengan dari nilai kedua.
//< Membandingkan dua nilai apakah nilai pertama lebih kecil dari nilai kedua.
//<= Membandingkan dua nilai apakah nilai kedua lebih kecil dari atau sama dengan nilai pertama.

let a = 10;
let b = 12;
 
console.log(a < b);
console.log(a > b); 
/* output
true
false
*/

const aString = '10';
const aNumber = 10
console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
 
/* output
8.true
9.false
10.*/

let a = 10;
let b = 12;
 
/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false
 
/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true
 
/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false
 
/* output
true
false
true
true
false
false
*/


/*__________________________________________________________________________________________________________________________________________________________________________*/
//IF/ELSE
let x = 50;
 
if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
} 
/* output
Nilai kurang dari 70
*/

let language = "English";
let greeting = "Selamat Pagi!"

if(language === "English") {
    greeting = "Good Morning!";
}

console.log(greeting);
/* output
Good Morning!
*/

let language = "French";
let greeting = "Selamat Pagi"
 
if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayogozaimasu!"
}
 
console.log(greeting);
 /* output
Bonjour!
*/


/*__________________________________________________________________________________________________________________________________________________________________________*/
//LOOP
 for(let i = 0; i < 5; i++) {
    console.log(i);
}
 
/* output
0
1
2
3
4
*/

const myArray = ["Harry", "Ron", "Hermione", "Tom"];
 
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
/* output
Harry
Ron
Hermione
Tom
*/

//FOR OF LOOP
let myArray = ["Harry", "Ron", "Hermione", "Tom"];
 
for(const arrayItem of myArray) {
    console.log(arrayItem)
}
 
/* output
Harry
Ron
Hermione
Tom
*/


/*__________________________________________________________________________________________________________________________________________________________________________*/
//FUNCTION
function greeting() {
    console.log("Good Morning!")
}
 
greeting();
 function greeting(name, language) {
    if(language === "English") {
        console.log("Good Morning " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour " + name + "!");
    } else {
        console.log("Selamat Pagi " + name + "!");
    }
}
 
greeting("Harry", "French"); 
/* output
Bonjour Harry!
*/

function multiply(a, b) {
    return a * b;
}
let result = multiply(10, 2)
console.log(result)
/* output
20
*/


/*__________________________________________________________________________________________________________________________________________________________________________*/
//VARIABLE SCOPE
 // global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local varible, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

 function multiply(num) {
    total = num * num;
    return total;
}
 
let total = 9;
let number  = multiply(20);
 
console.log(total)
 
/* output
400
*/