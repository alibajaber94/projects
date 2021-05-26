//
let div = document.getElementById('mainContainer'),
  keyGen = document.querySelector('#mainContainer #keyGen'),
  inputGen,
  serialNum = '',
  randomNum,
  serialList = '0M';
//   serialList = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
// document.querySelector('div:nth-of-type(5) input[i]').disabled = true;
let index = 0;

function gen() {
  //
  serialNum = '';
  //
  for (let x = 0; x <= serialList.length - 1; x++) {
    randomNum = Math.floor(Math.random() * serialList.length);

    serialNum += serialList[randomNum];
  }
  console.log(serialNum);
  //
  /*  for (let i = 0; i < 4; i++) { */
  //
  //
  /* serialNum += '-';
    //
  } */
  inputGen = document.createElement('input');
  inputGen.value = serialNum;
  div.appendChild(inputGen);
  //   serialNum = '';
  document.querySelectorAll('#mainContainer input')[index].disabled = true;
  document
    .querySelectorAll('#mainContainer input')
    [index].setAttribute('class', 'keyGenNum');
  index++;
  //
}
//
keyGen.onclick = gen;

let shuffle = document.getElementsByClassName('shuffle');
let aa = 'connection';
