// 1.Create a function that will return children, teenagers, young people, old people from the age
/**
 * 
 * @param {*} age 
 * @returns Pepole catagorize
 */
function ageCtegorize(age){
      if (age <= 12){
            return ` You are children`
      }else if( age <= 19){
            return `You are teenagers`
      }else if (age <= 35){
            return `You are Young people`
      }else{
            return `Old People`
      }
}

console.log(ageCtegorize(8));
console.log(ageCtegorize(16));
console.log(ageCtegorize(25));
console.log(ageCtegorize(40));


// 2.Create a function that will return the area of a rectangle, square, triangle

// Rectangle = lenght * width
/**
 * 
 * @param {*} length 
 * @param {*} width 
 * @returns Rectangle Area
 */
const rectangleArea = function (length, width) {
      return `Rectangle Area = ${(length * width)} `;
    }

console.log(rectangleArea(40,30))


// squareArea = side * side;
/**
 * 
 * @param {*} side 
 * @returns Square Area
 */
const squareArea = function(side){
      return `Square Area is =  ${(side * side)}`
}

console.log(squareArea(20))

// TriangleArea = (base * height) /2;

const triangleArea = (base,height) => `Triangle Area is = ${(base * height) /2}`;

console.log(triangleArea(10,16));

// 4.Create an age calculator function

let currentYear = 2023;
const ageCheck = (barthYear) => `Your current age is = ${currentYear - barthYear}`;

console.log(ageCheck(1987));


// 5.Create a BMI function for health
// Bmi calculator
// BMI = weight (kg) / (height (cm) * height (cm)).
/**
 * 
 * @param {*} weight 
 * @param {*} height 
 * @returns bmi
 */
const bmiCal = (weight, height) => {
      // get bmi value
      const bmi = weight / (height * height)
            // console.log(bmi)
      if (bmi <= 18.5){
            return 'you are under weight';
      }else if(bmi > 18.5 && bmi < 25){
            return 'you weight is normal'
      }else if (bmi >= 25 && bmi <30){
            return 'over weight'
      }else{
           return `Obesity big problem ojon komaw`
      }
}
console.log(bmiCal(93, 1.6764));

// 6.Create a currency converter function from taka to USD, CAD, POUND, EURO 
const usdUsa = 0.0093;
const cadRat = 0.013;
const poundRat = 0.0075;
const euroRat = 0.0087;

switch (key) {
      case value:
            
            break;

      default:
            break;
}