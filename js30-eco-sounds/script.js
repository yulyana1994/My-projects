
let isPlay = false;
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.btn');

function playAudio() {
    audio.currentTime = 0;
    audio.play();
    isPlay=true;
    playBtn.classList.add('pause')
}

function pauseAudio() {
    audio.pause();
    isPlay=false;
    playBtn.classList.remove('pause');
 } 

 function toggelAudio(){
     if (isPlay===false){
         playAudio();
     }else{
        pauseAudio();
     }
 }

  playBtn.addEventListener('click',() =>{
    toggelAudio();
  });

  const picture = document.querySelector('.main');
  function changeImage(bird) {
      picture.style.backgroundImage = `url(./assets/img/${bird}.jpg)`;
}

function changeSound(bird){
   audio.src= `./assets/audio/${bird}.mp3`;
}

const navItems = document.querySelectorAll('[data-bird]');
navItems.forEach((navItem)=> {


navItem.addEventListener(`click`,(event)=>{
    const bird = event.target.dataset.bird;
    changeImage(bird)
    changeSound(bird)
    playAudio()
    changeClassActive(event.target) 
})})

function changeClassActive(currentNavItem){
    navItems.forEach((navItem) => navItem.classList.remove('active'));
    currentNavItem.classList.add('active');
  }
