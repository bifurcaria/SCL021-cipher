import cipher from './cipher.js';

document.getElementById("cifrar").onclick = function(){
    document.getElementById("output").value = (cipher.encode(parseInt(document.getElementById("offset").value), document.getElementById("input").value))
};

document.getElementById("descifrar").onclick = function(){
    document.getElementById("output").value = (cipher.decode(parseInt(document.getElementById("offset").value), document.getElementById("input").value))
};