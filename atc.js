'use strict';

/*
Requirements

A software subsystem of an air-traffic control system is defined to manage a
queue of aircraft (AC) in an airport. The aircraft queue is managed by a
process which responds to three types of requests:

System boot used to start the system.
Enqueue aircraft used to insert a new AC into the system.
Dequeue aircraft used to remove an AC from the system.
AC have at least (but are not limited to having) the following properties:

AC type: Passenger or Cargo.
AC size: Small or Large.
The process which manages the queue of AC satisfies the following:

There is no limit on the number of AC it can manage.
Dequeue aircraft requests result in selection of one AC for removal such that:
Passenger AC have removal precedence over Cargo AC.
Large AC of a given type have removal precedence over Small AC of the same type.
Earlier enqueued AC of a given type and size have precedence over later
enqueued AC of the same type and size.
*/

// Write your code below

let array = [];

class AC {
  constructor(type, size){
    this.type = type;
    this.size = size;
  }
}

let Enqueue = function () {
  let ac = new AC('passenger', 'large');
  array.push(ac);
};

let Dequeue = function () {
  array.splice(0, 1);
};

let SystemBoot = function () {
  console.log(array);
  Enqueue();
  console.log(array);
  Dequeue();
  console.log(array);
};

SystemBoot();























//////
