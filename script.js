function isDate(input) {
    if (input instanceof Date) {
        return true;
    } else {
        var timestamp = Date.parse(input);
        if (isNaN(timestamp) == false) {
            return true;
        } else {
            return false;
        }
    }
}

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
