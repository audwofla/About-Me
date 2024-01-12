const letters = {};

for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  letters[letter] = letter;
}

let word = '';

window.onload = function() {
    fetchValidWord().then(validWord => {
        word = validWord; 
        let game = true;
        const arr = [];
        let num = 0;
        let buttons = document.querySelectorAll('.keyboard button');
        let enter = document.getElementById('enter');
        let backspace = document.getElementById('backspace');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                let keyValue = button.textContent;
                if (game) {
                    keyPress(keyValue);
                }
            });
        });
        console.log(word.toLowerCase());

        document.addEventListener("keydown", function(event) {
            let keyValue = event.key;
            if (keyValue === "Enter") {
                event.preventDefault();
            }
            if (game) {
                keyPress(keyValue);
            }
        });

        function keyPress(keyValue) {
            if (isLetter(keyValue) && arr.length < 5) {
                arr.push(keyValue.toUpperCase());
            }
            if ((keyValue == "Backspace" || keyValue == "⇐") && arr.length > 0) {
                arr.pop();
                document.getElementsByClassName("box")[arr.length + num].innerHTML = "";
            }
            if (arr.length > 0) {
                document.getElementsByClassName("box")[arr.length + num - 1].innerHTML = arr[arr.length - 1];
            }

            if (arr.length == 5 && keyValue == "Enter") {
                isWord(arr.join("").toLowerCase())
                .then(Word => {
                    if (Word) {
                        let tempWord = word.split("");
                        tempWord.forEach((element, i) => {
                            if (element != "") {
                                blackChange(arr[i], word);
                                document.getElementsByClassName("box")[i + num].style.backgroundColor = "#666666";
                            }
                        });

                        for (let i = 0; i <= 4; i++) {
                            if (arr[i] == tempWord[i]) {
                                greenChange(arr[i]);
                                document.getElementsByClassName("box")[i + num].style.backgroundColor = "#4ead64";
                                tempWord[i] = "";
                            }
                        }

                        for (let i = 0; i <= 4; i++) {
                            for (let j = 0; j <= 4; j++) {
                                if (arr[i] == tempWord[j] && tempWord[i] != "") {
                                    yellowChange(arr[i], word);
                                    document.getElementsByClassName("box")[i + num].style.backgroundColor = "#decd4e";
                                    tempWord[j] = " ";
                                }
                            }
                        }

                        if (word == arr.join("")) {
                            document.getElementsByClassName("h2")[0].innerHTML = "You Win!";
                            document.getElementsByClassName("p")[0].innerHTML = "Word: " + word.toLowerCase() + '<br>' + "Attempt(s): " + (1 + num / 5);
                            game = endGame();
                            
                            num -= 5;
                        }
    
                        for (let i = arr.length - 1; i >= 0; i--) {
                            arr.pop();
                        }
    
                        num += 5;
    
                        if (num == 30) {
                            document.getElementsByClassName("h2")[0].innerHTML = "Game Over";
                            document.getElementsByClassName("p")[0].innerHTML = "The word was " + word.toLowerCase() + "."
                            game = endGame();
                            
                        }
                    }
                })
            }
        }
    })    
};

function randomWord() {
    fetch('https://random-word-api.herokuapp.com/word?length=5')
    .then(response => response.json())
    .then(data => {
        console.log(data[0].toUpperCase());
        console.log(isWord(data[0]))
    });
}

function isWord(word) {
    return fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then(response => response.json())
    .then(data => {
        if (data.hasOwnProperty("title")) {
            return false;
        } else {
            return true;
        }
    });
}

async function fetchValidWord() {
    let isValid = false;
    let validWord;

    while (!isValid) {
        validWord = await getRandomWord(); 
        isValid = await isWord(validWord); 

        if (isValid) {
            return validWord; 
        }
        
    }
}

function isLetter(value) {
    return /^[a-zA-Z]$/.test(value);
}

function getRandomWord() {
    return fetch('https://random-word-api.herokuapp.com/word?length=5')
    .then(response => response.json())
    .then(data => {
        let word = data[0].toUpperCase();
        return word;
    });
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

function endGame() {
    openPopup()
    return false;
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
}
  
function closePopup() {
    document.getElementById("popup").style.display = "none";
}