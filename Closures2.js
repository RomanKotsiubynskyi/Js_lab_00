//Closures var 2
let hit11 = 10;
let hit22 = 20;
let hlth1 = 100;

let hlev2 = 'Health Lavel';
function health2(aa, bb) {
    function HealthLev() {
        d = hlth1 - (aa + bb);

        alert('Sim-Salabim  !!!');
        alert(hlev2 + d);
    }
    return HealthLev;
}
var UnitHealth = hlth1;
var UnitHealth1 = health2(hit11, hit22);
var UnitHealth2 = health2(hit22, hit22);

alert(hlev2 + UnitHealth);
UnitHealth1();
console.log('var UnitHealth1 = ' + d);
UnitHealth2();
console.log('var UnitHealth2 = ' + d);


//numberDuplicator
function numberSqr(a) {
    let num = a;
    function checkNumber() {
        console.log(num);
    }
    num = num * num;
    return checkNumber;
}

var number1 = numberSqr(4);
var number2 = numberSqr(25);
number1();
number2(); // 2
console.log(num);


//antialiasing
function aa(a) {
   let num = a;
    function smooth() {
        console.log(num);
    }

    if (num > 9) {
        num--;
    } else {
        num++;
    }
    return smooth;
}

var number1 = aa(10);
var number2 = aa(3);
var number3 = aa(15);
number1();
number2();
number3();
console.log(num);



// Closure with anonymous static function
// poison hit
function poison() {
    let health = 100;
    alert('HEALTH' + ' ' + health);
    return function () {
        health -= 2;
        return health;
    }

}
let healthDecrease = poison(); //scope1
alert("Mu-Ha-Ha-Ha!");
alert('HEALTH' + ' ' + healthDecrease());
alert('HEALTH' + ' ' + healthDecrease());
alert('HEALTH' + ' ' + healthDecrease());

let healthDecrease2 = poison(); //scope2
alert('HEALTH' + ' ' + healthDecrease2());

