//task#18
let placesTovisit:string[]=["Tokyo","pakistan","America","china","japan",];
//print in orginal order
console.log("original order:",placesTovisit);

//print array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:",placesTovisit.slice().sort());

// array is still in its orginal  order by printing it.
console.log("Orignal  order after sorting:",placesTovisit);

//print array in reverse alphabetical order without changing the order 
console.log("Reverse Alphabetical order:",placesTovisit.slice().sort().reverse()); 

//array is still in its orginal order by printing it again.
console.log("Orignal  order after Reverse sorting:",placesTovisit);
//reverse the order of your list.print the array to show that its order has changing

console.log("Reverse order changed");
placesTovisit.reverse();
console.log(placesTovisit);

console.log("orginal order:",placesTovisit.sort() );
console.log(placesTovisit);

//sort to change your array so it`s stored in reverse alphabetical order.

console.log("reverse alphabetical order changed:",placesTovisit.sort().reverse());
console.log(placesTovisit);
