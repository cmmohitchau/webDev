// JavaScript Date objects represent a single moment in time in a platform-independent format.

const currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getMonth()); // Months are zero-indexed
console.log(currentDate.getDay());
function gethours(){


if(currentDate.getHours() > 12)
{
    console.log(currentDate.getHours()-12);
}
else{
    console.log(currentDate.getHours());
}

}

gethours()

function calculateSum()
{
    let a = 0 ;
    for(let i = 0 ; i < 1000000000; i++)
    {
        a = a + i;
    }
}

let beforeDate = new Date();
let beforeTimeStamp = beforeDate.getTime();

calculateSum();

let afterDate = new Date();
let afterTimeStamp = afterDate.getTime();

console.log("The total time to calculate sum is: " + (afterTimeStamp - beforeTimeStamp));