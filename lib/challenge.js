'use strict'

// Write your code below
// const Aircraft = function (type, size) {
//   this.type = type
//   this.size = size
// }

const removeFromQueue = function (filteredQueue) {
  const dequeued = filteredQueue.shift()
  this.aircraftQueue.splice(this.aircraftQueue.findIndex(
    (a) => a === dequeued), 1)
  return dequeued
}

const checkSize = function (queue) {
  const large = queue.filter((a) => a.size === 'large')
  const small = queue.filter((a) => a.size === 'small')

  if (large.length) {
    return removeFromQueue.call(this, large)
  } else {
    return removeFromQueue.call(this, small)
  }
}

const ATCQueue = function () {
  this.aircraftQueue = []
}

ATCQueue.prototype.aircraftCount = function () {
  return this.aircraftQueue.length
}

ATCQueue.prototype.enqueue = function (aircraft) {
  this.aircraftQueue.push(aircraft);
}

ATCQueue.prototype.dequeue = function () {
  const passenger = this.aircraftQueue.filter((aircraft) => aircraft.type === 'passenger')
  const cargo = this.aircraftQueue.filter((aircraft) => aircraft.type === 'cargo')

  if (passenger.length) {
    return checkSize.call(this, passenger)
  } else {
    return checkSize.call(this, cargo)
  }
  // return passenger.shift()
}

module.exports = ATCQueue
