const listOfInteger = [40, 1, 100, 40, 2, 1, 21, 3, 1];

let ordenedArray = [];

/**
 * Recursive method to insert value orderly .
 * 
 * @param {int}     value           Value to insert.
 * @param {array}   ordenedArray    Array where value it will be inserted
 * @param {int}     start           (optional) Start of array, if not informed 0 will be the default value.
 * @param {int}     end             (optional) End of array, if not informed length of array will be default value.
 */
function indexToInsert(value, ordenedArray, start, end) {
    if(ordenedArray.length == 0 ){
        return 0;
    }

    if(start == undefined){
        start = 0;
    }
    if(end == undefined){
        end = ordenedArray.length - 1;
    }
    
    let indexMiddle = parseInt( (end - start + 1) / 2, 10);
    if(value == ordenedArray[indexMiddle]){  
        return indexMiddle;
    }

    if (end <= start){
        if(value < ordenedArray[indexMiddle]){
            return ordenedArray.indexOf(ordenedArray[end]) - 1;
        }else{
            return ordenedArray.indexOf(ordenedArray[end]) + 1;
        }
    }

    // Recursive calls.
    if(value < ordenedArray[indexMiddle]){
        // Left.
        return indexToInsert(value, ordenedArray, start, indexMiddle - 1);
    }else{
        // Right.
        return indexToInsert(value, ordenedArray, indexMiddle + 1, end);
    }

}

listOfInteger.forEach(value => {
    let index = ordenedArray.indexOf(value);
    if (index == -1){
        index = indexToInsert(value, ordenedArray);
    }

    ordenedArray.splice(index, 0, value);
    console.log(ordenedArray);
});





