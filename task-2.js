/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(start, end) {

    var arrResult = [],
        i,
        j,
        bool = false;

    if (start === undefined || end === undefined) {
        throw Error("Undefined");
    }

    else if (isNaN(start) || isNaN(end)) {
        throw Error("NaN");
    }

    else if (end <= start) {
        throw Error("Range is not correct!");
    }

    else {
        for (i = +start; i <= +end; i += 1) {
            for (j = 2; j <= i; j += 1) {
                if (i === j) {
                    arrResult.push(i);
                    break;
                }
                if (i % j === 0) {
                    break;
                }
            }
        }
        return arrResult;
    }
}
console.log(findPrimes(1, 5));
console.log(findPrimes(0, 5));
console.log(findPrimes("1", "5"));
console.log(findPrimes());
console.log(findPrimes(1));
console.log(findPrimes(258, 262));





//module.exports = findPrimes;
