
window.onload = function() {
    let button1 = document.getElementById("Hello");
    let button2 = document.getElementById("Goodbye");
    let button3 = document.getElementById("Greetings");
    
    button1.addEventListener("click", speak);
    button2.addEventListener("click", speak);
    button3.addEventListener("click", speak);
};
  
function speak() {
    let name = document.getElementById("Name").value;
    let prefix = this.value;
    alert(prefix + " " + name);
}
  