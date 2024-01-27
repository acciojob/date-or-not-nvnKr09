var isDate = function (input) {
  //   write your code here
	 if (input instanceof Date) {
    return !isNaN(input.getTime()); // Check if it's a valid date
  }

  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime()); // Check if it's a valid date
  }
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
