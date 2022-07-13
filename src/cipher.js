const cipher = {
  encode: function(offset, string) {
    var output = [];
    var result;
    if (typeof(offset) != 'number' || typeof(string) != "string") {
      throw new TypeError('Wrong argument types');
    }
    for (let i = 0; i < string.length; i++) {
      //mayusculas
      if (90 >= string.charCodeAt(i) && string.charCodeAt(i) >= 65) {
        result = (string.charCodeAt(i) - 65 + offset) % 26;
        //verifica que result sea válido
        result = result >= 0 ? result : result + 26;
        output[i] = result + 65;
        //minusculas
      } else if (122 >= string.charCodeAt(i) && string.charCodeAt(i) >= 97) {
        result = (string.charCodeAt(i) - 97 + offset) % 26;
        //verifica que result sea válido
        result = result >= 0 ? result : result + 26;
        output[i] = result + 97;
        //devuelve el mismo caracter si no son letras
      } else {
        output[i] = string.charCodeAt(i);
      }
    }
    return String.fromCharCode.apply(this, output);
  },
  decode: function(offset, string) {
    //lo mismo pero con offset negativo
    return this.encode(-offset, string);
  }
}

export default cipher;

      /* var result: si 65 + offset > charCode, el valor entre paréntesis es negativo
      negativo no es válido: no indica posición de caracter en abecedario -entre 0 y 25-
      suma 26 para que, al sumar 65, devuelva ascii válido -entre 65 y 90-*/