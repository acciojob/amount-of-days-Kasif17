//your JS code here. If required.
function CountDayByYear(year){
	if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}

CountDayByYear(2025)