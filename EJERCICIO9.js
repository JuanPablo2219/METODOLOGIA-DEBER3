let nums = [0, 0, 0, 0];
let x = 10; // numero que vamos a multiplicar
let value = x; //aqui inica con el valor de x

for (let i = nums.length - 1; i >= 0; i--) { //aqui va en desenso hasta el elemento unicial
    nums[i] = value;
    value *= 2;
}

console.log(nums); // resultado jeje
