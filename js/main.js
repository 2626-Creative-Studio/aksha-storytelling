$(function () {

  var master = new TimelineMax();


  (function arrowAnimation() {
    var tl1 = new TimelineMax();
    tl1.to('#arrow', 0.5, {
      y: '-5%',
      yoyo: true,
      repeat: -1
    });
    return tl1;
  }());

  function frame1to4() {
    var tl = new TimelineMax();

    tl
      .staggerFrom(
        [
          '#f1-house3',
          '#f1-tree2',
          '#f1-tree3',
          '#f1-house6',
          '#f1-house1',
          '#f1-tree1',
          '#f1-tree4',
          '#f1-house2',
          '#f1-house5',
          '#f1-tree5',
          '#f1-tree6',
          '#f1-tree7',
          '#f1-house4'
        ], 1, {
          opacity: 0,
          scale: 0.5,
          transformOrigin: 'center center',
          ease: Elastic.easeOut.config(1, 0.5)
        }, 0.15);

    tl
      .fromTo('#f1-text1', 1, {
        opacity: 0,
        transformOrigin: 'center center',
        scale: 0.5
      }, {
        opacity: 1,
        scale: 1
      }, '-=2.5')
      .set('#f1-text1', {
        opacity: 0
      }, '+=1');

    tl
      .fromTo('#f2-text1', 1, {
        opacity: 0,
        transformOrigin: 'center center',
        scale: 0.5
      }, {
        opacity: 1,
        scale: 1
      })
      .from('#f2-woman1', 1, {
        opacity: 0.5,
        x: -475
      })

      .fromTo('#f2-text2', 1, {
        opacity: 0,
        transformOrigin: 'center center',
        scale: 0.5
      }, {
        opacity: 1,
        scale: 1
      })
      .from('#f2-woman2', 1, {
        opacity: 0.5,
        x: $(window).width() + 50
      }, '-=1')
      .from('#f2-woman3', 1, {
        opacity: 0.5,
        x: $(window).width() + 50
      }, '-=0.8')
      .from('#f2-woman4', 1, {
        opacity: 0.5,
        x: $(window).width() + 50
      }, '-=0.6')

      .set('#f2-text1', {
        opacity: 0
      }, '+=1')
      .set('#f2-text2', {
        opacity: 0
      })
      .set('#f2-woman1', {
        opacity: 0
      })
      .set('#f2-woman2', {
        opacity: 0
      })
      .set('#f2-woman3', {
        opacity: 0
      })
      .set('#f2-woman4', {
        opacity: 0
      });

    tl
      .fromTo('#f3-text1', 1, {
        opacity: 0,
        transformOrigin: 'center center',
        scale: 0.5
      }, {
        opacity: 1,
        scale: 1
      })

      .from('#f3-woman1', 1, {
        opacity: 0,
        x: -450
      }, '+=0')

      .from('#f3-woman2', 1, {
        opacity: 0,
        x: $(window).width() + 50
      }, '-=1')



      .set('#f3-text1', {
        opacity: 0
      }, '+=1')
      .set('#f3-woman1', {
        opacity: 0
      })
      .set('#f3-woman2', {
        opacity: 0
      });

    tl.to('#bg1-3', 0.5, {
        y: $(window).height() + 50
      }, '+=0.5')
      .set('#bg1-3', {
        display: 'none'
      });

    // Frame 04
    tl.from('#f4-ground1', 1, {
        y: $(window).height() + 50
      }, '-=1')
      .staggerFrom(
        [
          '#f4-tree1',
          '#f4-tree4',
          '#f4-house1',
          '#f4-tree3',
          '#f4-tree5',
          '#f4-tree2',
        ], 1, {
          opacity: 0,
          scale: 0.5,
          transformOrigin: 'center center',
          ease: Elastic.easeOut.config(1, 0.5)
        }, 0.15
      )
      .from('#f4-woman1', 1, {
        opacity: 0,
        x: -450
      }, '+=0')

      .from('#f4-woman2', 1, {
        opacity: 0,
        x: $(window).width() + 100
      }, '-=1')

    return tl;
  }


  // Adding Animation to the master Timeline 
  master.add(frame1to4());

  // ScrollMagic 
  var ctrl = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
      triggerElement: '#scene-01',
      duration: 5000,
      triggerHook: 0,
      reverse: true
    })
    .setTween(master)
    .setPin('#scene-01')
    .addIndicators()
    .addTo(ctrl);

})