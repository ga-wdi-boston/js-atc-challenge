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
  let index = 0
  let ac = this.aircraftQueue[index]

  this.aircraftQueue.forEach((qAC, qIndex) => {
    const diffSize = qAC.size === 'large' && ac.size !== 'large'
    const diffType = qAC.type === 'passenger' && ac.type !== 'passenger'
    const sameType = qAC.type === ac.type

    if (diffType || (sameType && diffSize)) {
      index = qIndex
      ac = this.aircraftQueue[index]
    }
  })

  this.aircraftQueue.splice(index, 1)

  return ac
}

module.exports = ATCQueue
