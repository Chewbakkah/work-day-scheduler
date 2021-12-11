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

savedClicked = function(event){
    //NO IDEA WHAT I'M DOING HERE GET HELP
    let savedTask = event.target.previousSibling.textContent;
    console.log(savedTask);
    savedArray.push(savedTask);
}

saveTasks = function(){
    localStorage.setItem("tasks", JSON.stringify(savedArray));
}

loadTasks = function(){
    let savedTasks = localStorage.getItem("tasks");
    if (!savedTasks){
        return false;
    }
    savedTasks = JSON.parse(savedTasks);
    for (i=0; i< savedTasks.length; i++){
        //populate rows with info
        console.log("you still need to put tasks back in!");
    }
}

// $(".saveBtn").on("click", function () {
//   var saveHour = $(this).parent().attr("id");
//   var saveInputText = $(this).siblings(".text").val();
//   localStorage.setItem(saveHour, saveInputText);
// });

setTime();
// loadTasks();

containerEl.addEventListener("click", savedClicked(event));