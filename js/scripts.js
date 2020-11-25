$(document).ready(function() {
  var x = document.getElementById("myAudio");
  
  $("#play-btn").click(function() { 
    x.play(); 
  });

  $("#pause-btn").click(function() { 
    x.pause(); 
  });
});