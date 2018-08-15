var events = require('events');

var event = new events.EventEmitter();

event.on('some_event',function(){
    console.log('some_event事件触发');
})

setTimeout(function(){
    event.emit('some_event');
}, 1000);