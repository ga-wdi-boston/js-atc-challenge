'use strict';

// Write your code below
const AtcQueue = function () {
  this.aircraftQueue = [];
};

AtcQueue.prototype.aircraftCount = function () {
  return this.aircraftQueue.length;
};

AtcQueue.prototype.enqueue = function (ac) {
    this.aircraftQueue.push(ac);
};

AtcQueue.prototype.dequeue = function () {
  for(plane in this.aircraftQueue){
    if(this.aircraftQueue[plane].type === 'passenger')
    {
      if(this.aircraftQueue[plane].size === 'large')
      {
        this.aircraftQueue.splice(plane, 1);
        return this.aircraftQueue;
      }
    }
  }
  for(plane in this.aircraftQueue){
    if(this.aircraftQueue[plane].type === 'passenger')
    {
      if(this.aircraftQueue[plane].size === 'small')
      {
        this.aircraftQueue.splice(plane, 1);
        return this.aircraftQueue;
      }
    }
  }
  for(plane in this.aircraftQueue){
    if(this.aircraftQueue[plane].type === 'cargo')
    {
      if(this.aircraftQueue[plane].size === 'large')
      {
        this.aircraftQueue.splice(plane, 1);
        return this.aircraftQueue;
      }
    }
  }
  for(plane in this.aircraftQueue){
    if(this.aircraftQueue[plane].type === 'cargo')
    {
      if(this.aircraftQueue[plane].size === 'small')
      {
        this.aircraftQueue.splice(plane, 1);
        return this.aircraftQueue;
      }
    }
  }
};

module.exports = AtcQueue;
