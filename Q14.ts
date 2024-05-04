//tas#14
let guestarray:string[]=["saad","sami","hassan","khan"]
guestarray.forEach(guest=>{
    console.log(`Dear ${guest}, you are cordially invited to  dinner bhalee kare aya`)
});

//map() method provide us new array []
//invite guest

let invitation :string[]=guestarray.map(guest=>`Dear ${guest}, you are cordially invited to  dinner bhalee kare aya`)
console.log(invitation);

//forEach method do not provide new array, its return same result 
invitation.forEach(invitations=>{
console.log(invitations)
});
