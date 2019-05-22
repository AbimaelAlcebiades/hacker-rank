function subArray(array) {

    let result = 0;
    const MIN_COMBINATION = 2;

    for (let index = MIN_COMBINATION; index < array.length; index++) {
        result += index;
    }

    console.log(result);
}

subArray([1, 2, 3, 4]);
subArray([1, 2, 3, 4, 5]);
subArray([1, 2, 3, 4, 5, 6]);
