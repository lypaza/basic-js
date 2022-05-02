const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
	let resultName = [];
	if (Array.isArray(members)) {
	for (let i = 0; i < members.length; i++) {
		if(typeof(members[i]) === 'string'){
			//alert(members[i]);
			let name = members[i].toUpperCase();
      		let newarr = name.split(' ');
      		name = newarr.join('');
			let firstWord = name[0];
			resultName += firstWord;
			}
	}
	//alert('hi');
	if(members.length > 0) {
	let resultName1 = resultName.split('');
	resultName1.sort();
	let result = resultName1.join('');
	//alert(result);
	return(result);
	} else return false
    } else return false
}

module.exports = {
  createDreamTeam
};
