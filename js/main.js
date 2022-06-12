

  var tl = new TimelineMax({onUpdate:updatePercentage});
  var tl2 = new TimelineMax({onUpdate:updatePercentage});
  var tl3 = new TimelineMax({onUpdate:updatePercentage});
  const controller = new ScrollMagic.Controller();

    tl.to('.clip1', 2, {clipPath: "polygon(50% 55%, 100% 50%, 50% 100%, 10% 70%, 100% 70%, 70% 0%, 0 70%, 0% 50%, 40% 60%, 20% 15%)"});
    tl2.to('.clip2', 2, {clipPath: "polygon(90% 80%, 10% 90%, 33% 5%, 100% 20%, 17% 70%, 20% 11%, 100% 7%, 60% 11%, 30% 90%, 20% 100%)"});
    tl3.to('.clip3', 2, {clipPath: "polygon(0% 0%, 90% 40%, 40% 0%, 33% 70%, 17% 70%, 20% 61%, 10% 79%, 40% 100%, 55% 5%, 100% 90%)"});

  const scene = new ScrollMagic.Scene({
    triggerElement: ".clip-box",
    triggerHook: "1",
    duration: "200%"
  })
  //.setPin(".clip-box")
  .setTween(tl)
  .addTo(controller);

  function updatePercentage() {
    tl.progress();
  }

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".clip-box2",
    triggerHook: "1",
    duration: "200%"
  })
  //.setPin(".clip-box2")
  .setTween(tl2)
  .addTo(controller);

  function updatePercentage() {
    tl.progress();
  }

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".clip-box3",
    triggerHook: "1",
    duration: "200%"
  })
  //.setPin(".clip-box3")
  .setTween(tl3)
  .addTo(controller);

  function updatePercentage() {
    tl3.progress();
  }
