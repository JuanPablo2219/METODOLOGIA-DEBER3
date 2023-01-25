var algebra= [10, 3, 6, 5, 0];
var RESULTADO=16;
for(var i=0; i<algebra.length; i++){

    for(var j=i+1;j<algebra.length;j++){

        if(algebra[i]+ algebra[j]==RESULTADO){

            console.log("algebra: indice: "+i+" algebra: indice "+j);
        }
    }
}
console.log("EL RESULTADO ES 16");