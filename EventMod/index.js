const EventEmitter = require('events');

const event = new EventEmitter();
event.on('sayMyName',()=>{
    console.log("my name is Ankit");
})
event.emit("sayMyName");