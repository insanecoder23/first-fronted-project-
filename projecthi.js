
function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
var tl=gsap.timeline();
tl.from(".line h1",{
    y:150,
    duration:1,
    delay:0.5,
    stagger:0.5,    
});
 tl.from("#line1 h4, .line h2 ",{
    opacity:0,
    onStart:function(){
    let se=document.querySelector("#line1 h4")
  let grow=0;
setInterval(function(){
  if(grow<100){
    grow++;
    se.innerHTML=grow;
  }
},30);
 },
});

tl.to("#loader",{
   opacity:0,
  delay:4,
 duration:0.2,

});
tl.from("#page1",{
  delay:0.2,
  y:1600,
  opacity:0,
});
tl.to("#loader",{
  display:"none",
});

function cursor(){
  document.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    left:dets.x,
    top:dets.y,

  });
});
}

let doo=document.querySelector("#videoc video")
doo.addEventListener("mouseenter",function(){
  video.play()
  video.style.opacity=1; 
})

locomotive();

function sheryjsanimation(){
  Shery.imageEffect(".image-container",{
    style:5,
    // debug:true,
    gooey:true,
  });
};
let cur=document.querySelector("#videoc")
  cur.addEventListener("mousemove",function(dets){
    gsap.to("#cursor2",{
      left:dets.x-100,
      y:dets.y-100,
        
      
    });
  });
  document.addEventListener("mousemove",function(dets){
      gsap.to("#page1 img",{
        x:dets.x,
        y:dets.y
      })
  })
document.querySelector("#ide ").addEventListener("mouseenter",function(){
  gsap.to("#page1 img",{
     opacity:1,
  })
  })
  document.querySelector("#ide ").addEventListener("mouseleave",function(){
  gsap.to("#page1 img",{
     opacity:0,
  })
  })

  cursor();
    
sheryjsanimation();