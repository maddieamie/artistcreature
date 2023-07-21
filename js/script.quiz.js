

let dogScore = 0;
let catScore = 0;
let wolfScore = 0;
let lionScore = 0;
let seaScore = 0;
let foxScore = 0;
let horseScore = 0;
let penguinScore = 0;
let pandaScore = 0;
let pinkScore = 0;

//calculation selectors
let q1 = document.getElementsByName('question1');
let q2 = document.getElementsByName('question2');
let q3 = document.getElementsByName('question3');
let q4 = document.getElementsByName('question4');
let q5 = document.getElementsByName('question5');
let q6 = document.getElementsByName('question6');
let q7 = document.getElementsByName('question7');
let q8 = document.getElementsByName('question8');
let q9 = document.getElementsByName('question9');
let q10 = document.getElementsByName('question10');

//storage selectors 
let q1Selected = document.querySelector('input[name="question1"]:checked');
let q2Selected = document.querySelector('input[name="question2"]:checked');
let q3Selected = document.querySelector('input[name="question3"]:checked');
let q4Selected = document.querySelector('input[name="question4"]:checked');
let q5Selected = document.querySelector('input[name="question5"]:checked');
let q6Selected = document.querySelector('input[name="question6"]:checked');
let q7Selected = document.querySelector('input[name="question7"]:checked');
let q8Selected = document.querySelector('input[name="question8"]:checked');
let q9Selected = document.querySelector('input[name="question9"]:checked');
let q10Selected = document.querySelector('input[name="question10"]:checked');

// Check if the localStorage object exists
 if(localStorage) {


    // Store data
    localStorage.setItem('question1', q1Selected.value);
    localStorage.setItem('question2', q2Selected.value);
    localStorage.setItem('question3', q3Selected.value);
   localStorage.setItem('question4', q4Selected.value);
   localStorage.setItem('question5', q5Selected.value);
   localStorage.setItem('question6', q6Selected.value);
   localStorage.setItem('question7', q7Selected.value);
   localStorage.setItem('question8', q8Selected.value);
   localStorage.setItem('question9', q9Selected.value);
   localStorage.setItem('question10', q10Selected.value);
    
    // Retrieve data
    alert("Hi, " + localStorage.getItem('question1'));
   localStorage.getItem('question2');
  localStorage.getItem('question3');
  localStorage.getItem('question4');
  localStorage.getItem('question5');
  localStorage.getItem('question6');
  localStorage.getItem('question7');
  localStorage.getItem('question8');
  localStorage.getItem('question9');
  localStorage.getItem('question10');
} 

else {
    alert("Sorry, your browser do not support local storage.");
} 

//NEW CONSTRUCTOR OBJECT

function StorageObj() {
    this.ans1 = "";
    this.ans2 = "";
    this.ans3 = "";
  this.ans4 = "";
  this.ans5 = "";
  this.ans6 = "";
  this.ans7 = "";
  this.ans8 = "";
  this.ans9 = "";
  this.ans10 = "";
    
}
var animalAnswers = new StorageObj();

let addInputToObj = () =>{

								for (var i = 0; i < q1.length; i++) {
                if (q1[i].checked){
                animalAnswers.ans1 = q1[i].value;
                }
                    }
                    for (var i = 0; i < q2.length; i++) {
                if (q2[i].checked){
                animalAnswers.ans2 = q2[i].value;
                }
                    }
                    for (var i = 0; i < q3.length; i++) {
                if (q3[i].checked){
                animalAnswers.ans3 = q3[i].value;
                }
                    }
  for (var i = 0; i < q4.length; i++) {
                if (q4[i].checked){
                animalAnswers.ans4 = q4[i].value;
                }
                    }
  for (var i = 0; i < q5.length; i++) {
                if (q5[i].checked){
                animalAnswers.ans5 = q5[i].value;
                }
                    }
  
  for (var i = 0; i < q6.length; i++) {
                if (q6[i].checked){
                animalAnswers.ans6 = q6[i].value;
                }
                    }
  for (var i = 0; i < q7.length; i++) {
                if (q7[i].checked){
                animalAnswers.ans7 = q7[i].value;
                }
                    }
  for (var i = 0; i < q8.length; i++) {
                if (q8[i].checked){
                animalAnswers.ans8 = q8[i].value;
                }
                    }
  for (var i = 0; i < q9.length; i++) {
                if (q9[i].checked){
                animalAnswers.ans9 = q9[i].value;
                }
                    }
  for (var i = 0; i < q10.length; i++) {
                if (q10[i].checked){
                animalAnswers.ans10 = q10[i].value;
                }
                    }
  
                    console.log(animalAnswers);
                    
                    }


let addScores = () => { 
let gimme = Object.values(animalAnswers);
console.log(gimme);
for(var i= 0; i < 10; i++) {
 if (gimme[i] === "1") {
 dogScore++;
 }
 else if (gimme[i] === "2") {
 catScore++;
 }
 else if (gimme[i] === "3") {
 wolfScore++;
 }
  else if (gimme[i] === "4") {
 lionScore++;
 }
  else if (gimme[i] === "5") {
 seaScore++;
 }
  else if (gimme[i] === "6") {
 foxScore++;
 }
  else if (gimme[i] === "7") {
 horseScore++;
 }
  else if (gimme[i] === "8") {
 penguinScore++;
 }
  else if (gimme[i] === "9") {
 pandaScore++;
 }
  else if (gimme[i] === "10") {
 pinkScore++;
 }
 else {
 console.log('nothing')
 }
 
 console.log("d:" + dogScore);
 console.log("c:" + catScore);
 console.log("w:" + wolfScore);
 
 }
}

let showQuizResults = () => {

let total = dogScore + catScore + wolfScore + lionScore + seaScore + foxScore + horseScore + penguinScore + pandaScore + pinkScore;

if (total >= 10) {

   if (dogScore >=3) {
   var dog = document.getElementById('dogD');
   dog.style.display = 'block';
   }
   else if (wolfScore >=3) {
   var wolf = document.getElementById('wolfD');
   wolf.style.display = 'block';
   }
   else if (catScore >=3) {
   var cat = document.getElementById('catD');
   cat.style.display = 'block';
   }
  else if (lionScore >=3) {
   var lion = document.getElementById('lionD');
   lion.style.display = 'block';
   }
  else if (seaScore >=3) {
   var sea = document.getElementById('seaD');
   sea.style.display = 'block';
   }
  else if (foxScore >=3) {
   var fox = document.getElementById('foxD');
   fox.style.display = 'block';
   }
  else if (horseScore >=3) {
   var horse = document.getElementById('horseD');
   horse.style.display = 'block';
   }
  else if (penguinScore >=3) {
   var pen = document.getElementById('penguinD');
   pen.style.display = 'block';
   }
  else if (pandaScore >=3) {
   var panda = document.getElementById('pandaD');
   panda.style.display = 'block';
   }
  else if (pinkScore >=3) {
   var pink = document.getElementById('pinkD');
   pink.style.display = 'block';
   }
  
   else if (catScore === dogScore) {
   var dog = document.getElementById('dogD');
   dog.style.display = 'block';
   }
  
   else if (lionScore === seaScore || foxScore === seaScore || lionScore === foxScore ) {
   var fox = document.getElementById('foxD');
   fox.style.display = 'block';
   }
  
  else if (horseScore === penguinScore || pandaScore === horseScore || pandaScore === penguinScore ) {
   var panda = document.getElementById('pandaD');
   panda.style.display = 'block';
   }
  
   else if (wolfScore === pinkScore) {
   var wolf = document.getElementById('wolfD');
   wolf.style.display = 'block';
   }
  
  else if ( dogScore === catScore === wolfScore === lionScore === seaScore === foxScore === horseScore === penguinScore === pandaScore === pinkScore)
  {
  var pink = document.getElementById('pinkD');
   pink.style.display = 'block';  
  }
   else {
   var cat = document.getElementById('catD');
   cat.style.display = 'block'; 
   }
}

var resetDiv = document.getElementById('resetbutton');
resetDiv.style.display = 'block';

}

let clearResults = () => {
//reset button

var reset = document.getElementById('resetbutton');
reset.style.display = 'none';

dogScore = 0;
catScore = 0;
wolfScore = 0;
lionScore = 0;
seaScore = 0;
foxScore = 0;
horseScore = 0;
penguinScore = 0;
pandaScore = 0;
pinkScore = 0;

animalAnswers = {};

var dog = document.getElementById('dogD');
var wolf = document.getElementById('wolfD');
var cat = document.getElementById('catD');
var lion = document.getElementById('lionD');
var sea = document.getElementById('seaD');
var fox = document.getElementById('foxD');
var horse = document.getElementById('horseD');
var penguin = document.getElementById('penguinD');
var panda = document.getElementById('pandaD');
var pink = document.getElementById('pinkD');

cat.style.display = 'none';
dog.style.display = 'none';
wolf.style.display = 'none';
lion.style.display = 'none';
sea.style.display = 'none';
fox.style.display = 'none';
horse.style.display = 'none';
penguin.style.display = 'none';
panda.style.display = 'none';
pink.style.display = 'none';

var inputs = document.getElementsByTagName('input');
for(var i= 0; inputs.length; i++)
  inputs[i].checked = false;

console.log(dogScore);
console.log(animalAnswers);
}

                    
let submitbutton = document.getElementById('submitQ');
submitbutton.addEventListener('click', addInputToObj);
submitbutton.addEventListener('click', addScores);
submitbutton.addEventListener('click', showQuizResults);

let resetbutton = document.getElementById('reset');
resetbutton.addEventListener('click', clearResults);

          

