const MAX_SIZE = 16;
// set up screen
let screen = document.getElementById('screen');
console.log(screen);
for(let i = 0; i < MAX_SIZE; i++) {
    let newNode = document.createElement("div");
    newNode.className="pixelRow";
    screen.appendChild(newNode);
    for(let j = 0; j < MAX_SIZE; j++) {
        let newPixel = document.createElement("div");
        newPixel.className="pixel";
        newNode.appendChild(newPixel);
        newPixel.onmouseleave = () => {
            newPixel.style = "background-color: black";
        };
    }
}

// set up control buttons
let clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = () => {
    for(const row of document.getElementsByClassName("pixelRow")) {
        console.log("here");
        for(const pixel of row.getElementsByClassName("pixel")) {
            pixel.style = "background-color: aliceblue";
            console.log("here");
        }
    }
}