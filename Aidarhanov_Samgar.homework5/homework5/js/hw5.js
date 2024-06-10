/* hw5.js */
//note: I moved the script tag to the bottom so that the document loads first

//task 1
/* added inline minlength attribute for pwd1 input
//added pwd2Hint inline validation onkeyup for check()
*/
var pwd1 = document.getElementById("pwd1");
var pwd2 = document.getElementById("pwd2");
var pwd2Hint = document.getElementById("pwd2Hint");


function check() {
    if (pwd1.value != pwd2.value) {
        pwd2Hint.style.display = "inline";
    } else {
        // input is valid -- reset the error message
        pwd2Hint.style.display = "none";
    }
}

//task 2
/* assinged inline onkeyup to countdown
*/
var bio = document.getElementById("bio");
var counter = 140
var charLeft = document.getElementById('charsLeft');

function countdown(event){
    if(event.key == "Backspace"){
        counter+= 1;
        charLeft.innerHTML = counter;
        console.log(counter);
        if(counter>=140){
            counter+=0;
            counter = 140;
        }
    }
    else if(event.key && counter<=0){
        counter+=0; 
    }
    else if (bio.value == ''){
        counter = 140;
    }
    else{
    counter+= -1;
    console.log(counter);
    }
    charLeft.innerHTML = counter;
}

//task 3
/* I'm going to use the display none on some of my code
 */


var secondChoice = document.getElementById("select2Div");
var opt_fr = document.getElementById('fire');
var opt_wtr = document.getElementById('water');
var opt_earth = document.getElementById('earth');

function selectedfunct(){
    if(opt_fr.selected){
        document.getElementById('charmander').style.display = "inline";
        document.getElementById('squirtle').style.display = "none";
        document.getElementById('snivy').style.display = "none";
    }
    else if(opt_wtr.selected){
        document.getElementById('charmander').style.display = "none";
        document.getElementById('squirtle').style.display = "inline";
        document.getElementById('snivy').style.display = "none";
    }
    else if(opt_earth.selected){
        document.getElementById('charmander').style.display = "none";
        document.getElementById('squirtle').style.display = "none";
        document.getElementById('snivy').style.display = "inline";
    }
}

//task 4
function reveal(){
    document.getElementById('hiddenTextArea').style.display = "none"
    if(document.getElementById('checkId').checked){
        document.getElementById('hiddenTextArea').style.display = "inline"
    }
}

//task 5
var phone = document.getElementById('phone');
function reformat(){
    if (phone.value !== ''){
        //the substr method returns substrings with the starting index and the length after
        var reformatStr = "(" + phone.value.substr(0,3) + ") " + phone.value.substr(3,3) + "-"+phone.value.substr(6,4)
        phone.value = reformatStr
    }
}

//task 6
var email = document.getElementById('email')
function finalCheck(event){
    if (phone.value == '' && email.value == ''){
        alert("you have to fill out your phone number or your email");
        event.preventDefault();
    }
}