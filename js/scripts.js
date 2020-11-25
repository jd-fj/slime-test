$(document).ready(function() {
  var x = document.getElementById("myAudio").loop; // you need to use getElementById as using jQuery here was not working. Also .loop is optional and used here to loop audio

  // Play is triggered when mouse is over image
  $("#picture").mouseenter(function() { 
    x.play(); 
  });
  
  // Pause is triggered when mouse leaves image
  $("#picture").mouseleave(function() { 
    x.pause(); 
  });


  // Play and Pause can be triggered with Play/Pause buttons
  $("#play-btn").click(function() { 
    x.play(); 
  });
  $("#pause-btn").click(function() { 
    x.pause(); 
  });
});