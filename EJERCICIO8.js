let apple = ['s', 'o', 'n', 'a', 'c', 'n', 'e', 'u', 'c'];

let temp;

let i;

for (let i = 0; i < apple.length / 2; i++) {

    temp = apple[i];
    apple[i] = apple[apple.length - i - 1];

    apple[apple.length - i - 1] = temp;

}
console.log(apple); // Palabra Ordenada 