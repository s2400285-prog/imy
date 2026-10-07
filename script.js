const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

/* MUSIC */

window.addEventListener("load", () => {
  music.volume = 0.35;

  music
    .play()
    .then(() => {
      musicPlaying = true;
      musicBtn.innerHTML = "♫";
    })
    .catch(() => {
      musicPlaying = false;
      musicBtn.innerHTML = "▶";
    });
});

musicBtn.addEventListener("click", () => {
  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    musicBtn.innerHTML = "▶";
  } else {
    music.play();
    musicPlaying = true;
    musicBtn.innerHTML = "♫";
  }
});

/* OPEN LETTER */

function openLetter() {
  const letter = document.getElementById("letter");

  letter.classList.remove("hidden");

  letter.scrollIntoView({
    behavior: "smooth",
  });

  createHearts(15);

  if (!musicPlaying) {
    music
      .play()
      .then(() => {
        musicPlaying = true;
        musicBtn.innerHTML = "♫";
      })
      .catch(() => {});
  }
}

/* LOVE BUTTON */

function showLove() {
  createHearts(20);

  alert(
    "Julie ♡\n\n" +
      "If you are reading this...\n" +
      "just know that someone is smiling right now because of you. ❤️",
  );
}

/* MESSAGE BUTTONS */

function showMessage(number) {
  const box = document.getElementById("messageBox");

  if (number === 1) {
    box.innerHTML =
      "I miss you because after our date, I realized how comfortable and happy I felt around you. I miss your presence, your smile, our conversations, and even the little moments that seemed ordinary at the time. ♡";
  }

  if (number === 2) {
    box.innerHTML =
      "I love your smile, your personality, your little reactions, the way you talk, and the little things that make you uniquely you. But most of all, I love how being around you makes my heart feel. 🌸";
  }

  if (number === 3) {
    box.innerHTML =
      "My heart keeps saying the same thing over and over: 'I want to know her more. I want to make her happy. I want to be there for her.' And somehow, your name keeps appearing in almost every thought. 🥺❤️";
  }

  if (number === 4) {
    box.innerHTML =
      "I don't know exactly where our story will take us, but I know that I am grateful that I met you. I don't want to rush our story. I just want to keep making beautiful memories with you. 💌";
  }

  box.classList.remove("message-animation");

  setTimeout(() => {
    box.classList.add("message-animation");
  }, 10);

  createHearts(8);
}

/* QUESTION ANSWERS */

function yesAnswer() {
  document.getElementById("answer").innerHTML =
    "Then come here, Julie... because I have something to tell you. ♡<br>" +
    "I'm really, really falling for you. ❤️";

  createHearts(25);
}

function maybeAnswer() {
  document.getElementById("answer").innerHTML =
    "That's okay. We don't have to rush anything. 🌸<br>" +
    "I'll just keep getting to know you, one beautiful day at a time. ♡";

  createHearts(10);
}

/* FLOATING HEARTS */

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  const hearts = ["♥", "♡", "❤", "💕", "💗"];

  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 20 + 12 + "px";

  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

function createHearts(amount) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 100);
  }
}

/* CONTINUOUS SMALL HEARTS */

setInterval(() => {
  if (Math.random() > 0.55) {
    createHeart();
  }
}, 1300);

/* CLICK ANYWHERE TO START MUSIC */

document.addEventListener(
  "click",
  () => {
    if (!musicPlaying) {
      music
        .play()
        .then(() => {
          musicPlaying = true;
          musicBtn.innerHTML = "♫";
        })
        .catch(() => {});
    }
  },
  { once: true },
);
