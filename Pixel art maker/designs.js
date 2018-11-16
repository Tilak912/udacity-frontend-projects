let rows = document.getElementById("inputHeight");
let cols = document.getElementById("inputWeight");
let table = document.getElementById("pixelCanvas");

document.getElementById("sizePicker").onsubmit = function(event) {
    event.preventDefault();
    delete_Grid();
    makeGrid();
};

//function for making grid:
function makeGrid() {
    for (var i = 0; i < rows.value; i++) {
        const r = table.insertRow(i);
        for (var j = 0; j < cols.value; j++) {
            const c = r.insertCell(j);
            c.addEventListener("click", fill_color);
        }
    }
}

//function for filling color:
function fill_color() {
    this.setAttribute("style", `background-color: ${document.getElementById("colorPicker").value}`);
}

//function to rebuild grid:
function delete_Grid() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}
