/*let vector = [1, 2, 3, 2, 1,];

if (vector.length % 2 == 0) {

    console.log("El tamaño del vector es par");
} else {
    console.log("El tamaño del vector es impar" );
}*/



/*//  0 1 2 3 4 
let nums = [5, 8, 3, 6, 7, 9, 8];
//t=5


for (let i = 0; i < nums.length; i++) {

    if (i == 0 || nums.length - 1 == i) {

        console.log(nums[i])
    }
}*/


let vector = [1, 2, 3, 4, 5, 6];
let m = vector[0];
for (let i = 1; i < vector.length; i++) {
    if (vector[i] > m) {
        m = vector[i];
    }
}
console.log(m); 
