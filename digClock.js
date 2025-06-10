
let ogaDate = new Date();

let __firstAnimSeconds;
let __secondAnimSeconds;
let __firstAnimMinutes;
let __secondAnimMinutes;


let $__firstAnimSeconds = ogaDate.getMinutes() - 1;
let $__secondAnimSeconds = ogaDate.getMinutes() - 1;
let $__firstAnimMinutes = ogaDate.getMinutes() - 1
let $__secondAnimMinutes = ogaDate.getMinutes() - 1;
let $__animHour = ogaDate.getHours() - 1;

let GMinutes = ogaDate.getMinutes() - 1;
let GSeconds = ogaDate.getMinutes() - 1;


function animClockFun(x){
  
  return x.toString();
};

function generalClock() {
  let generalTime = new Date();
  let hour = generalTime.getHours();
  let minutes = generalTime.getMinutes();
  let seconds = generalTime.getSeconds();
  let year = generalTime.getFullYear();
  let month = generalTime.getMonth();
  let day = generalTime.getDay();
  let date = generalTime.getDate();
  let period = "AM";

  if (hour >= 13) {
    hour = hour - 12;
  }
  if (generalTime.getHours() >= 12) {
    period = "PM";
  }


  let secHold = animClockFun(seconds);
  let minHold = animClockFun(minutes);
 

  function hourFun(){
    let HH = document.querySelector(".hour");

   
    HH.innerHTML = `<span class="Htext">${hour}</span>`;

   if($__animHour !== hour){
    document.querySelector(".Htext").classList.add("drop-bounce");
    $__animHour =  hour;
   };
   
  };
  hourFun();


  
   function minutesFun(){
    
     if(minHold.length >=2){
    let __F = minHold.slice(0,1);
    let __S = minHold.slice(1);
        __F = Number(__F);
        __S = Number(__S);
    __firstAnimMinutes = __F;
    __secondAnimMinutes = __S;

    
    document.querySelector(".minutes").innerHTML = `<div class="MFtext">${__firstAnimMinutes}</div><div class="MStext">${__secondAnimMinutes}</div>`;
   
  
    if($__firstAnimMinutes !== __firstAnimMinutes){

    document.querySelector(".MFtext").classList.add("drop-bounce");
    $__firstAnimMinutes = __firstAnimMinutes;
   };
    if($__secondAnimMinutes !== __secondAnimMinutes){
    document.querySelector(".MStext").classList.add("drop-bounce");
    $__secondAnimMinutes = __secondAnimMinutes;
   };

  }else{
    let __F = minHold.slice(0);
       __F = Number(__F);
       
      document.querySelector(".minutes").innerHTML = `<span class="Mtext">${__F}</span>`;
      
      if(GMinutes !== __F){
    document.querySelector(".Mtext").classList.add("drop-bounce");
     GMinutes = __F
   };
  };
   
  };
  minutesFun();


   function secondsFun(){
    
     if(secHold.length >=2){
    let __F = secHold.slice(0,1);
    let __S = secHold.slice(1);
        __F = Number(__F);
        __S = Number(__S);
    __firstAnimSeconds = __F;
    __secondAnimSeconds = __S;

    
    document.querySelector(".seconds").innerHTML = `<div class="SFtext">${__firstAnimSeconds}</div><div class="SStext">${__secondAnimSeconds}</div>`;
   
  
    if($__firstAnimSeconds !== __firstAnimMinutes){

    document.querySelector(".SFtext").classList.add("drop-bounce");
    $__firstAnimSeconds = __firstAnimSeconds;
   };
    if($__secondAnimSeconds !== __secondAnimSeconds){
    document.querySelector(".SStext").classList.add("drop-bounce");
    $__secondAnimSeconds = __secondAnimSeconds;
   };

  }else{
    let __F = minHold.slice(0);
       __F = Number(__F);
       
      document.querySelector(".minutes").innerHTML = `<span class="Stext">${__F}</span>`;
      
      if(GMinutes !== __F){
    document.querySelector(".Stext").classList.add("drop-bounce");
     GMinutes = __F
   };
  };
   
  };
  
secondsFun();


  const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Month = [
    "January",
    "Febuary",
    "Match",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Semptember",
    "October",
    "November",
    "December",
  ];

  const clockFormatId = [
    "period",
    "day",
    "month",
    "year",
    "sdate",
  ];
  const clockFormat = [
    period,
    Day[day],
    Month[month],
    year,
    date,
  ];

  for (let i = 0; i < clockFormat.length; i++) {
    document.querySelector("." + `${clockFormatId[i]}`).innerHTML =
      clockFormat[i];
  };




//   for (let i = 0; i < clockFormat.length; i++) {
//     console.log(clockFormatId[i]);
//   }
};

// generalClock();
setInterval(()=>{
   generalClock();
}, 1000);


