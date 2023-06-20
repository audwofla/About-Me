const items = ["Guitar", "Pedal", "Amp", "Cable", "Pick"];
const prices = [500, 100, 1000, 15, 5];

let totalCost = 0;
costDiv = document.getElementById("cost").innerHTML;

items.forEach((item) => { 
  let option = document.createElement("option");
  option.textContent = item;
  document.getElementById("items").appendChild(option);
});
window.onload = function() {

    let button = document.getElementById("add");
    button.addEventListener("click", divDisplay);

    function divDisplay() {
        
        currItem = document.getElementById("items").value;
        let amount = document.getElementById("amount").value;
        currPrice = price(currItem) * amount;
        if (amount >= 1 && amount <=100) {
            let summary = document.createElement("div");
            summary.innerHTML = "<br>Name: " + currItem + "<br>" +" Quantity: " +
                amount + "<br>" +" Price: " + currPrice + "<br>";

            document.getElementById("summary").appendChild(summary);
            totalCost += currPrice;

            document.getElementById("cost").innerHTML = costDiv + totalCost;
        }
    }

    function price(item) {
        for (let i = 0; i < items.length; i++) {
            if (item == items[i]) {
                return prices[i];
            }
        }
    }

    document.getElementById("reset").addEventListener("click", reset);

    function reset() {
        document.getElementById("summary").innerHTML = "Order Summary: ";
        document.getElementById("cost").innerHTML = "Total Cost: ";
        document.getElementById("amount").value = "";
        totalCost = 0;
    }

}
