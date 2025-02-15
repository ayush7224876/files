console.log("hello world")
let hell = document.querySelector(".hell")


let cout=0;
let clam= setInterval(() =>{
    hell.innerHTML=cout++;
    console.log(cout++);
    console.log("hello world")
},1000)


let stop =()=>{
    clearInterval(clam)
}