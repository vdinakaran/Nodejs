var events = require("events");

//obj of eventemitter
var eventEmitter = new events.EventEmitter();

//creating event handler
var EventHandler = function () {
  console.log("Hello world");
};

//Assign the event handler to the event
eventEmitter.on("hello", EventHandler);

//fire the hello event
eventEmitter.emit("hello");
