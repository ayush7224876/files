let text ="this is string"

let okk =[2,5,6,7,8];

let obb ={ name:"saad",Age:21}

let aoo =[{
    name:"ayush",
    age:"21",
    city:"bina"
},
{
    name:"amam",
    age:"22",
    city:"bina"
},
{
    name:"zaid",
    age:"21",
    city:"bina"
},
{
    name:"saad khan",
    age:"12",
    city:"indore"
},
]

console .log(aoo);




let display = document.querySelector(".tab")

       
aoo.map( (e)=> {

    display.innerHTML+= ` <table> 
    <tr>
    <th> Name </th>
    <th> Age </th>
    <th> City </th>
    </tr>
    <tr>
    <td>  ${e.name}</td>
    <td>  ${e.age}</td>
    <td>  ${e.city}</td>
    </tr> </table>
    
    `
}
)