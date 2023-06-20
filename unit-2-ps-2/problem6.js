const items = [
    {name: "Guitar", price: 500, quantity: 0},
    {name: "Pedal", price: 100, quantity: 0},
    {name: "Amp", price: 1000, quantity: 0},
    {name: "Cable", price: 15, quantity: 0},
    {name: "Pick", price: 5, quantity: 0},
  ];


let totalCost = 0;
costDiv = document.getElementById("cost").innerHTML;

items.forEach((item) => { 
  let option = document.createElement("option");
  option.textContent = item.name;
  document.getElementById("items").appendChild(option);
});

window.onload = function() {

    let button = document.getElementById("add");
    button.addEventListener("click", divDisplay);

    function divDisplay() { 
        currItem = document.getElementById("items").value;
        let amount = document.getElementById("amount").value * 1;
        let i = itemFind(currItem);

        if (amount >= 1 && amount <=100) {
            items[i].quantity += amount;
            summaryDiv();
        }
        totalCost = 0;
        items.forEach((item) => {  
            totalCost += item.quantity * item.price * 1;
        })
        document.getElementById("cost").innerHTML = costDiv + totalCost;

        
    }

    document.getElementById("reset").addEventListener("click", reset);

    function reset() {
        document.getElementById("summary").innerHTML = "Order Summary: ";
        document.getElementById("cost").innerHTML = "Total Cost: ";
        document.getElementById("amount").value = "";
        totalCost = 0;
        items.forEach((item) => {  
            item.quantity = 0;
        })
    }

    function itemFind(currItem) {
        for (i = 0; i < items.length; i++) {
            if (items[i].name == currItem) {
                return i;
            }

    };

}
    function summaryDiv() {
        let fullsumm = "";
        items.forEach((item) => { 
            let summ = "";
            if (item.quantity > 0) {
                summ += "Name: " + item.name + "<br>Quantity: " + item.quantity +
                "<br>Quantity: " + item.price + "<br><br>";
                fullsumm += summ;
            }
        })
        document.getElementById("summary").innerHTML = fullsumm;
    }
}
