let events = require('events');

let em = new events.EventEmitter();

em.once('FirstEvent', function(data) {
  console.log('First subscriber: ' + data);
});

em.on('SecondEvent', function(data) {
  console.log('First subscriber: ' + data);
});

em.emit('FirstEvent', 'Mahendra', '');
em.emit('FirstEvent', 'Mahendra');

// em.on
// em.once
// em.setMaxListeners(n = 10);
// em.getMaxListeners();
// em.listeners('FirstEvent') // returns a copy of the array of listeners for the sepecified event
// em.emit(event [, arg1][, arg2][, ...])


// console.log(em.listeners('FirstEvent'));