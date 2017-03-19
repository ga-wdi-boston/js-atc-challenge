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
  const qP = this.aircraftQueue.map(qAC => priorities[qAC.type][qAC.size])
  const highestPriority = Math.max(...qP)
  const acIndex = qP.findIndex(priority => priority === highestPriority)
  const ac = this.aircraftQueue[acIndex]

  this.aircraftQueue.splice(acIndex, 1)

  return ac
}

module.exports = ATCQueue
