
let text = document.getElementById('affirmme');
let bgSquare = document.getElementById('shiny');
let clickme = document.getElementById('clickme');
let colorchangebutton = document.getElementById('colorchanger');
let fontchangebutton = document.getElementById('fontchanger');
let savebutton = document.getElementById('save');


let setColor = () => {
let getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

bgSquare.style.backgroundColor = getRandomColor(); }

let setFont = () => {

let num = Math.floor(Math.random() * 6);

switch (num) {
case 0:
text.style.fontFamily = 'Arial';
break;
case 1:
text.style.fontFamily = 'Times';
break;
case 2:
text.style.fontFamily = 'Courier';
break;
case 3:
text.style.fontFamily = 'cursive';
break;
case 4:
text.style.fontFamily = 'fantasy';
break;
case 5:
text.style.fontFamily = 'Georgia';
break;
default:
text.style.fontFamily = 'Helvetica';

}


}

let getAffirmed = () => {

let num = Math.floor(Math.random() * 26);

switch (num) {
case 0: 
text.innerHTML = 'Remember to be inspired by everything you are.'
break;
case 1:
text.innerHTML = 'You brighten up the room, so do not tone down your light.'
break;
case 2:
text.innerHTML = 'You will get through this with a new dawn.'
break;
case 3: 
text.innerHTML = 'Keep you head held high to help you see what lies before you.'
break;
case 4:
text.innerHTML = 'You are enough and you have enough time.'
break;
case 5:
text.innerHTML = 'You have gotten through every bad day, this one will be no different!'
break;
case 6:
text.innerHTML = 'You have the insides of stars so act like you have no limit to what you can become.'
break;
case 7:
text.innerHTML = 'Failure is the failure to try again.'
break;
case 8:
text.innerHTML = 'You are your own worst critic, or at the very least, someone who may need an outsider opinion of your value.'
break;
case 9:
text.innerHTML = 'You are a BAMF.'
break;
case 10: 
text.innerHTML = 'Sometimes being not dead is good enough for the day.'
break;
case 11:
text.innerHTML = 'Drink water and try to stretch, dude.'
break;
case 12:
text.innerHTML = 'Chase your goals whether or not people are watching, since they may end up watching you soar.'
break;
case 13:
text.innerHTML = 'Keep all major decisions until after you have eaten and slept.'
break;
case 14:
text.innerHTML = 'You are beautiful in more ways than one, so do not focus on your faults.'
break;
case 15:
text.innerHTML = 'Surround yourself with others who bring out the sunlight in you.'
break;
case 16:
text.innerHTML = 'Lavender only blooms one season a year. Are you trying to say you are better than lavender? Just do your best to bloom when it makes sense.'
break;
case 17:
text.innerHTML = 'Literally every person you admire has had days where all they have done is eat chips and watch YouTube.'
break;
case 18:
text.innerHTML = 'Even two trees in the same forest may have different obstacles. Stay connected to your fellows.'
break;
case 19:
text.innerHTML = 'You are the only one who decides if what you are is good enough for the world. Your right to exist is unchangeable.'
break;
case 20:
text.innerHTML = 'Even garbage can give another their life purpose. Do not spend too much time worrying if you feel like garbage.'
case 21:
text.innerHTML = 'Make your own fluffle of cute buns.'
break;
case 22:
text.innerHTML = 'Your identity, form, gender, shape, state, and being are valid. Let no one tell you otherwise.'
break;
case 23:
text.innerHTML = 'Remember the very wise cannot see all ends. Maybe you can see something that others cannot.'
break;
case 24:
text.innerHTML = 'No one is truly alone.'
break;
case 25: 
text.innerHTML = 'Be brave enough to let yourself be who you are.'
break;
default:
text.innerHTML = 'You are more than you know.'
}

setColor();
setFont();

var bgColor = document.getElementById('shiny');
bgColor.onchange = function() {
    document.body.style.backgroundColor = this.value;
    localStorage.setItem('bgColor', this.value);
};
bgColor.value = localStorage.getItem('bgColor');
bgColor.onchange();

var fontStyle = document.getElementById('affirmme');
fontStyle.onchange = function() {
    document.body.style.fontFamily = this.value;
    localStorage.setItem('fontStyle', this.value);
};
fontStyle.value = localStorage.getItem('fontStyle');
fontStyle.onchange();

var affirmText = document.querySelector('affirmme');
affirmText.onchange = function () {
    document.body.style.innerHTML = this.value;
    localStorage.setItem('affirmtext', this.value);
};
affirmText.value = localStorage.getItem('affirmtext');
affirmText.onchange();

}


clickme.addEventListener('click', getAffirmed);
colorchangebutton.addEventListener('click', setColor);
fontchangebutton.addEventListener('click', setFont);
