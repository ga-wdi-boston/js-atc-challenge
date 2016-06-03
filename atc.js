'use strict';

// Aircraft Class
const AC = class AC {
  constructor(type,size) {
    this.type = type || 'Cargo';
    this.size = size || 'Small';
  }

  // Returns a priority index for AC
  priority() {
    return {Passenger:10, Cargo:0}[this.type] +
           {Large:1, Small:0}[this.size]
  }

  // Returns <=> between two ACs
  compare(otherAC) {
    return Math.sign(this.priority() - otherAC.priority());
  }
}

// AC Queue Class
const AircraftQueue = class AircraftQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(AC) {
    this.queue.push(AC);
  }

  dequeue() {
    let memo = this.queue[0];
    for (let i = 1; i < this.queue.length; i++) {
      memo = memo.compare(this.queue[i]) < 0 ? this.queue[i] : memo;
    }
    return memo;

    // still need to remove memo obj from queue
  }
}


// Test Demonstrations

let a1 = new AC('Passenger','Large');
let a2 = new AC('Passenger', 'Small');
let a3 = new AC('Passenger','Small');
let a4 = new AC('Passenger', 'Small');
let a5 = new AC('Cargo','Large');
let a6 = new AC('Cargo', 'Large');
let a7 = new AC('Cargo','Large');
let a8 = new AC('Cargo', 'Small');

let acq = new AircraftQueue();

console.log(acq);

acq.enqueue(a1);
acq.enqueue(a4);
acq.enqueue(a3);
acq.enqueue(a2);
acq.enqueue(a5);
acq.enqueue(a7);
acq.enqueue(a6);
acq.enqueue(a8);

console.log(acq);

console.log(acq.dequeue());
console.log(acq.dequeue());
console.log(acq.dequeue());
console.log(acq.dequeue());
