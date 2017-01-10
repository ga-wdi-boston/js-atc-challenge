'use strict';
/* jshint -W030 */

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

const Atc = require('../lib/challenge');

describe('atc', function () {
  describe('enqueue aircraft', function () {
    beforeEach(function () {
      this.atc = new Atc();
      this.aircraft = {
        type: 'passenger',
        size: 'small',
      };
    });
    it('has an aircraft queue', function () {
      expect(this.atc.aircraftQueue instanceof Array).to.be.true;
    });
    it('can enqueue an aircraft', function () {
      this.atc.enqueue(this.aircraft);
      expect(this.atc.aircraftQueue.length).to.eq(1);
      expect(this.atc.aircraftQueue.indexOf(this.aircraft)).not.to.eq(-1);
    });
  });
  describe('dequeue aircraft', function () {
    beforeEach(function () {
      this.passengerPlaneSmall = {
        type: 'passenger',
        size: 'small',
      };
      this.passengerPlaneLarge = {
        type: 'passenger',
        size: 'large',
      };
      this.cargoPlaneSmall = {
        type: 'cargo',
        size: 'small',
      };
      this.cargoPlaneLarge = {
        type: 'cargo',
        size: 'large',
      };
      this.atc = new Atc();
    });
    it('dequeues planes', function () {
      this.atc.enqueue(this.passengerPlaneLarge);
      this.atc.enqueue(this.cargoPlaneLarge);

      expect(this.atc.aircraftQueue.length).to.eq(2);

      this.atc.dequeue();
      expect(this.atc.aircraftQueue.length).to.eq(1);
    });
    it('dequeues passenger planes before cargo planes', function () {
      this.atc.enqueue(this.passengerPlaneLarge);
      this.atc.enqueue(this.cargoPlaneLarge);
      this.atc.enqueue(this.passengerPlaneLarge);

      const dequeuedPlane = this.atc.dequeue();
      const secondDequeuedPlane = this.atc.dequeue();

      expect(dequeuedPlane).to.deep.eq(this.passengerPlaneLarge);
      expect(secondDequeuedPlane).to.deep.eq(this.passengerPlaneLarge);
    });
    it('dequeues large passenger planes before small passenger planes', function () {
      this.atc.enqueue(this.passengerPlaneLarge);
      this.atc.enqueue(this.passengerPlaneSmall);
      this.atc.enqueue(this.passengerPlaneSmall);
      this.atc.enqueue(this.passengerPlaneLarge);

      const dequeuedPlane = this.atc.dequeue();
      const secondDequeuedPlane = this.atc.dequeue();

      expect(dequeuedPlane).to.deep.eq(this.passengerPlaneLarge);
      expect(secondDequeuedPlane).to.deep.eq(this.passengerPlaneLarge);
    });
    it('dequeues large cargo planes before small cargo planes', function () {
      this.atc.enqueue(this.cargoPlaneLarge);
      this.atc.enqueue(this.cargoPlaneSmall);
      this.atc.enqueue(this.cargoPlaneSmall);
      this.atc.enqueue(this.cargoPlaneLarge);

      const dequeuedPlane = this.atc.dequeue();
      const secondDequeuedPlane = this.atc.dequeue();

      expect(dequeuedPlane).to.deep.eq(this.cargoPlaneLarge);
      expect(secondDequeuedPlane).to.deep.eq(this.cargoPlaneLarge);
    });
    describe('dequeues planes of equal importance in the order they were enqueued', function () {
      beforeEach(function () {
        this.atc = new Atc();

        // add order to planes
        this.firstCargoPlane = Object.assign(this.cargoPlaneLarge, { order: 'first' });
        this.secondCargoPlane = Object.assign(this.cargoPlaneLarge, { order: 'second' });
        this.firstPassengerPlane = Object.assign(this.passengerPlaneSmall, { order: 'first' });
        this.secondPassengerPlane = Object.assign(this.passengerPlaneSmall, { order: 'second' });

        this.atc.enqueue(this.firstPassengerPlane);
        this.atc.enqueue(this.firstCargoPlane);
        this.atc.enqueue(this.secondCargoPlane);
        this.atc.enqueue(this.secondPassengerPlane);

        this.firstDequeued = this.atc.dequeue();
        this.secondDequeued = this.atc.dequeue();
        this.thirdDequeued = this.atc.dequeue();
        this.fourthDequeued = this.atc.dequeue();
      });
      it('dequeues the first plane correctly', function () {
        expect(this.firstDequeued).to.deep.eq(this.firstPassengerPlane);
      });
      it('dequeues the second plane correctly', function () {
        expect(this.secondDequeued).to.deep.eq(this.secondPassengerPlane);
      });
      it('dequeues the third plane correctly', function () {
        expect(this.thirdDequeued).to.deep.eq(this.firstCargoPlane);
      });
      it('dequeues the fourth plane correctly', function () {
        expect(this.fourthDequeued).to.deep.eq(this.secondCargoPlane);
      });
    });
  });
});
