// Animation Loader
document.addEventListener('DOMContentLoaded', () => {
  select = e => document.querySelector(e);
  selectAll = e => document.querySelectorAll(e);
  const bgloader = select('.bg-loader');
  let masterTL = gsap.timeline( { repeat: -1, repeatDelay: 3, delay: 0.5 });
  let tl = new TimelineMax();
  let sparks = gsap.utils.toArray('.spark');

  function animateLogo() {
    
    gsap.set(sparks, {
        transformOrigin: 'center center',
        scale: 0.25,
        opacity: 0
    })
    
    tl = gsap.timeline({ delay: 1 });
    tl.from('.disney', {
        opacity: 0,
        ease: 'none',
        duration: 2
    })
    .fromTo('.mask-arc', {
        drawSVG: "100% 100%",
        opacity: 0
    }, {
        drawSVG: "100%",
        delay: 0.2,
        opacity: 1,
        duration: 1,
        ease: 'power2.in'
    }, 0.5)
    .from('.glow', {
        scale: 0,
        duration: 0.7,
        ease: 'sine.in'
    }, 0.5)
    .from('.glow', {
        motionPath: {
            path: ".glow-path",
            align: ".glow-path",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        duration: 1,
        ease: 'power2.in'
    }, 0.5)
    .set('.glow', {
        opacity: 0
    }, "-=0.5")
    .from('.plus', {
        scale: 0,
        duration: 0.7,
        ease: 'elastic(1, 0.7)',
        transformOrigin: "center center"
    }, "-=0.55")
    .fromTo('.plus-glow', {
        scale: 0,
        transformOrigin: "center center",
    },{
        scale: 3.0,
        opacity: 1,
        ease: 'sine.inOut',
        duration: 0.1
    }, "-=0.70")
    .to('.plus-glow', {
        // scale: 0,
        opacity: 0,
        duration: 1.3,
        ease: 'power2'
    }, "-=0.7")
    
    return tl;
}

  function sparkle() {
      
      stl = gsap.timeline();
      
      sparks.forEach((target, i ) => {

          let tl = gsap.timeline();

          tl.set(target, {
              opacity: 1
          })
          .to(target, {
              duration: 1.5,
              physics2D: {
                  velocity: 'random(100, 400)',
                  angle:'random(360, 0)',
                  gravity: 100
              },
              scale: 0,
              opacity: 0,
              ease: 'sine'
          })
          
          stl.add(tl, 0);
      })
      return stl;
  }

  function init() {
    gsap.set(bgloader, { autoAlpha: 1 });
    masterTL.add(animateLogo()).add(sparkle(), '-=1.30');
  }

  window.onload = () => {
    init();
      // GSDevTools.create();
  };

  tl.fromTo('.bg-loader', 1,
  {width: '100%'},
  {width: '0%', delay: 5, ease: Expo.easeInOut})

  .fromTo('.bg-video', 2,
  {width: '0%', opacity: 0},
  {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')
  
  .fromTo('.logo', 0.7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.nav-list', 0.7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.nav-social', 0.7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-1', 0.7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-2', 0.7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-3', 0.7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-4', 0.7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-5', 0.7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
})


/* YouTube iFrame API
Source: https://developers.google.com/youtube/iframe_api_reference */

// Loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replaces the 'ytplayer' element with an <iframe> and YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player("ytplayer", {
		height: "560",
		width: "315",
		videoId: "sj9J2ecsSpo" //Insert your YouTube video ID
	});
}

/***********************
	THE MODAL
***********************/
var modal = document.getElementById("videoModal");
var playBtn = document.getElementById("playBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, Open the modal
playBtn.onclick = function() {
	modal.style.display = "block";
	player.playVideo();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
	player.stopVideo();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		player.stopVideo();
	}
};


/* Navigation Menu */
let mainNav=document.querySelector('.nav-list');
let navbarToggle=document.querySelector('#navbar-toggle');

navbarToggle.addEventListener('click', function(){
  if(this.classList.contains('active')){
    mainNav.style.display="none";
    this.classList.remove('active');
  }
  else {
    mainNav.style.display="flex";
    this.classList.add('active');
  }
});