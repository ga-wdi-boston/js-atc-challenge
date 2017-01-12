'use strict';

const AC = class {
  constructor(type, size) {
    this.type = type;
    this.size = size;
  }
};

// Write your code below
const AtcQueue = function () {
  this.aircraftQueue = [];
};

AtcQueue.prototype.aircraftCount = function () {
  return this.aircraftQueue.length;
};

AtcQueue.prototype.enqueue = function (ac) {
  return this.aircraftQueue.push(ac);
};

AtcQueue.prototype.dequeue = function () {
  if (this.aircraftCount < 1) {
    return null;
  }
  let curr = 0;
  this.aircraftQueue.forEach((e, i, a) => {
    if (e.type === 'passenger' && a[curr].type === 'cargo') {
      curr = i;
    } else if ((e.size === 'large' && a[curr].size === 'small') && (e.type === a[curr].type)){
      curr = i;
    }
  });
  let result = this.aircraftQueue[curr];
  this.aircraftQueue.splice(curr, 1);
  return result;
};

let pass = new AC('cargo', 'large');
let pass2 = new AC('passenger', 'small');

let ATC = new AtcQueue();
console.log(ATC.enqueue(pass));
console.log(ATC.enqueue(pass2));

module.exports = AtcQueue;
