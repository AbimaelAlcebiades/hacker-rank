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

    let indexMiddle = parseInt( (end + start) / 2, 10);

    if(value == ordenedArray[indexMiddle]){  
        return indexMiddle;
    }

    if (end <= start){
        let returnIndex;
        if(value < ordenedArray[indexMiddle]){
            return ordenedArray.indexOf(ordenedArray[indexMiddle]);
        }else{
            return ordenedArray.indexOf(ordenedArray[indexMiddle]) + 1;
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

function main() {
    const n = parseInt(readLine(), 10);

    let a = [];

    for (let i = 0; i < n; i++) {
        const aItem = parseInt(readLine(), 10);

        a.push(aItem);
        a.sort(function (a, b) {
            return a - b;
        });

        let middle = parseInt(a.length / 2, 10);
        if (a.length % 2 != 0) {
            console.log(a[middle].toFixed(1));
        } else {
            console.log(
                ((a[middle] + a[middle - 1]) / 2).toFixed(1)
            );
        }

    }
}

const listOfInteger = [
100000,
37632,
10118,
25334,
84618,
87339,
97852,
91683,
99232,
31552,
90453,
46239,
89445,
23303,
46262,
65147,
1564,
];
let a = [];

listOfInteger.forEach(integer => {
    let indexInteger = a.indexOf(integer);
    if (indexInteger == -1) {
        indexInteger = indexToInsert(integer, a);
    }

    a.splice(indexInteger, 0, integer);
    console.log(a);
});

console.log(a);



//main();


