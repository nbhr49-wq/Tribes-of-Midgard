const VIDEO_ID="tNP8YYhGLWg";
const blackout=document.getElementById("blackout");
const tablet=document.getElementById("tablet");
const record=document.getElementById("record");
const video=document.getElementById("video");
const playerHost=document.getElementById("player");
let player=null, ready=false, queued=false;

const tag=document.createElement("script");
tag.src="https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

window.onYouTubeIframeAPIReady=()=>{
  player=new YT.Player("player",{
    videoId:VIDEO_ID,
    playerVars:{playsinline:1,rel:0},
    events:{
      onReady:()=>{ready=true;if(queued){queued=false;player.playVideo();}},
      onAutoplayBlocked:()=>blackout.classList.remove("on")
    }
  });
};

function focusPanel(el){
  el.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});
  el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
}

document.getElementById("touchTablet").onclick=()=>focusPanel(tablet);
document.getElementById("readRecord").onclick=()=>focusPanel(record);

document.getElementById("playRecord").onclick=()=>{
  blackout.classList.add("on");
  setTimeout(()=>{
    focusPanel(video);
    setTimeout(()=>{
      blackout.classList.remove("on");
      if(ready) player.playVideo(); else queued=true;
    },750);
  },900);
};

document.getElementById("back").onclick=()=>{
  if(ready) player.pauseVideo();
  focusPanel(record);
};
