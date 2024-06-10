/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 11 odd Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = fibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 11 odd fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 11 odd Fibonacci numbers
  */
//0,1,1,2,3,5,8,13,21,34...

function fibonacciSum() {
    var n = 11;
    let sum = 1;
    let fibs = [0, 1];
    let i = 2;
    
    while (i <= n) {
        
        fibs[i] = fibs[i - 2] + fibs[i - 1]
        if (fibs[i] % 2 === 1) {
            sum += parseInt(fibs[i]);
            i++;
            
        }
        else {
            i++;
            n++;
        }
    }
    return sum;
}

