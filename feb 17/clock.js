// let time= new Date()
// console.log(time);
// console.log(time.getFullYear());
// console.log(TimeRanges.getMonth());
// console.log(time.getDay())
// console.log(time.getHours())

// let arr=["sun","mon","tus"]

// console.log(arr[time.gettDay()]);

let showtime = document.querySelector("#showtime")
setInterval(()=>{


let time = new Date()
showtime.innerHTML=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`},1000)
