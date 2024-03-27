const MAX_WIDTH_IN_PX = 960;

const contentDiv = document.getElementById("content");

const setGridSize = () => {
    const gridSize = prompt("Grid size:", 16);
    const numberGridSize = parseInt(gridSize);

    if (numberGridSize && numberGridSize <= 100 && numberGridSize > 0) {
        removeGrid();
        makeGrid(parseInt(gridSize));
    } else {
        alert("Select a number between 1 and 100");
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
            square.style.width = (MAX_WIDTH_IN_PX / squares) + "px";
            square.style.height = (MAX_WIDTH_IN_PX / squares) + "px";
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
