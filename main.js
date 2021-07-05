var stories = document.getElementsByClassName("story");
var briefings = document.getElementsByClassName("briefing");


function briefingShow() {
  for(var i = 0; i < stories.length; i++){
    stories[i].style.visibility = "hidden";
  }
  for (var j = 0; j < briefings.length; j++) {
    briefings[j].style.visibility = "visible";
  }
}

function storyShow() {
  for (var k = 0; k < briefings.length; k++) {
    briefings[k].style.visibility = "hidden";
  }
  for (var m = 0; m < stories.length; m++) {
    briefings[m].style.visibility = "visible";
}

