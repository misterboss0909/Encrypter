let output1 = document.getElementById('ti2');
let input1 = document.getElementById('ti1');
let output2 = document.getElementById('ti4');
let input2 = document.getElementById('ti3');

function encrypt() {
  //text to binary

  let red = [];
  output1.value = '';
  for (let i = 0; i < input1.value.length; i++) {
    output1.value += input1.value[i].charCodeAt(0).toString(2) + ' ';
  }

  red = output1.value;

  //convert binary to text
  function binaryAgent(str) {
    let newBin = str.split(' ');

    let binCode = [];

    for (let i = 0; i < newBin.length - 1; i++) {
      newBin[i] = addBinary(newBin[i], 11);

      binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join('');
  }

  input1.placeholder = 'Write text to encrypt';
  return (output1.value = binaryAgent(red));
}

function addText() {
  input2.value = output1.value;
}

function decrypt() {
  //text to binary

  let red = [];
  output2.value = '';
  for (let i = 0; i < input2.value.length; i++) {
    output2.value += input2.value[i].charCodeAt(0).toString(2) + ' ';
  }

  red = output2.value;

  //convert binary to text
  function binaryAgent(str) {
    let newBin = str.split(' ');

    let binCode = [];

    for (let i = 0; i < newBin.length - 1; i++) {
      newBin[i] = substractBinary(newBin[i], 11);

      binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join('');
  }

  output2.value = binaryAgent(red);
}

//add Two binary numbers
function addBinary(a, b) {
  var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
  return dec.toString(2);
}

//substract Two binary numbers
function substractBinary(a, b) {
  var dec = Number(parseInt(a, 2)) - Number(parseInt(b, 2));
  return dec.toString(2);
}

function restart() {
  output1.value = '';
  output2.value = '';
  input1.value = '';
  input2.value = '';
}
