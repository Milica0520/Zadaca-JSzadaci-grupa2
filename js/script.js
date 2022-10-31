var array = [5, 25, 8, 3, 56, 47, 73, 13, 99, 458, 75, 63, 88, 41, 42]


function readArray() {
    var p1 = document.getElementById("array");//ovaj var div1 mi pravimo
    p1.innerText = "Pocetni niz je: ";//
    for (var i = 0; i < array.length; i++) {
        p1.innerHTML += array[i] + ', ';

    }

}
readArray();



//Zadatak a,ispisati parne brojeve unutar niza


function evenNumbers() {
    var p2 = document.getElementById("evenNumbers");
    p2.innerHTML = "Parni brojevi su: ";
    for (var i = 0; i < array.length; i++) {
        var even = array[i];
        if (even % 2 == 0) {
            p2.innerHTML += even + ', ';
        }
    }
}
evenNumbers();

//Zadatak d,ispisati brojeve sa neparnim indeksima

function oddIndex() {
    var p3 = document.getElementById("odd-index");
    p3.innerHTML = "Brojevi sa neparnim indeksima su: ";
    for (var i = 0; i < array.length; i++) {
        if (i % 2 != 0) {// ! znaci ne, a != znaci nije jednako kao 
            p3.innerHTML += array[i] + ', ';

        }
    }

}
oddIndex();


//Zadatak b,ispisati sume parnih i sume neparnih brojeva

function sumEvenNo() {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {

        var x = array[i];
        if (x % 2 == 0) {
            sum = sum + array[i];

        }
    }
    var p6 = document.getElementById("sum-two");
    p6.innerText = "Suma parnih brojeva je: " + sum;
}
sumEvenNo();


function sumOddNo() {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {

        var x = array[i];
        if (x % 2 != 0) {
            sum = sum + array[i];

        }
    }
    var p7 = document.getElementById("sum-odd");
    p7.innerText = "Suma neparnih brojeva je: " + sum;
}
sumOddNo();

function sumEvenOddNo() {
    var sum = 0;
    var sum1 = 0;
    for (var i = 0; i < array.length; i++) {

        var x = array[i];
        if (x % 2 == 0) {
            sum = sum + array[i];

        }
        else{
            sum1+= array[i];
        }
       
    }
    var p6 = document.getElementById("sum-two");
    p6.innerText = "Suma parnih brojeva je: " + sum;

   
    var p8 = document.getElementById("sum-three");
    p8.innerText = "Suma neparnih brojeva je: " + sum1;

}
sumEvenOddNo();



