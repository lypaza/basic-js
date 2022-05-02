const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

	if (Array.isArray(arr) /*&& arr.length > 0*/) {

		for (let i = 0; i < arr.length; i++ ) {

			if (arr[i] === "--double-next") {
				let newArr = arr.slice();
				if(i+1 != newArr.length) {
					newArr.splice((i), 1, (newArr[i+1]));
					//alert(newArr);
					return(newArr);
				} else {
					newArr.splice((i), 1);
					return newArr
				}

			} else if (arr[i] == "--discard-prev") {
				let newArr = arr.slice();
				if(i > 0) {
					newArr.splice((i-1), 2);
					//alert(newArr);
					return newArr;
				} else {
					newArr.splice((i), 1);
					return newArr;
				}

			} else if (arr[i] == "--double-prev") {
				let newArr = arr.slice();
				if(i > 0) {
					newArr.splice((i), 1, (newArr[i-1]));
					//alert(newArr);
					return(newArr);
				} else {
					newArr.splice((i), 1);
					return newArr;
				}
				
			} else if (arr[i] == "--discard-next") {
				let newArr = arr.slice();
				if(i+1 != newArr.length) {
					newArr.splice((i), 2);
					//alert(newArr);
					return(newArr);
				} else {
					newArr.splice((i), 1);
					return newArr;
				} 
			}
		}
    let newArr = arr.slice();
    return newArr;

	} throw new Error ("\'arr\' parameter must be an instance of the Array!");
 
}

module.exports = {
  transform
};
