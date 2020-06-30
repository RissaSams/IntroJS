let date = new Date();
let hour = date.getHours();

console.log(date);
console.log(hour);

if (hour >= 23 || hour < 6) {
    console.log(`Marissa is sleeping, way to early to be up!`);
} else if (hour == 6) {
    console.log(`Marissa is getting ready and doing her make-up!`);
} else if (hour == 7) {
    console.log(`Marissa is making breakfest and waking up the kids!`);
} else if (hour >= 8 && hour <= 13) {
    console.log(`Marissa is learning how to do one of her favorite things!`);
} else if (hour > 13 && hour < 18) {
    console.log(`Marissa is dealing with kids!`);
} else {
    console.log(`Marissa is feeding the family and trying to get the kids in bed!`);
}