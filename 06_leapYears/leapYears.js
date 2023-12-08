const leapYears = function(year) {
    let check00 = String(year).slice(-2);
    if (year % 4 == 0 && check00 != "00") {
        return true
    } else if (year % 400 == 0 && check00 == "00") {
        return true
    } else {
        return false  
    }
};

// Do not edit below this line
module.exports = leapYears;
