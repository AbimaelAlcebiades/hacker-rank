'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const t = parseInt(readLine(), 10);

    /* Hint, read the challenge name. :D
    The key for me was to use stacks. When detect an "closing bracket" have been check 
    "stacks of opened brackets " and grant that first element is match */
    let closeOpenBrackets = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    };

    for (let tItr = 0; tItr < t; tItr++) {
        const expression = readLine();
        let isBalanced = true;    
        let stackOpenedBracket = [];
        for (let index = 0; index < expression.length; index++) {
            const element = expression[index];
            if(closeOpenBrackets.hasOwnProperty(element)){
                if(stackOpenedBracket.pop() != closeOpenBrackets[element]){
                    isBalanced = false;
                    break;
                }
            }else{
                stackOpenedBracket.push(element);
            }
        }
        
        if(stackOpenedBracket.length > 0){
            isBalanced = false;
        }

        console.log((isBalanced) ? 'YES' : 'NO');

    }
}
