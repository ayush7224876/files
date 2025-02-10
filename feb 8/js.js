let store="";

let dis =(value) => {
let show = document.querySelector("#display");
   store= store+value;
   show.innerHTML = store;
}


let res=()=> {
    let show = document.querySelector("#display");
      show.innerHTML = eval(store);
      store=eval(store);  
      store = eval(store).toString(); 
}

let del =()=> {
    store=store.slice(0,-1)
    let show=document.querySelector("#display")
    show.innerHTML=store;
}


let delAll =()=> {
    store=""; 
    let show=document.querySelector("#display")
    show.innerHTML="0";
}