

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax({onUpdate:updatePercentage});
var tl3 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.to('.clip1', 2, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)",
  backgroundSize: "120%"
});

tl2.to('.clip2', 2, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)",
  backgroundSize: "120%"
});

tl3.to('.clip3', 2, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)",
  backgroundSize: "120%"
});

const scene = new ScrollMagic.Scene({
  triggerElement: ".clip-box",
  triggerHook: "1",
  duration: "100%"
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
  duration: "100%"
})
//.setPin(".clip-box2")
.setTween(tl2)
.addTo(controller);

function updatePercentage() {
  tl2.progress();
}

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".clip-box3",
  triggerHook: "1",
  duration: "100%"
})
//.setPin(".clip-box3")
.setTween(tl3)
.addTo(controller);

function updatePercentage() {
  tl3.progress();
}
