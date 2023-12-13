import event from 'events'
class EventEmitter extends event{}
const myEvent = new EventEmitter()
myEvent.on("greet", ()=>{console.log("Hello")})
myEvent.on("ovation", ()=>{console.log("How are you")})

myEvent.emit("greet")