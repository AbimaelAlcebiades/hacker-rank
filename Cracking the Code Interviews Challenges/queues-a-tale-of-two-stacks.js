function processData(input) {

    /* There is no much to explain in this challenge. Manage and organize your queues, performing which
    operation you should have performs. Most languages already have methods that works with "FIFO lists" */
    let inputLines = input.split("\n");
    const numberOfQueries = inputLines.shift();
    let fifoQuery = [];

    for (let index = 0; index < numberOfQueries; index++) {
        const queryData = inputLines[index].split(' ');
        switch (parseInt(queryData[0], 10)) {
            case 1:
                fifoQuery.push(queryData[1]);
                break;

            case 2:
                fifoQuery.shift();
                break;

            case 3:
                console.log(fifoQuery[0]);
                break;

            default:
                break;
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});