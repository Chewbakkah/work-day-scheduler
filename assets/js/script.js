const getTimeEl = document.querySelector("#currentDay");
let containerEl = document.querySelector("#container");
let textAreaEl = document.querySelector(".text");
let saveBtnEl = document.querySelector(".saveBtn");
let row0800El = document.querySelector("#R0800");
let row0900El = document.querySelector("#R0900");
let row1000El = document.querySelector("#R1000");
let row1100El = document.querySelector("#R1100");
let row1200El = document.querySelector("#R1200");
let row1300El = document.querySelector("#R1300");
let row1400El = document.querySelector("#R1400");
let row1500El = document.querySelector("#R1500");
let row1600El = document.querySelector("#R1600");
let row1700El = document.querySelector("#R1700");
let saveBtn8El = document.querySelector("#time8save");
let saveBtn9El = document.querySelector("#time9save");
let saveBtn10El = document.querySelector("#time10save");
let saveBtn11El = document.querySelector("#time11save");
let saveBtn12El = document.querySelector("#time12save");
let saveBtn1El = document.querySelector("#time1save");
let saveBtn2El = document.querySelector("#time2save");
let saveBtn3El = document.querySelector("#time3save");
let saveBtn4El = document.querySelector("#time4save");
let saveBtn5El = document.querySelector("#time5save");
let savedArray = [];
let rowArray = [
  row0800El,
  row0900El,
  row1000El,
  row1100El,
  row1200El,
  row1300El,
  row1400El,
  row1500El,
  row1600El,
  row1700El,
];
let monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setTime = function () {
  let today = new Date();
  let date =
    monthsArray[today.getMonth()] +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let half = " AM";

  if (hour > 12) {
    hour = hour - 12;
    half = " PM";
  } else if (hour === 0) {
    hour = 12;
    half = " AM";
  } else {
    half = " AM";
  }

  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  let time = hour + ":" + minute + half;
  document.getElementById("currentDay").innerHTML =
    "<h2>" + time + "</h2>" + date;
  setTimeout(setTime, 60000);
  setRowColor();
};

setRowColor = function () {
  let now = new Date();
  let hourNow = now.getHours();
  let n = 8;
  for (i = 0; i < rowArray.length; i++) {
    if (n < hourNow) {
      rowArray[i].classList.add("past");
    } else if (n === hourNow) {
      rowArray[i].classList.add("present");
    } else {
      rowArray[i].classList.add("future");
    }
    n++;
  }
};

savedClicked8 = function (event) {
  let time8txt = document.querySelector("#time8txt");
  localStorage.setItem("time8", time8txt.textContent);
};
savedClicked9 = function (event) {
  let time9txt = document.querySelector("#time9txt");
  localStorage.setItem("time9", time9txt.textContent);
};
savedClicked10 = function (event) {
  let time8txt = document.querySelector("#time10txt");
  localStorage.setItem("time10", time10txt.textContent);
};
savedClicked11 = function (event) {
  let time11txt = document.querySelector("#time11txt");
  localStorage.setItem("time11", time11txt.textContent);
};
savedClicked12 = function (event) {
  let time12txt = document.querySelector("#time12txt");
  localStorage.setItem("time12", time12txt.textContent);
};
savedClicked1 = function (event) {
  let time1txt = document.querySelector("#time1txt");
  localStorage.setItem("time1", time1txt.textContent);
};
savedClicked2 = function (event) {
  let time2txt = document.querySelector("#time2txt");
  localStorage.setItem("time2", time2txt.textContent);
};
savedClicked3 = function (event) {
  let time3txt = document.querySelector("#time3txt");
  localStorage.setItem("time3", time3txt.textContent);
};
savedClicked4 = function (event) {
  let time4txt = document.querySelector("#time4txt");
  localStorage.setItem("time4", time4txt.textContent);
};
savedClicked5 = function (event) {
  let time5txt = document.querySelector("#time5txt");
  localStorage.setItem("time5", time5txt.textContent);
};



loadTasks = function () {
  document.getElementById('time8txt').textContent = localStorage.getItem('time8');
  document.getElementById('time9txt').textContent = localStorage.getItem('time9');
  document.getElementById('time10txt').textContent = localStorage.getItem('time10');
  document.getElementById('time11txt').textContent = localStorage.getItem('time11');
  document.getElementById('time12txt').textContent = localStorage.getItem('time12');
  document.getElementById('time1txt').textContent = localStorage.getItem('time1');
  document.getElementById('time2txt').textContent = localStorage.getItem('time2');
  document.getElementById('time3txt').textContent = localStorage.getItem('time3');
  document.getElementById('time4txt').textContent = localStorage.getItem('time4');
  document.getElementById('time5txt').textContent = localStorage.getItem('time5');
};

// $(".saveBtn").on("click", function () {
//   var saveHour = $(this).parent().attr("id");
//   var saveInputText = $(this).siblings(".text").val();
//   localStorage.setItem(saveHour, saveInputText);
// });

setTime();
loadTasks();
// loadTasks();

saveBtn8El.addEventListener("click", savedClicked8);
saveBtn9El.addEventListener("click", savedClicked9);
saveBtn10El.addEventListener("click", savedClicked10);
saveBtn11El.addEventListener("click", savedClicked11);
saveBtn12El.addEventListener("click", savedClicked12);
saveBtn1El.addEventListener("click", savedClicked1);
saveBtn2El.addEventListener("click", savedClicked2);
saveBtn3El.addEventListener("click", savedClicked3);
saveBtn4El.addEventListener("click", savedClicked4);
saveBtn5El.addEventListener("click", savedClicked5);
