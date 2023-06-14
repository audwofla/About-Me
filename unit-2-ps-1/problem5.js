function timesTable() {
    let timesNum = prompt("Enter a number");
    let timesTable= document.getElementById("timesTable");

    for (let i = 1; i <= 12; i++) {
        let result = timesNum * i;
        let equation = timesNum + " x " + i + " = " + result;
        let newDiv = document.createElement("div");
        newDiv.textContent = equation;
        timesTable.appendChild(newDiv);
    }
}
timesTable();