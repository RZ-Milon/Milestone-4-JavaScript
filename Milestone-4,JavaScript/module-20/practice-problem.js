function hourToMinutes(hour){
    const minutes = hour * 60;
    return minutes;
}

const myMinutes = hourToMinutes(.5);
console.log('hour to minutes', myMinutes);



function findLeapYear(year){
    let leapYear = [];
    for(let i = 0; i <= year.length; i++){
        let element = year[i];
        if(element % 4 === 0){
            leapYear.push(element);
        }
    }
    return leapYear;     
}

const years = [2023, 2024, 2025, 2028,2030];
let leapYear = findLeapYear(years);
console.log(leapYear);



// const years = [2023, 2024, 2025, 2028,2030];
// function findLeapYear(year){
//     let leapYearArrayPush = [];
//     for(let i = 0; i <= year.length; i++){
//         let yearArrayIndex = year[i];
//         if((yearArrayIndex % 400 === 0) || (yearArrayIndex % 4 === 0) && (yearArrayIndex % 100 !== 0)){
//             leapYearArrayPush.push(yearArrayIndex);
//         }
//     }
//     return leapYearArrayPush;     
// }

// let finalResult = findLeapYear(years);
// console.log(finalResult);



