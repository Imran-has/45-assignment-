//task#15
let guestarray = ["saad", "sami", "hassan", "khan"];
let cannotAttend = guestarray.splice(1, 1)[0]; // 1 index ,1 lenght
console.log(`${cannotAttend} ,this person cantnotAttend the Dinner`);
//push
guestarray.push("imran hassan");
guestarray.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited`);
});
export {};
