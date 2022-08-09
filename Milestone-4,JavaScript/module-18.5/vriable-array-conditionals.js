/* 
VARIABLE


   1. What is JavaScript?
   Ans: JavaScript is a scripting or programming language that allows you to implement complex features on web pages........................

   2. Hpw does JavaScript works? 
   Ans: Deep question

   3. What is Variable?
   Ans: Variables are containers for storing data (storing data values).
   
   4. Declare a variable: type variableName = value;
   In this example, x, y, and z, are variables: var x = 5; var y = 3; var z = x + y;

   5. Type of variable: a. string, b. int, float, char, boolean
   find a variable types : var name = "Rahim"; console.log(typeof name);

   6. Change variable value: var name = 'Rahim', 




        
    
*/
// 24.
var myMony = 60000;

if(80000 < myMony){
   console.log('I will buy a mac');
}
else if(60000 < myMony){
   console.log('I will buy gaming laptop');
}
else if(40000 < myMony){
   console.log('I will buy lenovo yoga');
}
else if(20000 < myMony){
   console.log('buy secondhand laptop');
}
else{
   console.log('mobile diye kaj sarmu');
}

// 25. 
var monValo = 0;
while(monValo < 39){
   console.log('Aj amar mon valo nei !!!');
   monValo++;
}

for(var i = 1; i <= 39; i++){
   console.log('Aj amar mon valo nei');
}

// 29.
var i = 58;
for(var i = 58; i <= 98; i++ ){
   console.log(i);
}

// 33.
var learningSub = ['html', 'css', 'bootstrap', 'tailwind', 'js'];

for (var i = 0; i < learningSub.length; i++) {
   console.log(learningSub[i]); 
}

// 34.
var useMobileModel = ['Motorola', 'Semen', 'Nokia', 'Symphony', 'Itel'];


for(var i = 0; i < useMobileModel.length; i++){
   console.log(useMobileModel[i]);
}

// 35.
for (let i = 30; i < 86; i++) {
   console.log(i);
   if(i == 44){
      break;
   } 
}

// 36.
var myBookPrice = [200, 300, 100, 250, 150, 120, 400];
for(var i = 0; i < myBookPrice.length; i++){
   if(myBookPrice[i] > 200){
      continue;
   }
   console.log(myBookPrice[i]);
}
