let fName = prompt("Enter first name");
let lName = prompt("Enter last name");
alert("Your name is " + fName +" "+ lName);



let numChildren = prompt("Enter number of children");
if (numChildren == 1) {
    document.getElementById("children").innerHTML = "You have " + numChildren + " child";
} else if (numChildren > 1) {
    document.getElementById("children").innerHTML = "You have " + numChildren + " children";
} else {
    document.getElementById("children").innerHTML = "You have no children";
}




