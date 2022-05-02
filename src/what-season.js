const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  let checkDate = Date.parse(date);
  const errorString = 'Unable to determine the time of year!';
  const keysData = Object.keys(date);
  if (!date) {
	return 'Unable to determine the time of year!';
  } else if (keysData.length > 0) {
	throw new Error ('Invalid date!');
  } else if (date instanceof Date) {
	    const spring = "spring";
	    const winter = "winter";
	    const summer = "summer";
	    const autumn = "autumn";
	    let newDate = new Date(date);
	//alert(newDate.getMonth());
  	if(newDate.getMonth() >= 0 && newDate.getMonth() < 2) {
		  return winter;
  	} else if (newDate.getMonth() >= 0 && newDate.getMonth() < 5) {
	  	return spring;
	  } else if (newDate.getMonth() >= 0 && newDate.getMonth() < 8) {
	  	return summer;
  	} else if (newDate.getMonth() >= 0 && newDate.getMonth() < 11) {
	  	return autumn; 
	  } else if (newDate.getMonth() == 11) {
	  	return winter;
  	} else return false;
	  } throw new Error ('Invalid date!');
}

module.exports = {
  getSeason
};
