const MAX_WIDTH_IN_PX = 960;

const contentDiv = document.getElementById("content");

const randomizeCheckbox = document.getElementById("randomize-checkbox");
const whiteningCheckbox = document.getElementById("darkening-checkbox");

let gridSize = 16;

let randomizeColor = false;
let progressiveWhitening = false;

let baseColor = "red";
let hoverColor = "blue";

randomizeCheckbox.addEventListener("click", () => {
    randomizeColor = !randomizeColor;
})

whiteningCheckbox.addEventListener("click", () => {
    progressiveWhitening = !progressiveWhitening;
})

// https://stackoverflow.com/questions/1484506/random-color-generator
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const setGridSize = () => {
    const size = prompt("Grid size:", 16);
    const numberSize = parseInt(size);

    if (numberSize && numberSize <= 100 && numberSize > 0) {
        gridSize = numberSize;
        removeGrid();
        makeGrid(parseInt(size));
    } else {
        alert("Select a number between 1 and 100");
    }
}

const setBaseColor = () => {
    const color = prompt("Base color", baseColor);
    if (color) {
        baseColor = color;
        removeGrid();
        makeGrid(gridSize);
    }
}

const setHoverColor = () => {
    const color = prompt("Hover color:", hoverColor);
    if (color) {
        hoverColor = color;
    }
}

const makeGrid = (squares) => {
    const gridContainer = document.createElement("div");
    gridContainer.id = "grid";
    for (var i = 0; i < squares; i++) {
        const row = document.createElement("div");
        row.id = "row-" + i;
        row.className = "row";
        for (var j = 0; j < squares; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.id = "square-" + i + "-" + j;
            square.style.backgroundColor = baseColor;
            square.style.width = (MAX_WIDTH_IN_PX / squares) + "px";
            square.style.height = (MAX_WIDTH_IN_PX / squares) + "px";
            square.style.opacity = 1.0;
            square.addEventListener("mouseover", () => {
                if (randomizeColor) {
                    square.style.backgroundColor = getRandomColor();
                } else {
                    square.style.backgroundColor = hoverColor;
                }

                if (progressiveWhitening) {
                    square.style.opacity = parseFloat(square.style.opacity) - 0.1;
                }
            })
            row.appendChild(square);
        }
        gridContainer.append(row);
    }
    contentDiv.append(gridContainer);
}

const removeGrid = () => {
    contentDiv.removeChild(document.getElementById("grid"));
}

makeGrid(16);
