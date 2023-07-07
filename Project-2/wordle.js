const wordArray = ["ADIEU", "LIGHT", "SHINE", "READS", "FIRES", "BOOKS", "YODEL"];
const letters = {};

for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  letters[letter] = letter;
}

window.onload = function() {
    let game = true;
    let word = wordArray[Math.floor(Math.random() * 6)];
    const arr = [];
    let num = 0;
    console.log(word);
    let buttons = document.querySelectorAll('.keyboard button');
    let enter = document.getElementById('enter');
    let backspace = document.getElementById('backspace');

    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let keyValue = button.textContent;
            if(game) {
            keyPress(keyValue); 
            }
        });
    });
  
    document.addEventListener("keydown", function(event) {
        let keyValue = event.key;
        if (keyValue === "Enter") {
            event.preventDefault();
        }
        if(game) {
            keyPress(keyValue); 
            }
    });

  

    function keyPress(keyValue) {
        if (isLetter(keyValue) && arr.length < 5) {   
            arr.push(keyValue.toUpperCase());   
        }
        if ((keyValue == "Backspace" || keyValue == "⇐" )&& arr.length > 0) {
            arr.pop();
            document.getElementsByClassName("box")[arr.length + num].innerHTML = "";
        }
        if (arr.length > 0) {
            document.getElementsByClassName("box")[arr.length + num - 1].innerHTML = arr[arr.length - 1];
        }
        
        if (arr.length == 5 && isWord(arr) && keyValue == "Enter") {
            let tempWord = word.split("");

            tempWord.forEach((element, i) => {
                if (element != "") {
                    blackChange(arr[i], word)
                    document.getElementsByClassName("box")[i + num].style.backgroundColor = "#666666";
                };
            })

            for (let i = 0; i <= 4; i++) {
                if (arr[i] == tempWord[i]) {
                    greenChange(arr[i]);
                    document.getElementsByClassName("box")[i + num].style.backgroundColor = "#4ead64";
                    tempWord[i] = "";
                    
                }
            }

            for (let i = 0; i <= 4; i++)  {
                for (let j = 0; j <= 4; j++) {
                    if (arr[i] == tempWord[j]) {
                        yellowChange(arr[i], word);
                        document.getElementsByClassName("box")[i + num].style.backgroundColor = "#decd4e";
                        tempWord[j] = " ";
                    }
                }
            }

            if (word == arr.join("")) {
                alert("You won in " + (1 + num/5) + " tries!");
                game = endGame();
                num -=5;
            }
            for (let i = arr.length - 1; i >= 0; i--) {
                arr.pop();
                
            }
            num += 5;
            if (num == 30) {
                alert("Game Over!\nThe word was "+ word.toLowerCase());
                game = endGame();
            }
        }
    };
}

function endGame(){ 
    return false;
}
function isLetter(value) {
  return /^[a-zA-Z]$/.test(value);
}

function isWord(arr) {
    let word = arr.join("")
    return true;
}

function greenChange(value) {
    if (value in letters) {
      document.getElementById(value).style.backgroundColor = "#4ead64";
      delete letters[value];
    }
  }
  
function yellowChange(value, word) {
    if (value in letters) {
        document.getElementById(value).style.backgroundColor = "#decd4e"; 
    }
}
  
function blackChange(value, word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == value) {
            return;
        }
    }
    if (value in letters) {
      document.getElementById(value).style.backgroundColor = "#2e2e2d";
    }
  }
  