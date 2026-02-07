let current = 0;
const screens = document.querySelectorAll(".screen");

function showScreen(index) {
  screens.forEach(s => s.classList.remove("active"));
  screens[index].classList.add("active");
}

/* ---------- START ---------- */
setTimeout(() => {
  showScreen(1);
}, 2500);

/* ---------- QUESTIONS ---------- */
const questions = [
  "Do you know you’re my favorite person? 💕",
  "Will you always stay with me? 🥺",
  "Do you love me more than chocolate? 🍫",
  "Can I be your forever? 💍"
];

let qIndex = 0;

function nextQuestion() {
  if (qIndex < questions.length - 1) {
    qIndex++;
    document.getElementById("questionText").innerText = questions[qIndex];
  } else {
    showScreen(3);
  }
}

/* ---------- GIFTS ---------- */
function chooseGift(type) {
  if (type === "bouquet") {
    alert("Flowers for the prettiest soul 🌸");
  } else {
    alert("A teddy hug because I miss you 🤍");
  }
  showScreen(4);
}
