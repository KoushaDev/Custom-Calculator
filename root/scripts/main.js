/***----CALCULATOR----***/

// VARIABLES
var btns = document.querySelectorAll('.btn');
var btnsLength = btns.length;
var clear = document.getElementById('clear');
var equals = document.getElementById('equals');
var screen = document.getElementById('screen');
let input = '';
let output = '';
let answer = '';


// EVENT LISTENERS FOR BTNS
for (i = 0; i < btnsLength; i += 1) {
  btns[i].addEventListener('click', function() {
    if (this.value === '/') {
      input += this.value;
      output ='÷';
      screen.textContent = output;
      output = '';
    } else if (this.value === '*') {
        input += this.value;
        output = 'x';
        screen.textContent = output;
        output = '';
    } else if (this.value === '-') {
        input += this.value;
        output = '-';
        screen.textContent = output;
        output = '';
    } else if (this.value === '+') {
        input += this.value;
        output = '+';
        screen.textContent = output;
        output = '';
    } else {
        input += this.value;
        output += this.value;
        screen.textContent = output;
    }
    sText();
  });
}


// CLEAR BTN
clear.addEventListener('click', function() {
  input = '';
  output = '';
  screen.textContent = "";
  sText();
});


// EQUALS BTN
equals.addEventListener('click', function() {
  answer = eval(input);
  screen.textContent = answer;
  input = answer;
  sText();
});


// REDUCE SCREEN FONT SIZE WHEN 10 OR MORE CHARACTERS
function sText() {
  let sLength = screen.textContent.length;
  console.log(sLength);
  
  if (sLength >= 16) {
    screen.classList.add('fontSm');
    screen.classList.remove('fontLrg');
    screen.classList.remove('fontMed');
  } else if ((sLength > 9) && (sLength < 16)) {
    screen.classList.add('fontMed');
    screen.classList.remove('fontLrg');
    screen.classList.remove('fontSm');
  } else if (sLength < 10 ) {
    screen.classList.add('fontLrg');
    screen.classList.remove('fontMed');
    screen.classList.remove('fontSm');
  } 
}