'use strict'

const ATCQueue = function () {
  this.aircraftQueue = []
}

ATCQueue.prototype.aircraftCount = function () {
  return this.aircraftQueue.length
}

ATCQueue.prototype.enqueue = function (aircraft) {
  this.aircraftQueue.push(aircraft)
}

ATCQueue.prototype.dequeue = function () {
  const priorities = {
    passenger: { large: 4, small: 3 },
    cargo: { large: 2, small: 1 }
  }
  let index = 0
  let ac = this.aircraftQueue[index]

  this.aircraftQueue.forEach((qAC, qIndex) => {
    if (priorities[qAC.type][qAC.size] > priorities[ac.type][ac.size]) {
      index = qIndex
      ac = this.aircraftQueue[index]
    }
  })

  this.aircraftQueue.splice(index, 1)

  return ac
}

module.exports = ATCQueue
