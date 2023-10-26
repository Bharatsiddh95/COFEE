
const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});




function videoconAnimation(){
   var video =  document.querySelector("#video-container")
   var play = document.querySelector("#play")
 video.addEventListener("mouseenter",function(){
   gsap.to(play,{
    scale: 1,
    opacity:1
   })
  })
  

  video.addEventListener("mouseleave" , function(){
   
   gsap.to(play,{
      opacity:0,
      scale:0,
   });
  });
  

  video.addEventListener("mousemove" , function(dets){
   gsap.to(play,{
      left:dets.x - 70,
      top:dets.y -80
   });
  });





}
videoconAnimation();

function loadingAnimation(){
   gsap.from("#page1 h1",{
      y:100,
      opacity:0,
      delay:0.5,
      duration:0.8,
      stagger:0.3
   
   })
   gsap.from("#page1 #video-container",{
      y:100,
      opacity:0,
      delay:1.5,
      duration:0.5,
      
   
   })
}
loadingAnimation();
document.addEventListener("mousemove" , function(dets){
   gsap.to("#cursor", {
      left:dets.x,
      top:dets.y
   })
})

