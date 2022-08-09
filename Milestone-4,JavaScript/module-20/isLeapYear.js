// function isLeapYear(year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         // console.log('Your year is leap year', year);
//         return true;
//     }
//     else{
//         // console.log('Your year is not leap year', year);
//         return false;
//     }
// }



function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('Your year is leap year', year);
        return true;
    }
    return false;
}

// isLeapYear(1933);
// isLeapYear(1960);

const isMyYearLeapYear = isLeapYear(1933);
console.log(isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log(isHerYearLeapYear);