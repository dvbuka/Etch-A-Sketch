const MAX_SIZE = 16;
let cur_bg = 0;
let mode = "black";

// helper functions
function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// set up screen
let screen = document.getElementById('screen');
console.log(screen);
for (let i = 0; i < MAX_SIZE; i++) {
    let newNode = document.createElement("div");
    newNode.className = "pixelRow";
    screen.appendChild(newNode);
    for (let j = 0; j < MAX_SIZE; j++) {
        let newPixel = document.createElement("div");
        newPixel.className = "pixel";
        newNode.appendChild(newPixel);
        newPixel.onmouseleave = () => {
            if (mode == "black")
                newPixel.style.backgroundColor = "black";
            if (mode == "rbw")
                newPixel.style.backgroundColor = "rgb(" + randomNum(0, 255) + ", " + randomNum(0, 255) + ", " + randomNum(0, 255) + ")";
        };
    }
}

// set up control buttons
let clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = () => {
    for (const row of document.getElementsByClassName("pixelRow")) {
        for (const pixel of row.getElementsByClassName("pixel")) {
            pixel.style = "background-color: aliceblue";
        }
    }
};

//skins
document.getElementById('skin').onclick = rotateSkin;
function rotateSkin() {
    let caseDiv = document.getElementById('etchCase');
    if (cur_bg == 0) {
        caseDiv.style.backgroundImage = "url(images/mountain.jpeg)";
        caseDiv.style.backgroundSize = "900px";
        cur_bg++;
    } else {
        caseDiv.style.backgroundImage = "";
        caseDiv.style.backgroundSize = "";
        caseDiv.style.color = "rgb(232, 181, 181)";
        cur_bg = 0;
    }
};

//modes
document.getElementById('mode').onclick = rotateMode;
function rotateMode() {
    if (mode == "black") {
        mode = "rbw";
        document.getElementById("mode").textContent = "☆ Mode: Color ☆";
    }
    else {
        mode = "black";
        document.getElementById("mode").textContent = "☆ Mode: Black ☆";

    }
}