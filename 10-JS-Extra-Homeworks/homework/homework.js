// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (let key in objeto) {
    matriz.push([key,objeto[key]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var matriz = [];
  var letra;
  var cont = 0;
  var band = false;
  for (i=0; i<string.length; i++) {
     letra = string[i];
     for (j=0; j<string.length; j++) {
      if (letra === string[j])  {
        cont++;
      }
     }
     for (k=0; k<matriz.length; k++) {
      if (letra === matriz[k][0]) {
          band = true;
        }
      } 
     if (!band) {matriz.push([letra,cont]);}
     cont=0;
     band=false;
  }
 return Object.fromEntries(matriz);
 }


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var result = '';
  var otras ='';
  for (i=0; i<s.length; i++) {
    if (s[i]>='A' && s[i]<='Z') {
      result=result+s[i];
    }
    else {
      otras=otras+s[i];
    }
  }
  result=result+otras;
  return result;
}

function espejo(cadena) {
  //La función recibe una palabra y la devuelve de modo tal que se pueda leer de derecha a izquierda.
  var mirror='';
  for (j=cadena.length-1; j>=0; j--) {
    mirror = mirror + cadena[j];
    }
  return mirror;
}  

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var nuevoStr = '';
  var result = '';
  var palabra = '';
  var i=0;
  do {
    while (i<str.length && str[i] != ' ') {
     palabra = palabra+str[i];
     i=i+1;
     }
    str=str.substring(i+1,str.length);
    if (result === '') {
      result=result+espejo(palabra);
    }
    else {
      result=result+' '+ espejo(palabra);
    }
    palabra='';
    i=0;
  } while (str.length != 0);
  return result;
}  

function capicua(numero){
  //Escribe una función la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str = numero.toString();
  var esp = espejo(str);
  if (str === esp) {
    return ("Es capicua");
  }
  else return ("No es capicua");
}

function deleteChar(string, char){
  //La función elimina un char de la cadena dada 
  //y devuelve la versión modificada o la misma cadena, en caso de no contener dichas letras.
  
  var i=0;
  do {
     if (string[i]===char) {
    string=string.replace(char,'');
    i=i-1;
   }
  i=i+1;
  }
  while (i<string.length);
  return string;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí
  cadena = deleteChar(cadena,'a');
  cadena = deleteChar(cadena,'b');
  cadena = deleteChar(cadena,'c');
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

var result=[];  
do {
  var long=arr[0].length;
  var indice=0;
  for (var i=0; i<arr.length; i++){
    if (arr[i].length<long) {
        long= arr[i].length;
        indice=i;
    }
  }
  result.push(arr[indice]);
  arr.splice(indice,1);
} while (arr.length > 0);  

  return result;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] intersección [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

var result = [];
  for (i=0; i<arreglo1.length; i++) {
    for (var j=0; j<arreglo2.length; j++) {
        if (arreglo1[i]===arreglo2[j]) {
          result.push(arreglo2[j]);
        }
    }
}
return result;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

