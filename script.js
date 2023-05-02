const selecBox = document.getElementById("select-box");
const rockBtn = document.getElementById("rock");
const scissorBtn = document.getElementById("scissor");
const paperBtn = document.getElementById("paper");
const computerSelectedImg = document.getElementById("computerSelectedImg");
const computerSelectedText = document.getElementById("computerSelectedText");
const playerSelectedImg = document.getElementById("playerSelectedImg");
const playerSelectedText = document.getElementById("playerSelectedText");

const gameData = [
  {
    name: "rock",
    backgroundImg: "url(image/rock.png)",
  },
  {
    name: "scissor",
    backgroundImg: "url(image/scissor.png)",
  },
  {
    name: "paper",
    backgroundImg: "url(image/paper.png)",
  },
];

const getRandomComputerImage = () => {
  const randomNum = Math.floor(Math.random() * gameData.length);
  computerSelectedImg.style.backgroundImage = gameData[randomNum].backgroundImg;
  computerSelectedText.innerText = gameData[randomNum].name;
};

const selectImage = (index) => {
  playerSelectedImg.style.backgroundImage = gameData[index].backgroundImg;
  playerSelectedText.innerText = gameData[index].name;
};
const removeAllClick = () => {
  rockBtn.classList.remove("click");
  scissorBtn.classList.remove("click");
  paperBtn.classList.remove("click");
};

const addClassClick = (btn) => {
  btn.classList.add("click");
};
selecBox.addEventListener("click", (e) => {
  computerSelectedImg.style.backgroundImage = "";
  computerSelectedText.innerText = "";
  removeAllClick();
  addClassClick(e.target);
  selectImage(gameData.findIndex((data) => data.name === e.target.id));
  setTimeout(() => {
    getRandomComputerImage();
  }, 300);
});
