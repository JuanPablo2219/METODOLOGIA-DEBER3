let letras = ['o', 'ñ', 'e', 'l', 'i', 'u', 'q', 'a', 'y', 'a', 'u', 'g'];

let temp; //aqui guardo la mitad de los elementos

let i;

for (let i = 0; i < letras.length / 2; i++) {

    temp = letras[i]; // asigna el valor del elemento actual en la posición "i" del array.

    letras[i] = letras[letras.length - i - 1]; //asigna el valor del elemento en la posición opuesta, al elemento actual en la posición "i".

    letras[letras.length - i - 1] = temp; //asigna el valor de la variable "temp" al elemento en la posición opuesta del array.

}
console.log(letras); // Palabra Ordenada 