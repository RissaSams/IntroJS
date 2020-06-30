let nums = [1, 2, 3, 4, 5];
let nums2 = [];

//for (let i = 0; i < nums.length; i++) {
//    nums2.push(nums[1] * 2);
//}
//console.log(nums2);

//num2 = nums.map(function(item){ 
//    return item * 2;
//})

nums2 = nums.map(item => item*2);
console.log(nums2);

let birthYear = [1972, 1987, 1981, 1992, 1997]
let ages = [];
//for( let i = 0; i < birthYear.length; i++){
//    let age = 2020-birthYear[i];
//    ages.push(age);
//}

ages = birthYear.map(age => 2020-age);
console.log(ages);