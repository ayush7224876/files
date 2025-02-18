let login=()=>{
    let username=document.querySelector("#username").value
     localStorage.setItem("name",username)
     localStorage.setItem("age","25")
     location.reload()
    
}
 let display=document.querySelector("#show")
 let display2=document.querySelector("#show2")

 display.innerHTML=localStorage.getItem("name")
 display2.innerHTML=localStorage.getItem("age")

 let logout=()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("age")
    location.reload()
 }
 