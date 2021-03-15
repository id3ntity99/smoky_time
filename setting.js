const form = document.querySelector(".js-form");
const input = form.querySelector("#value");
const save = form.querySelector("#saveBtn");
const clockForm = document.querySelector("#clock-form");
const start = document.querySelector("#startBtn");

const USER_TIME = "Interval";
const SHOWING_CN = "showing";
const REMOVE = "remove";

function saveValue(text) {
  localStorage.setItem(USER_TIME, text);
}

function handleSubmit(event) {
  event.preventDefault();
  form.style = "display:none";
  const currentValue = input.value;
  saveValue(currentValue);
}

function askForTime() {
  form.classList.add(SHOWING_CN);
  save.addEventListener("click", handleSubmit);
}

//====================Timer Function============================================
var time = localStorage.getItem(USER_TIME);
var min = "";
var sec = "";

var timer = setInterval(function () {
  min = parseInt(time / 60);
  sec = time % 60;
  document.getElementById("clock").innerText = min + ":" + sec;
  time--;
  if (time < 0) {
    clearInterval(timer);
    document.getElementById("clock").innerText = "Time Over";
  }
}, 1000);

//===================Timer Function===============================================

function handleStart(event) {
  event.preventDefault();
  timer;
}

function showTimer() {
  form.style = "display:none";
  clockForm.classList.add(SHOWING_CN);
  start.addEventListener("click", handleStart);
}

function loadTime() {
  const currentTime = localStorage.getItem(USER_TIME);
  if (currentTime === null) {
    askForTime();
  } else {
    showTimer();
  }
}

function init() {
  loadTime();
}

init();
