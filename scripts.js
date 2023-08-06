const MAX_WIDTH = 100;
const MAX_HEIGHT = 100;

let cur_width = 40;
let cur_height = 20;
let cur_bg = 0;
let mode = "black";

// helper functions
function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// set up screen
function resetScreen() {
    let screen = document.getElementById('screen');

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

    for (let i = 0; i < cur_height; i++) {
        let newNode = document.createElement("div");
        newNode.className = "pixelRow";
        screen.appendChild(newNode);
        for (let j = 0; j < cur_width; j++) {
            let newPixel = document.createElement("div");
            newPixel.className = "pixel";
            newPixel.style.backgroundColor = "aliceblue";
            
            newPixel.style.width = (950 / cur_width) + "px";
            newPixel.style.height = (400 / cur_height) + "px";
            newNode.appendChild(newPixel);
            newPixel.onmouseleave = () => {
                if (mode == "black")
                    newPixel.style.backgroundColor = "rgb(0,0,0)";
                if (mode == "rbw")
                    newPixel.style.backgroundColor = "rgb(" + randomNum(0, 255) + ", " + randomNum(0, 255) + ", " + randomNum(0, 255) + ")";
                if (mode == "faded") {
                    if (newPixel.style.backgroundColor == "aliceblue") {
                        newPixel.style.backgroundColor = "rgb(240,248,255)";
                    }
                    split = newPixel.style.backgroundColor.split("(")[1].split(")")[0].split(",");
                    newPixel.style.backgroundColor = "rgb(" + (split[0] - 20) + "," + (split[1] - 20) + "," + (split[2] - 20) + ")";
                }
            };
        }
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

document.getElementById('resButton').onclick = () => {
    answer = prompt("Enter two numbers (ex: \"40 40\")");
    console.log(answer);
    answer = answer.split(" ");
    cur_width = Math.min(answer[0], MAX_WIDTH);
    cur_height = Math.min(answer[1], MAX_HEIGHT);

    resetScreen();
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
    else if (mode == "faded") {
        mode = "black";
        document.getElementById("mode").textContent = "☆ Mode: Black ☆";

    } else {
        mode = "faded"
        document.getElementById("mode").textContent = "☆ Mode: Shade ☆";

    }
}

resetScreen();