
//const cipher = {

//hay un input
var input = document.getElementById('originalInput');
var toAscii = [];
//pasalo a ascii
for(let i = 0;
  i < input.length;
  i++){
  toAscii.push(input.charCodeAt(i));
}
//definir variables
var result = [];
var encodes = true;
var offset = 3
var cipherResult = [];
//si cifras encode o si descifras decode
if(encodes = true){
for(let i = 0;
  i < toAscii.length;
  i++)
    { character = toAscii[i]
      cipherChar = (((character - 65 + offset) % 26) + 65);
      cipherResult.push(cipherChar)
    }
    } else {
      for(let i = 0;
        i < toAscii.length;
        i++)
          { character = toAscii[i]
            cipherChar = (((character - 65 - offset) % 26) + 65);
            cipherResult.push(cipherChar)
          }
    }


//pasalo a unicode
//var output = String.fromCharCode(cipherResult);
var output = String.fromCharCode.apply(null, cipherResult)
//prueba
console.log(toAscii);
console.log(cipherResult);
console.log(output);
//};


//export default cipher;
