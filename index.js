const contentDiv = document.getElementById("content");

const setGridSize = () => {
    const gridSize = prompt("Grid size:", 16);
    const numberGridSize = parseInt(gridSize);

    if (numberGridSize && numberGridSize < 100 && numberGridSize > 0) {
        removeGrid();
        makeGrid(parseInt(gridSize));
    } else {
        alert("Seleccione un numero correcto");
    }


}

const makeGrid = (size) => {
    const gridContainer = document.createElement("div");
    gridContainer.id = "grid";
    for (var i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.id = "row-" + i;
        row.className = "row";
        for (var j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.id = "square-" + i + "-" + j;
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
