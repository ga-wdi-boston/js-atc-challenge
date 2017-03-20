'use strict'

// Write your code below
const ATCQueue = function () {
  this.aircraftQueue = []
  if (this.aircraftQueue.length === 0) {
    return 0
  }
}

ATCQueue.prototype.aircraftCount = function () {
  // Count the number of aircrafts in the queue.
  // returns an integer
  return this.aircraftQueue.count
}

ATCQueue.prototype.enqueue = function (aircraft) {
  // Add an aircraft to the queue.
  this.aircraftQueue.push(aircraft)
}

ATCQueue.prototype.dequeue = function () {
  // Remove an aircraft from the queue and return it.
  this.aircraftQueue.shift()

  // returns an aircraft
  // need to make an array before to push the aircraft that will be shifted out
  // because i cant return anything now since it has already been shifted out.
}

module.exports = ATCQueue
