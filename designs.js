/**
* The following code 
*prevents default by submit button to redirect it to the makeGrid function
*clears canvas for new table, gets hieght and width per user input
*/

$("#sizePicker").on("submit",function(event){
  event.preventDefault(); //
  $("table").children().remove()//
  const H=$("#inputHeight").val();
  const W=$("#inputWeight").val();
  makeGrid(H, W);
});

/**
* The following code
*describes how the table is created by user input
*gets the color from user input
*/
function makeGrid(x, y) {
for(var r=0;r<x;r++){
  $("#pixelCanvas").append("<tr id=tableRow"+r+"></tr>") //creates rows
  for(var c=0;c<y;c++){
    $("#tableRow"+r).append("<td></td>")//creates columns in the row created above
  }
};
$("td").click(function(){
  const COLOR = $("#colorPicker").val(); 

  if ($(this).attr("style")){
    $(this).removeAttr("style");
  }else{
    $(this).css("background-color",COLOR)//adds color to the canvas 
  }
});

}
