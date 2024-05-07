//task#19

let guest:string[]=["Ali", "Bila","Mehak","Rab nawaz",];
console.log("Due to imilted space only two people can invited for Dinner");

guest.unshift("Hassan","Arham");
//print message upadted list
console.log("upadated list of guest:",guest);
//remove guest from the list
while(guest.length>2){
    let removedGuest:string|undefined=guest.pop();
    if(removedGuest!==undefined){
        console.log(`sorry,${removedGuest}you are no longer invited to dinner`)
    }
    }
    
//Print a message to each of the people still on your list ,letting them
guest.forEach(guest=>{
    console.log(`Dear ${guest}, you both are inivited for the dinner`)

});