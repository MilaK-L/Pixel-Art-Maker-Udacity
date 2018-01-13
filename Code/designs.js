// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var isPointerDown = false;
$("#pixelCanvas").mousedown(function(ev) {
  isPointerDown = true;
});

$("#pixelCanvas").mouseup(function(ev) {
  isPointerDown = false;
});

function makeGrid(rows, columns) {
  for (var i = 0; i < rows; i++) {
    var tr = document.createElement('tr');
    $("#pixelCanvas").append(tr);
    for (var j = 0; j < columns; j++) {
      var td = document.createElement('td');
      tr.append(td);
      td.addEventListener("pointerenter", function(ev) {
        if (isPointerDown === true) {
          colourCell($(this));
        }

      });
    }
  }
}

function clearGrid() {
  $("#pixelCanvas").empty();
}

$("#sizePicker").submit(function(event) {
  console.log("Size picker called");
  clearGrid();
  var height = $("#input_height").val();
  var width = $("#input_width").val();
  makeGrid(height, width);
  event.preventDefault();

});

function colourCell(cell) {
  cell.css("background", selectedColour);
}

$("#pixelCanvas").on("click", "td", function(event) {
  event.preventDefault();
  colourCell($(this));
});

var defaultColour = "green";
var selectedColour = $("#colorPicker").val();

$("#colorPicker").on("change", function(event) {
  selectedColour = $("#colorPicker").val();

});
