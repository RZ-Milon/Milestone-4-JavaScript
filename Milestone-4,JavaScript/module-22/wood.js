/* 
fixed: per item wood requierments
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;


    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);
}
const totalWood = woodCalculator(1, 1, 1)
console.log(totalWood);