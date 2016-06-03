'use strict';

// Write your code below

// let queue = [];
let queue = [{type: 0, size: 1},
             {type: 1, size: 0},
             {type: 0, size: 0},
             {type: 1, size: 1},];

const enqueue = function(ac) {
  queue.push(ac);
};

const dequeue = function() {
  while (queue.length !== 0) {
    if (queue.length > 1) {
      for (var i = 0; i < queue.length; i++) {
        if (queue[i+1].type > queue[i].type) {
          console.log(queue[i]);
          queue.splice(i, 1);
        }
        else if (queue[i+1].size > queue[i].size) {
          console.log(queue[i]);
          queue.splice(i, 1);
        }
        else {
          console.log(queue[i]);
          queue.shift();
        }
      }
    }
    else {
      console.log(queue[i]);
      queue.shift();
    }
    console.log(queue.length);
  }
  console.log('done!');
}

dequeue();

const AC = function(type, size) {
  this.type = type;
  this.size = size;
};

// let AC1 = new AC(1, 1);

// type: passenger = 1
// type: cargo = 0
// size: large = 1
// size: small = 0

// console.log(AC1);
