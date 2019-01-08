$(function () {

  var master = new TimelineMax();

  (function arrowAnimation() {
    var tl = new TimelineMax();
    tl.to('#arrow', 0.5, {
      y: '-5%',
      yoyo: true,
      repeat: -1
    });
    return tl;
  }());

  function frame1to4() {
    var tl = new TimelineMax();

    // Set bg opacity of bg5-12 to 0
    tl.set('#frame5to12 #bg', {
      display: 'none'
    })

    // Background Animation
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

    tl.to('#bg1-3', 1, {
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

    tl
      .to('#f4-woman1', 1, {
        opacity: 0
      })
      .to('#f4-woman2', 1, {
        opacity: 0
      }, '-=1')
      .to('#bg4', 1, {
        opacity: 0
      })

    return tl;
  }

  function frame5to12() {
  var tl = new TimelineMax();
  // Clock Animation
  TweenMax.from('#clock-hand3', 20, {
    rotation: '360_ccw',
    transformOrigin: "top 50%",
    repeat: -1,
    ease: 'linear'
  });

  // Set Frames opacity to 0
  tl
    .set('#f11-text1, #f12-text1', {
      opacity: 0
    });

  // Background Animation
  tl.from('#ground', 1, {
    y: $(window).height()
  })

  tl
    .from('#bed', 1, {
      x: -900
    })
    .from('#clock, #window, #rod, #curtain', 1, {
      opacity: 0
    }, '-=1')
    .from('#kitchen-window', 1, {
      x: $(window).width()
    }, '-=2')

  // Frame 5 Animation
  tl.from('#f5-text1, #f5-husband-wife', 1, {
      opacity: 0
    })
    .to('#f5-text1, #f5-husband-wife', 1, {
      opacity: 0
    }, "+=1")

  // Frame 6 Animation
  tl.from('#f6-text1, #f6-husband-wife', 1, {
      opacity: 0
    })
    .from('#f6-woman1', 1, {
      x: $(window).width() + 50
    }, '-=1')
    .to('#f6-text1, #f6-husband-wife, #f6-woman1', 1, {
      opacity: 0
    }, "+=1")

  // Frame 7 Animation
  tl.from('#f7-woman1, #f7-woman2, #f7-msgbox, #f7-text1', 1, {
      opacity: 0
    })
    .to('#f7-msgbox, #f7-text1', 1, {
      opacity: 0
    }, "+=1")


  // Frame 8 Animation
  tl.from('#f8-msgbox, #f8-text1', 1, {
      opacity: 0
    })
    .to('#f7-woman2-hand', 1, {
      rotation: '30_cw',
      transformOrigin: 'top right'
    })
    .to('#f8-msgbox, #f8-text1', 1, {
      opacity: 0
    }, "+=1")
    .to('#kitchen-window', 1, {
      x: $(window).width()
    }, '-=1')

  tl.add('test');
  
  // Frame 9 Animation
  tl.from('#f9-text1', 1, {
      opacity: 0
    })
    .from('#f9-think-bubble', 1, {
      scale: 0,
      transformOrigin: 'center center'
    }, '-=1')
    .to('#f9-text1, #f9-think-bubble', 1, {
      opacity: 0
    }, '+=1')

  // Frame 10 Animation
  tl.from('#f10-text1', 1, {
      opacity: 0
    })
    .from('#f10-think-bubble', 1, {
      scale: 0,
      transformOrigin: 'center center'
    }, '-=1')
    .to('#f10-think-bubble', 1, {
      opacity: 0
    }, '+=1')
  
  // Frame 11 Animation
  tl.from('#f11-think-bubble', 1, {
      scale: 0,
      transformOrigin: 'center center'
    }, '-=1')
    .to('#f11-think-bubble', 1, {
      opacity: 0
    }, '+=1')
  
  // Frame 12 Animation
  tl.from('#f12-think-bubble', 1, {
      scale: 0,
      transformOrigin: 'center center'
    }, '-=1')
    .to('#f12-think-bubble', 1, {
      //opacity: 0
    }, '+=1')

  //Play
  //tl.play('test');

    return tl;
  }

  // Adding Animation to the master Timeline 
  master.add(frame1to4());
  master.add(frame5to12());
  master.play('test');

  // ScrollMagic 
    var ctrl = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: '#frames',
        duration: 13000,
        triggerHook: 0,
        reverse: true
      })
      .setTween(master)
      .setPin('#frames')
      .addIndicators()
      .addTo(ctrl);

});