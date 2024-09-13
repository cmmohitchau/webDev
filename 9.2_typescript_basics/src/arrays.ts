
type NumberArr = number[]
function maxNum(NumberArr : number[]) {
    console.log("in function");
    
    let max = NumberArr[0];

    for(let i = 1 ; i < NumberArr.length ; i++ ) {
        if (max < NumberArr[i]) {
            max = NumberArr[i];
        }
    }
    return max;
}

const num : number = maxNum([1,2,33,4,5])

console.log(num);
