// Pixel Art Maker project by Mila K-L
// January 2018

// Variables
const defaultCanvasHeight = 25;
const defaultCanvasWidth = 35;
var selectedColour = $("#colorPicker").val();
var pixelCanvas = $("#pixelCanvas");
var isPointerDown = false;

// Events
// Initial Canvas
$(document).ready(function() {
  makeGrid(defaultCanvasHeight, defaultCanvasWidth);
});

// Draw when dragging
pixelCanvas.mousedown(function() {
  isPointerDown = true;
});

pixelCanvas.mouseup(function() {
  isPointerDown = false;
});

pixelCanvas.mouseleave(function() {
  isPointerDown = false;
});

// Draw when click
pixelCanvas.on("click", "td", function(event) {
  event.preventDefault();
  colourCell($(this));
});

// Download your Art
$("#downloadButton").click(function() {
  html2canvas(document.querySelector("#pixelCanvas")).then(canvas => {

    let link = document.createElement('a');
    link.download = "YourPixelMasterpiece.png";
    link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.click();
  });
});

// Clear cell
pixelCanvas.on("dblclick", "td", function(event) {
  var cell = $(this);
  cell.css("background", "");
});

// Selecting colour
$("#colorPicker").on("change", function() {
  selectedColour = $("#colorPicker").val();

});

// Show grid checkbox checked/unchecked
$('#my-checkbox').click(function() {
  updateGridBorders();
})

// Functions
// Creating a grid
function makeGrid(rows, columns) {
  if (rows < 2 || columns < 2) {
    alert("Please provide Grid Size");
    return;
  }

  clearGrid();
  for (var i = 0; i < rows; i++) {
    var tr = document.createElement('tr');
    pixelCanvas.append(tr);
    for (var j = 0; j < columns; j++) {
      var td = document.createElement('td');
      tr.append(td);
      td.addEventListener("pointerenter", function() {
        if (isPointerDown) {
          colourCell($(this));
        }

      });
    }
  }
  updateGridBorders();
}

// Clear grid
function clearGrid() {
  pixelCanvas.empty();
}

// Creating grid based on user selection
$("#sizePicker").submit(function(event) {

  var height = $("#input_height").val();
  var width = $("#input_width").val();
  makeGrid(height, width);
  event.preventDefault();

});

// Colouring cells
function colourCell(cell) {
  cell.css("background", selectedColour);
}

// Show/hide Grid inside Canvas
function updateGridBorders() {
  var checkBox = $("#my-checkbox");
  if (checkBox.is(":checked")) {
    pixelCanvas.find("td").css({"border-width": "1px", "height": "20px", "width": "20px"});
  } else {
    pixelCanvas.find("td").css({"border-width": "0px", "height": "21px", "width": "21px"});
  }
}
