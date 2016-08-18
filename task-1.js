/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/
function sum(input) {
    var len,
        i,
        sum = 0,
        len;


    if (input === undefined) {
        throw Error("The function is called without input!");

    }

    else if (input.length < 1) {
        return null;
    }


    else {
        for (i = 0, len = input.length; i < len; i += 1) {
            if (!isNaN(input[i])) {
                sum += +input[i];
            }
            else {
                throw Error("Not all elements are numnbers!");
            }


        }
        return sum;
    }
}

console.log(sum([1, 2, 3]));
console.log(sum([]));
console.log(sum());
console.log(sum(["1", "2"]));
console.log(sum(["1", "John"]));

//module.exports = sum;

