setInterval(()=>{
    let today = new Date();
  let output1 = document.querySelector("h1");
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let noon = document.querySelector("h2");
  if(hours>12)
  {
    noon.innerHTML = "PM";
  }
  else{
    noon.innerHTML = "AM";
  }
  hours = hours%12;
  let h = hours >= 10 ? hours : "0" + hours;
  let m = minutes >= 10 ? minutes : "0" + minutes;
  let s = seconds >= 10 ? seconds : "0" + seconds;
  let current_time = `${h}:${m}:${s}`;
  output1.innerHTML = current_time;
  let output2 = document.querySelector("h3");
  let year = today.getFullYear();
  let month = today.getMonth()+1;
  let day = today.getDate();
  let y = year >= 10 ? year : "0" + year;
  let mo = month >= 10 ? month : "0" + month;
  let d = day >= 10 ? day : "0" + day;
  let current_date = `${d}/${mo}/${y}`;
  output2.innerHTML = current_date;
},1000)
