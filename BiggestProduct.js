function biggestProduct(numbers) {
//Error handling
   if(numbers.length < 3){
    return "I'm sorry! This requieres at least 3 numbers, try with another array :D"
   }
//Sorting the array desc
let sortedArray = numbers.sort(function(a,b){return b-a});
//Calculating the product
let product = sortedArray[0] * sortedArray[1] * sortedArray[2]
return product
}
//Example 
const numbers = [1, 10, 2, 6, 5, 3];
console.log(biggestProduct(numbers))
