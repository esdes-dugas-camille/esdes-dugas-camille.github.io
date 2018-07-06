
var lineDrawing = anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: 200,
    duration: 1500,
    complete: function() {
      var paths = document.querySelectorAll('path');
      for (var i = 0; paths.length; i++) {
        paths[i].classList.add('show');
      }
      
    }
    //direction: 'alternate',
    // loop: true
  });


  var timeline = anime.timeline();
  timeline.add ({
      targets : 'path',
      opacity: 1,
      delay: 1000
  });

  timeline.add({
    targets : 'path',
    strokeWidth : [1, 2],
  })
  
  