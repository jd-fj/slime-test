$(document).ready(function() {
  var x = $("#myAudio"); 

  $("#play-btn").click(function playAudio() { 
    x.play(); 
  });

  $("#pause-btn").click(function pauseAudio() { 
    x.pause(); 
  });
});