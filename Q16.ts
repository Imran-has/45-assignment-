//task#16
let guestArray:string[]=["sarmad","sajjad","aliyan"]
console.log("Great News! we found a bigger table");

//unshift()
guestArray.unshift("Abdullah");

//splice()
guestArray.splice(Math.floor(guestArray.length/2),0,"imran hassan")

//push()

guestArray.push("Noor")
console.log(guestArray);

guestArray.forEach(guest=>{
console.log(`Dear ${guest}, your are cordially invited to my party`)
});