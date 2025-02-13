let sanidhya =  { 
    name:"sasnidhya",
    age:20,
    greet:"how are u friends",

    greeting: function () {

        console.log(`this is ${this.name} i am  ${this.age}  years old ${this.greet}`)
    }
}  

sanidhya.greeting()
