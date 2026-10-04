const VIDEO_ID = "tNP8YYhGLWg";

const readTablet = document.getElementById("readTablet");
const record = document.getElementById("record");
const playRecord = document.getElementById("playRecord");
const cinema = document.getElementById("cinema");
const blackout = document.getElementById("blackout");
const backToTablet = document.getElementById("backToTablet");

let player = null;
let playerReady = false;
let pendingPlay = false;

// Load the official YouTube IFrame Player API.
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("player", {
    videoId: VIDEO_ID,
    playerVars: {
      playsinline: 1,
      rel: 0
    },
    events: {
      onReady: () => {
        playerReady = true;
        if (pendingPlay) {
          pendingPlay = false;
          player.playVideo();
        }
      },
      onAutoplayBlocked: () => {
        // If a browser blocks scripted playback, leave the player visible
        // so the visitor can press YouTube's play button.
        blackout.classList.remove("active");
      }
    }
  });
};

readTablet.addEventListener("click", () => {
  record.classList.add("visible");
  record.setAttribute("aria-hidden", "false");
  record.scrollIntoView({ behavior: "smooth", block: "center" });
});

playRecord.addEventListener("click", () => {
  // User interaction starts the transition and the YouTube playback.
  blackout.classList.add("active");

  window.setTimeout(() => {
    cinema.classList.add("visible");
    cinema.setAttribute("aria-hidden", "false");

    window.setTimeout(() => {
      blackout.classList.remove("active");

      if (playerReady) {
        player.playVideo();
      } else {
        pendingPlay = true;
      }
    }, 700);
  }, 950);
});

backToTablet.addEventListener("click", () => {
  if (playerReady) player.pauseVideo();
  cinema.classList.remove("visible");
  cinema.setAttribute("aria-hidden", "true");
});
