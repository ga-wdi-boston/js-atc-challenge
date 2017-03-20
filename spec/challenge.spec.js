'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const ATCQueue = require('../lib/challenge')

const passengerLarge = { type: 'passenger', size: 'large' }
const passengerSmall = { type: 'passenger', size: 'small' }
const cargoLarge = { type: 'cargo', size: 'large' }
const cargoSmall = { type: 'cargo', size: 'small' }
const aircrafts = [passengerLarge, passengerSmall, cargoLarge, cargoSmall]

describe('ATCQueue', () => {
  beforeEach(() => {
    this.atcQueue = new ATCQueue()
  })

  describe('aircraftCount()', () => {
    it('returns 0 if the aircraft queue is empty', () => {
      expect(this.atcQueue.aircraftCount()).to.equal(0)
    })
  })

  describe('enqueue()', () => {
    it('adds aircrafts to the queue', () => {
      aircrafts.forEach((aircraft, index) => {
        this.atcQueue.enqueue(aircraft)

        expect(this.atcQueue.aircraftCount()).to.equal(index + 1)
      })
    })
  })

  describe('dequeue()', () => {
    it('removes aircrafts from the queue', () => {
      aircrafts.forEach(aircraft => this.atcQueue.enqueue(aircraft))

      for (let i = 1; i <= aircrafts.length; i++) {
        this.atcQueue.dequeue()

        expect(this.atcQueue.aircraftCount()).to.equal(aircrafts.length - i)
      }
    })

    it('removes passenger aircrafts before cargo aircrafts', () => {
      this.atcQueue.enqueue(cargoSmall)
      this.atcQueue.enqueue(passengerSmall)
      this.atcQueue.enqueue(passengerLarge)
      this.atcQueue.enqueue(cargoLarge)

      expect(this.atcQueue.dequeue()).to.have.property('type', 'passenger')
      expect(this.atcQueue.dequeue()).to.have.property('type', 'passenger')
    })

    it('removes large passenger aircrafts before small passenger aircrafts', () => {
      this.atcQueue.enqueue(passengerSmall)
      this.atcQueue.enqueue(passengerLarge)
      this.atcQueue.enqueue(passengerSmall)

      expect(this.atcQueue.dequeue()).to.deep.equal(passengerLarge)
    })

    it('removes large cargo aircrafts before small cargo aircrafts', () => {
      this.atcQueue.enqueue(cargoSmall)
      this.atcQueue.enqueue(cargoLarge)
      this.atcQueue.enqueue(cargoSmall)

      expect(this.atcQueue.dequeue()).to.deep.equal(cargoLarge)
    })

    it('removes earlier enqueued aircrafts of the same type and size first', () => {
      const firstPassengerLarge = Object.assign({ order: 1 }, passengerLarge)
      const secondPassengerLarge = Object.assign({ order: 2 }, passengerLarge)
      const firstPassengerSmall = Object.assign({ order: 1 }, passengerSmall)
      const secondPassengerSmall = Object.assign({ order: 2 }, passengerSmall)
      const firstCargoLarge = Object.assign({ order: 1 }, cargoLarge)
      const secondCargoLarge = Object.assign({ order: 2 }, cargoLarge)
      const firstCargoSmall = Object.assign({ order: 1 }, cargoSmall)
      const secondCargoSmall = Object.assign({ order: 2 }, cargoSmall)

                                                  // Expected dequeue order
      this.atcQueue.enqueue(firstCargoSmall)      // 7
      this.atcQueue.enqueue(firstPassengerSmall)  // 3
      this.atcQueue.enqueue(firstPassengerLarge)  // 1
      this.atcQueue.enqueue(firstCargoLarge)      // 5
      this.atcQueue.enqueue(secondCargoSmall)     // 8
      this.atcQueue.enqueue(secondPassengerSmall) // 4
      this.atcQueue.enqueue(secondPassengerLarge) // 2
      this.atcQueue.enqueue(secondCargoLarge)     // 6

      expect(this.atcQueue.dequeue()).to.deep.equal(firstPassengerLarge)
      expect(this.atcQueue.dequeue()).to.deep.equal(secondPassengerLarge)
      expect(this.atcQueue.dequeue()).to.deep.equal(firstPassengerSmall)
      expect(this.atcQueue.dequeue()).to.deep.equal(secondPassengerSmall)
      expect(this.atcQueue.dequeue()).to.deep.equal(firstCargoLarge)
      expect(this.atcQueue.dequeue()).to.deep.equal(secondCargoLarge)
      expect(this.atcQueue.dequeue()).to.deep.equal(firstCargoSmall)
      expect(this.atcQueue.dequeue()).to.deep.equal(secondCargoSmall)
    })
  })
})
