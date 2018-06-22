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

let teste = [37632,
10118,
25334,
84618,
87339,
97852,
91683
];

let result = [];

function main() {
    //const n = parseInt(readLine(), 10);
    const n = 100000;  

    let a = [];

    for (let i = 0; i < n; i++) {
        //const aItem = parseInt(readLine(), 10);
        const aItem = teste.splice(0, 1)[0];
        
        let indexInteger = a.indexOf(aItem);
        if (indexInteger == -1) {
            indexInteger = indexToInsert(aItem, a);
        }

        a.splice(indexInteger, 0, aItem);

        let middle = parseInt(a.length / 2, 10);
        if (a.length % 2 != 0) {
            //console.log(a[middle].toFixed(1));
            result.push(a[middle].toFixed(1));
        } else {
            /*console.log(
                ((a[middle] + a[middle - 1]) / 2).toFixed(1)
            );*/
            result.push(((a[middle] + a[middle - 1]) / 2).toFixed(1));
        }
    }
}

main();
console.log(result);


// SOLUCAO 
// gchagalidze
// https://www.hackerrank.com/rest/contests/master/challenges/ctci-find-the-running-median/hackers/gchagalidze/download_solution

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var arr = [];

    for (i = 0; i < n; i++) {
        var value = Number(readLine());
        if (i == 0) arr.push(value);
        else if (arr[0] > value) arr.unshift(value);
        else if (arr[arr.length - 1] < value) arr.push(value);
        else {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] >= value) {
                    arr.splice(j, 0, value);
                    break;
                }
            }
        }

        var isEven = (arr.length % 2 == 0);
        var middle = Math.floor(arr.length / 2);

        if (!isEven) console.log(arr[middle].toFixed(1));
        else console.log(((arr[middle - 1] + arr[middle]) / 2).toFixed(1));
    }
}