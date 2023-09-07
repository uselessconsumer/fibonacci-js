let n1 = 0;
let n2 = 1;
let nextN;

function fibonacci(sequenceNum) {
    if (sequenceNum <= 0) {
        return "OOPS";
    } else if (sequenceNum == 1) {
        return 1;
    }
    let i = 1;
    for ( ; i < sequenceNum; ++i ) {
        nextN = n1 + n2;
        console.log(nextN);
        n1 = n2;
        n2 = nextN;
    }
    return nextN;
}

console.log(fibonacci(1));