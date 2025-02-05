//arrey of boject


    //  this is a data formet

    let text ="this is string"

    let okk =[2,5,6,7,8];
    
    let obb ={ name:"saad",Age:21}
    
    let aoo =[{
        name:"sanidhy",
        age:"21",
        city:"bina"
    },
    {
        name:"vip",
        age:"22",
        city:"bina"
    },
    {
        name:"zaid",
        age:"21",
        city:"bina"
    },
    {
        name:"alok",
        age:"54",
        city:"indore"
    },
    ]
    
    console .log(aoo);
    
    
    let display = document.querySelector("#display")
    
    //display inner html
    
    aoo.map ((e) =>{
      display.innerHTML+=`
      
      <h1> name :- ${e.name} </h1>
      <h1> age :- ${e.age} </h1>
      `
    })