
var lineDrawing = anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: 200,
    duration: 1500,
    direction: 'alternate',
    loop: true
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
  
  