let fNum = prompt("Enter a number")*1;
let sNum = prompt("Enter another number")*1;

let lowerNum = 0;
let higherNum = 0;
if (fNum < sNum) {
    lowerNum = fNum;
    higherNum = sNum;
} else {
    lowerNum = sNum;
    higherNum = fNum;
}

let totalSum = 0;
let range;

for (let i = lowerNum; i <= higherNum; i++) {
    if (i%2 !== 0) {
        totalSum = i + totalSum;
        document.getElementById("range").innerHTML = 
            document.getElementById("range").innerHTML + " "+i;
    
    }
    
}

document.getElementById("totalSum").innerHTML = totalSum;