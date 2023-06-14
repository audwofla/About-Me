let num1 = prompt("First number")*1;
let num2 = prompt("Second number")*1;

let sortedNum;
if (num1 < num2) {
    sortedNum = num1 + " " + num2;
} else {
    sortedNum = num2 + " " + num1;
}

document.getElementById("numbers").innerHTML = sortedNum;