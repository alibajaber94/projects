var num = -321,
  myOutput = document.querySelector('div:first-of-type p'),
  myDiv = document.getElementById('mainContainer');

// document.getElementById("output").innerHTML += num;

var strNum = num.toString();

for (var i = strNum.length - 1; i > -1; i--) {
  if (parseInt(strNum[i]) === NaN) {
    console.log('ok');
  }
  document.getElementById('output').innerHTML += strNum[i];
}

var isPalindrome = function (x) {
  var str_x = x.toString(),
    is_Palindrome = true;

  if (str_x.length % 2 != 0) {
    var mid = str_x.length / 2 - 1.5;
    console.log(mid);

    for (let y = 0; y <= mid; y++) {
      if (str_x[y] != str_x[str_x.length - 1 - y]) {
        is_Palindrome = false;
      } else {
        is_Palindrome = true;
      }
    }
  } else {
    for (let e = 0; e <= str_x.length / 2; e++) {
      if (str_x[e] != str_x[str_x.length - 1 - e]) {
        is_Palindrome = false;
      } else {
        is_Palindrome = true;
      }
    }
  }

  console.log(is_Palindrome);

  document.querySelector('div:nth-of-type(2) p').innerHTML = is_Palindrome + '';
};

isPalindrome(11211);

console.log('#'.repeat(19));

var isPalindrome_2 = function (w) {
  if (w == 0) {
    console.log('true');
    return true;
  } else if (w < 0 || w % 10 == 0) {
    console.log('false');
    return false;
  }
  var temp = 0;
  var preX = w;
  while (w > temp) {
    var pop = w % 10;
    preX = w;
    w /= 10;

    temp = temp * 10 + pop;
  }
  if (w == temp || preX == temp) {
    console.log('true after while loop');
    return true;
  } else {
    console.log('false  after while loop');
    return false;
  }
};

isPalindrome_2(111);

// console.log(isPalindrome_2);

// var isPalindrome_3 = function( k ) {

//     if(k < 0 || (k % 10 == 0 && k != 0)) {
//         console.log(" #### false  after while loop");
//         return false;
//     }

//     var revertedNumber = 0;
//     while(k > revertedNumber) {
//         revertedNumber = revertedNumber * 10 + k % 10;
//         k /= 10;
//         console.log(revertedNumber + " #### " + k);

//     }

//     console.log( k == revertedNumber );
//     console.log( k == revertedNumber/10 );

//     return k == revertedNumber || k == revertedNumber/10;
// }

// isPalindrome_3(22822);

// Select Input Element
var inputEl = document.getElementById('Roman');

// Allow Roman Characters Only Without Space

// Roman To Integer Function

let romanToInt = function (s) {
  let romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let currentInt = romanToInt[s.charAt(i)];
    let nextInt = romanToInt[s.charAt(i + 1)];

    if (nextInt) {
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += nextInt - currentInt;
        i++;
      }
    } else {
      total += currentInt;
    }
  }
  document.querySelector('div:nth-of-type(3) p').innerHTML = total.toString();
  return total;
};

// Add Default Local Storage Class On Body
document.body.classList.add(localStorage.getItem('pageColor') || 'orange');

var el = document.querySelectorAll('ul li'),
  classesList = [];

for (let i = 0; i < el.length; i++) {
  //Get classes List
  classesList.push(el[i].getAttribute('data-color'));

  el[i].addEventListener(
    'click',
    function () {
      //Remove Or Clear All Classes
      document.body.classList.remove(...classesList);

      //Add Selected Class
      document.body.classList.add(this.getAttribute('data-color'));

      //Add Data To Local Storage
      localStorage.setItem('pageColor', this.getAttribute('data-color'));
    },
    false
  );
}

console.log('#'.repeat(19));

function capitalizeFirstLetter(words) {
  let splitter = words.split(' '),
    newWords = [];

  for (let i = 0; i < splitter.length; i++) {
    //
    newWords.push(splitter[i].charAt(0).toUpperCase() + splitter[i].slice(1));

    //
  }
  return newWords.join(' ');
}

function capitalizeWord(words) {
  return words.toUpperCase();
}

console.log(capitalizeFirstLetter('ali ahmed bajaber'));

console.log(capitalizeWord('ali ahmed bajaber'));

function AvoidSpace(event) {
  var k = event ? event.which : event.keyCode;
  if (
    k == 105 ||
    k == 118 ||
    k == 120 ||
    k == 108 ||
    k == 99 ||
    k == 100 ||
    k == 109 ||
    k == 73 ||
    k == 86 ||
    k == 88 ||
    k == 76 ||
    k == 67 ||
    k == 68 ||
    k == 77
  ) {
    console.log(k);
    return true;
  } else {
    console.log(k);
    return false;
  }
}

inputEl.onfocus = function () {
  //
  inputEl.removeAttribute('placeholder');
  //
};
inputEl.onblur = function () {
  //
  inputEl.setAttribute('placeholder', 'Enter Roman Number');
  //
};

function forceInputUppercase(e) {
  var start = e.target.selectionStart;
  var end = e.target.selectionEnd;
  e.target.value = e.target.value.toUpperCase();
  e.target.setSelectionRange(start, end);
}

inputEl.addEventListener('keyup', forceInputUppercase, false);

// textarea counter start
var count = document.getElementById('count'),
  textArea = document.getElementById('textArea'),
  maxLength = textArea.getAttribute('maxLength');

count.innerHTML = maxLength;

textArea.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  if (count.innerHTML == 0) {
    count.classList.add('zero');
  } else count.classList.remove('zero');
};
// textarea counter end

// placeholder var
let plcHold;

// placeHolderToggle function

function placeHolderToggle() {
  if (this.placeholder != '') {
    plcHold = this.getAttribute('placeholder');
    this.setAttribute('placeholder', '');
  } else {
    this.setAttribute('placeholder', plcHold);
  }
}

// placeholder onfocus

textArea.onfocus = placeHolderToggle;

// placeholder blur

textArea.onblur = placeHolderToggle;

// password
let password = document.getElementById('password'),
  eye = document.getElementById('eye');

// fa-eye-slash
eye.onclick = function () {
  if (password.getAttribute('type') == 'password') {
    password.setAttribute('type', 'text');
    eye.classList.add('fa-eye-slash');
  } else {
    password.setAttribute('type', 'password');
    eye.classList.remove('fa-eye-slash');
  }
};
//

password.onfocus = placeHolderToggle;
password.onblur = placeHolderToggle;

//

let t = 'Reverse Integer',
  firstH4 = document.querySelector('div:first-of-type h4'),
  type = 0;

// first litter
firstH4.textContent = t[type];

//
let typing = setInterval(function () {
  type = type + 1;
  firstH4.textContent += t[type];

  //
  if (type >= t.length - 1) {
    clearInterval(typing);
  }
}, 200);

//

let bodyColor = ['one', 'two', 'three', 'four'],
  randomClass = Math.floor(Math.random() * bodyColor.length);

document.body.classList.add(bodyColor[randomClass]);
//

let title = document.querySelector('div:nth-of-type(4) input'),
  description = document.querySelector('div:nth-of-type(4) textarea'),
  titleH2 = document.querySelector('div:nth-of-type(4) h2'),
  descriptionPara = document.querySelector('div:nth-of-type(4) p');

// title.oninput = function () {
//   titleH2.textContent = this.value;
// };
description.oninput = function () {
  descriptionPara.innerText = this.value;
};

function textLive(el, elLive) {
  el.oninput = function () {
    elLive.innerText = this.value;
  };
}

//
textLive(title, titleH2);
textLive(description, descriptionPara);
//
let clock = document.getElementById('clock');

function timing() {
  let now = new Date(),
    hr = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds();
  if (hr < 10) {
    hr = '0' + hr;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  clock.textContent = `${hr}:${min}:${sec}`;
}

window.onload = function () {
  setInterval(timing, 500);
};

let div_5 = document.querySelector('div:nth-of-type(5)'),
  keyGen = document.querySelector('div:nth-of-type(5) #keyGen'),
  inputGen,
  serialNum = '',
  randomNum,
  serialList = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
// document.querySelector('div:nth-of-type(5) input[i]').disabled = true;
let index = 0;

function gen() {
  //
  //
  for (let i = 0; i < 4; i++) {
    //
    for (let x = 0; x < 4; x++) {
      randomNum = Math.floor(Math.random() * serialList.length);

      serialNum += serialList[randomNum];
    }
    //
    serialNum += '-';
    //
  }
  inputGen = document.createElement('input');
  inputGen.value = serialNum.substring(0, serialNum.length - 1);
  div_5.appendChild(inputGen);
  serialNum = '';
  document.querySelectorAll('div:nth-of-type(5) input')[index].disabled = true;
  document
    .querySelectorAll('div:nth-of-type(5) input')
    [index].setAttribute('class', 'keyGenNum');
  // document.querySelectorAll('div:nth-of-type(5) input')[index].style.display =
  //   'block';
  index++;
}
//
keyGen.onclick = gen;
//
let timer = document.querySelector('p:nth-of-type(2)'),
  seconds = 13,
  mins,
  remSeconds,
  countDown = setInterval(function () {
    secPass();
  }, 1000);

function secPass() {
  mins = Math.floor(seconds / 60);
  remSeconds = seconds % 60;
  if (remSeconds < 10) {
    remSeconds = '0' + remSeconds;
  }
  if (mins < 01 && remSeconds < 10) {
    timer.style.color = 'red';
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  if (mins < 01 && remSeconds <= '00') {
    clearInterval(countDown);
  }
  timer.innerHTML = mins + ':' + remSeconds;
  seconds = seconds - 1;
}
/*

function forceKeyPressUppercase(e) {
  var charInput = e ? e.which : e.keyCode;
  if (charInput >= 97 && charInput <= 122) {
    // lowercase
    if (!e.ctrlKey && !e.metaKey && !e.altKey) {
      // no modifier key
      var newChar = charInput - 32;
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      e.target.value =
        e.target.value.substring(0, start) +
        String.fromCharCode(newChar) +
        e.target.value.substring(end);
      e.target.setSelectionRange(start + 1, start + 1);
      e.preventDefault();
    }
  }
}

inputEl.addEventListener('keypress', forceKeyPressUppercase, false);

*/

// ** FADE OUT FUNCTION **
function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.visibility = 'hidden';
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// ** FADE IN FUNCTION **
function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || 'inline-table';
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function MyFadeIn(el) {
  el.style.opacity = 0;
  el.style.visibility = 'visible';
  for (let i = el.style.opacity; i <= 1; i += 0.2) {
    el.style.opacity = i;
  }
}

// for (let i = 0; i < document.querySelectorAll('#mainContainer').length; i++) {
//   fadeOut(document.querySelectorAll('#mainContainer')[i]);
// }

// for (let i = 0; i < document.querySelectorAll('#mainContainer').length; i++) {
//   MyFadeIn(document.querySelectorAll('#mainContainer')[i]);
// }

/* Simple */
const myPromise = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve('ok');
  } else {
    reject(Error('bad'));
  }
}).then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);

/* Advanced */
const request = (URLRequest) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if ((this.readyState === 4) & (this.status === 200)) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error(this.statusText));
      }
    };
    myRequest.open('GET', URLRequest, true);
    myRequest.send();
  });
};

request('https://jsonplaceholder.typicode.com/todos/1').then(
  (result) => {
    console.log(result);
    let newElement = document.createElement('div'),
      elementText = document.createTextNode(JSON.stringify(result));
    newElement.appendChild(elementText);
    document.body.appendChild(newElement);
  },
  (error) => console.log(error)
);
