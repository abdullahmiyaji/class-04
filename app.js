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
      return `Rectangle Area =` + (length * width) ;
    }

console.log(rectangleArea(40,30))



// Bmi calculator
/**
 * 
 * @param {*} weight 
 * @param {*} height 
 * @returns bmi
 */
// const bmiCal = (weight, height) => {
//       // get bmi value
//       const bmi = weight / (height * height)
//       if (bmi < 18.5){
//             return 'you are under weight';
//       }else if(bmi >= 25 && bmi < 30){
//             return 'you height is normal'
//       }else if (bmi >= 25 && bmi <30){
//             return 'over weight'
//       }
// }
// console.log(bmiCal(weight, height))


// arry mathod arr.push("any valu and you can use multipul valu") = shasher dike add kora,
// pop(not use valu) ate deya array ar shesher dikthake akti valu catejabe akadik valu kata jay na .add
// unshift("any valu multipul valu can add") ati deya array ar prothom a valu add kora jay
// arr.shift() prothom theke we can remve any valu
// array slice(start index, end inxex)  akti array theke keta onno akti array toyri kora onkind copy kora
// array splice() holo cut kore arakti array toyri kora
// arr,concat() akti array arry ar shathe onno ar akti array jukto korar jonno ai methord bebohar korahoy
