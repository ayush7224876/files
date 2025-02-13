let  sub=()=>{

    let inpname=document.querySelector("#name").value
    let inpemail=document.querySelector("#email").value

    let errname=document.querySelector("#errname")
    let erremail=document.querySelector("#erremail")


    if(inpname ===""){
        errname.innerHTML="Please enter name"
        return false 
    }
      
    if (inpemail ==="") {
        erremail.innerHTML = "Please enter EMAIL";
        return false
    }
}