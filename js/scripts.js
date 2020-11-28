$(document).ready(function() {
  const x = document.getElementById("myAudio"); // you need to use getElementById as using jQuery here was not working. .loop at the end of this should make the audio loop, but not working yet
  const base = document.getElementById("base")
  const sound1 = document.getElementById("sound1");
  const sound2 = document.getElementById("sound2");
  const sound3 = document.getElementById("sound3");
  const sound4 = document.getElementById("sound4");
  const sound5 = document.getElementById("sound5");
  const array = [sound1, sound2, sound3, sound4, sound5];
  

  // Play is triggered when mouse is over image
  $("#picture").mouseenter(function() { 
    base.play(); 
    
  });

  $("#picture").click(function() { 
    let rando = Math.floor(Math.random() * Math.floor(4));
    array[rando].play();
  });
  
  // Pause is triggered when mouse leaves image
  $("#picture").mouseleave(function() { 

  });


  // Play and Pause can be triggered with Play/Pause buttons
  $("#play-btn").click(function() { 
    sound1.loop.play(); 
  });
  $("#pause-btn").click(function() { 
    x.pause(); 
  });
});