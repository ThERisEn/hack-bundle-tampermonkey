alert("YOU ARE USING PROTEUS ALPHA BY SYNCINUS, ENJOY!");

function GET_DATA() {
var HIstory = history;
alert(HIstory);
}
GET_DATA();

function ShowAnwser() {

function addbits(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        var element = parseInt(arr[i]);
        total += element;
    }
    return total;
}

function subbits(arr) {
    var total = parseInt(arr[0]);
    for(var i = 1; i < arr.length; i++) {
        var element = parseInt(arr[i]);
        total -= element;
    }
    return total;
}

function multbits(arr) {
    var total = parseInt(arr[0]);
    for (var i = 1; i < arr.length; i++) {
         var element = parseInt(arr[i]);
         total = total * element;
    }
    return total;
}

function divbits(arr) {
    var total = parseInt(arr[0]);
    for (var i = 1; i < arr.length; i++) {
         var element = parseInt(arr[i]);
         total = total / element;
    }
    return total;
}

function algebraAddition(a, b) {
    return Math.abs(a - b);
}

function algebraMultiplication(a, b) {
    return Math.floor(b / a);
}

var isAlgebra = false;
var nums = document.getElementsByClassName('questions-text-alignment whiteTextWithShadow question-size-v4')["0"].innerText;

//var nums = numstst.replace(/=/g, "");
var algebraNums = nums.split('=');
var numCount = algebraNums[1].replace(/[^0-9]/g,"").length;

if (numCount > 0) {
    isAlgebra = true;
}

if (isAlgebra == true) {

var startInt = parseInt(algebraNums[0]);
var endInt = parseInt(algebraNums[1]);


if (algebraNums[0].indexOf('+') > -1) {
var algebraadditionanwser = algebraAddition(startInt, endInt);
      
document.getElementsByClassName("questions-input-adjustment           questions-input-width-v3")["0"].value = algebraadditionanwser;
}

if (algebraNums[0].indexOf('×') > -1) {
var algebramultiplicationanwser = algebraMultiplication(startInt, endInt);

document.getElementsByClassName("questions-input-adjustment           questions-input-width-v3")["0"].value = algebramultiplicationanwser;
}

} else if (isAlgebra == false) {

if (nums.includes('+')) {

var add = nums.split('+');

var anwseraddition = addbits(add);
 
document.getElementsByClassName("questions-input-adjustment questions-input-width-v3")["0"].value = anwseraddition;
}

if (nums.includes('-')) {
var sub = nums.split('-');

var anwsersubtraction = subbits(sub);
 
document.getElementsByClassName("questions-input-adjustment questions-input-width-v3")["0"].value = anwsersubtraction;
}

if (nums.includes('×')) {

var mult = nums.split('×');

var anwsermultiplication = multbits(mult);
 
document.getElementsByClassName("questions-input-adjustment questions-input-width-v3")["0"].value = anwsermultiplication;
}

if (nums.includes('÷')) {

var div = nums.split('÷');
var anwserdivision = divbits(div);

document.getElementsByClassName("questions-input-adjustment questions-input-width-v3")["0"].value = anwserdivision;
}
}

function split(num, amount) {
    return num / amount;
}

if (nums.includes("of")) {

var wordsplitfraction = nums.split("of");
var anwserwordfraction = 0;

if (wordsplitfraction[0].indexOf('Half') > -1) {
   anwserwordfraction = split(parseInt(wordsplitfraction[1]), 2);
}

if (nums.includes("How many")) {
    var substring = nums.substr(0, 9);
    var howmany = substring.split("in");
        
    var arg1 = 0;
    var arg2 = 0;
    
    if (howmany[0].includes("seconds")) {
         arg1 = 1; //Seconds
    }
    if (howmany[0].includes("minutes")) {
         arg1 = 60; //Minutes
    }
    if (howmany[0].includes("hours")) {
         arg1 = 3600; //Hours
    }
    
    if (howmany[1].includes("seconds")) {
         arg2 = 1; //Seconds
    }
    if (howmany[1].includes("minutes")) {
         arg2 = 60; //Minutes
    }
    if (howmany[1].includes("hours")) {
         arg2 = 3600; //Hours
    }    
    
    var amountOfUnit2 = parseInt(howmany[1]);
    arg2 = arg2 * amountOfUnit2;
    
    
    
    
    document.getElementsByClassName("questions-input-adjustment questions-         input-width-v3")["0"].value = anwserhowmany;   
}

document.getElementsByClassName("questions-input-adjustment questions-input-width-v3")["0"].value = anwserwordfraction;
}



/*
var nums = document.getElementsByClassName('questions-text-alignment whiteTextWithShadow question-size-v4')["0"].innerText;
 var add = nums.split('+' && '=');
 var equasion = add[0];
 
 function addbits(s){
    var total= 0, s= s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while(s.length){
        total+= parseFloat(s.shift());
    }
    return total;
}
 var awnser = addbits(equasion)

document.getElementById('dashow').innerText = awnser;
 document.getElementsByClassName("questions-input-adjustment questions-input-width-v3")["0"].value = awnser;
 */
}

 window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "192") {
       ShowAnwser();
    }
}
