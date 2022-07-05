import cipher from './cipher.js';

document.getElementById("cifrar").onclick = function(){
    document.getElementById("output").value = (cipher.encode(3, document.getElementById("input").value))
};

document.getElementById("descifrar").onclick = function(){
    document.getElementById("output").value = (cipher.decode(3, document.getElementById("input").value))
};