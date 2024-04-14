function fibs(n) {

    let arr = [0, 1];

    for(let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr;
}

console.log(fibs(8));

function recursiveFib(n) {
    if(n <= 1) {
        return n;
    }
    else {
        return recursiveFib(n - 1) + recursiveFib(n - 2);
    }
}

console.log(recursiveFib(8));
