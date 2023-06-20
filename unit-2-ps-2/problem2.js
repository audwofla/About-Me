let names = "Jeremy, Myung, SunHee, Moon"

let nameSplit = names.split(", ")

let ol = document.createElement("ol")

nameSplit.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ol.appendChild(li);
});
let nameList = document.getElementById("nameList");
nameList.appendChild(ol);


