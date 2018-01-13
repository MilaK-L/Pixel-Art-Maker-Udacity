// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(rows, columns) {
  for (var i = 0; i < rows; i++) {
    var tr = document.createElement('tr');
    $("#pixelCanvas").append(tr);
    for (var j = 0; j < columns; j++) {
      var td = document.createElement('td');
      tr.append(td);
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
