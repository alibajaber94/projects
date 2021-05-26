// $('#Roman').on({
//   keydown: function (e) {
//     if (e.which === 32) return false;
//   },
//   change: function () {
//     this.value = this.value.replace(/\s/g, '');
//   },
// });

/*
    
function AvoidSpace(event) {
  let k = event ? event.which : event.keyCode;
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

/*  
onkeyup=" var start = this.selectionStart;
          var end = this.selectionEnd;
          this.value = this.value.toUpperCase();
          this.setSelectionRange(start, end);"
*/
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

/*
var $count2 = document.getElementById('count'),
  $textArea2 = document.getElementById('textArea'),
  $textAreaVal = $textArea2.innerHTML.length,
  $maxLength2 = textArea.getAttribute('maxLength');

$textArea2.oninput = function () {
  $count2.innerHTML = $maxLength2 - this.value.length;
  if ($count2.innerHTML == 0) {
    $count2.classList.add('zero');
  } else {
    $count2.classList.remove('zero');
  }
};

*/
