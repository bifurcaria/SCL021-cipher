  // const cipher = {
  // ...
  // };

//hay un input
var input = 'HOLA';
var toAscii = [];
//pasalo a ascii
for(let i = 0;
  i < input.length;
  i++){
  toAscii.push(input.charCodeAt(i));
}
//definir variables
var result = [];
var fromText = true;
//si cifras encode o si descifras decode
if(fromText = true){
for(let i = 0;
  i < result.length;
  i++)
    {let cipherResult = [(i + offset)%26];
    }
    } else
for(let i = 0;
  i < result.length;
  i++){
  var cipherResult = [(i - offset)%26];}
//pasalo a unicode
var output = String.fromCharCode(cipherResult);
//prueba
console.log(toAscii);
console.log(cipherResult);
console.log(output);

//export default cipher;
