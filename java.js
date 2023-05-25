let points = 0;

let howMany = [0, 0, 0, 0];


let mySubmitButton = document.querySelector(".submit-button");
mySubmitButton.addEventListener("click", submitAnswer);

function submitAnswer() {
    let choice = Int32.parse(document.querySelector("[checked]").value);
    if (choice === 0) {
        howMany[0]++;
    }
    if (choice === 1) {
        howMany[1]++;
    }
    if (choice === 2) {
        howMany[2]++;
    }
    if (choice === 3) {
        howMany[3]++;
    }
}

function chooseCharacter() {
    let characters = ["Walter", "Jesse", "Hank", "Fring"];
    
    let highestSoFar = 0;
    for (let i = 0; i < howMany.length; i++) {
        if (howMany[i] > highestSoFar) {
            highestSoFar = howMany[i];
        } 
    }

    
}