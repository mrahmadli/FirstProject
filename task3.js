let array = [1, 1000, 200,-2000,200921 -5, -19, 2003, -100]

for(let i = 0 ; i < array.length ; i++){
    for (let k = 0; k < array.length-1; k++) {
         if ( array[k] > array[k+1]){
          let a =  array[k]
            array[k] = array[k + 1];
            array[k + 1] = a;
        }
        
        
    }
}

console.log(array)



