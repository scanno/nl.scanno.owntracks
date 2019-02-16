"use strict";
const AdressRetreiver = require("./adressretreiver.js");
const FenceArray = require("./Fence.js");

class Location {
  constructor(lat, lon, timestamp) {
    this.lat = lat;
    this.lon = lon;
    this.fence = [];
    this.timestamp = timestamp;
    this.logmodule = require("./logmodule.js");
    this.adress = null;


    this.logmodule.writelog('debug', "Location constructor entered");
    //this.onInit();
  }

  onInit() {
    this.updateAdress();
  }

  //setLocation(lat, lon, fence, timestamp) {
  setLocation(lat, lon, timestamp) {
    this.lat = lat;
    this.lon = lon;
    this.timestamp = timestamp;
  }

  updateAdress() {
    this.logmodule.writelog('debug', "updateAdress called");
    var adressRetreiver = new AdressRetreiver();
    this.adress = adressRetreiver.getCurrentAdress(this.lat, this.lon);
  }

  getAdress() {
    return this.adress;
  }

  getFence() {
    return this.fence;
  }

  getLocation() {
    return {
      lat: this.lat,
      lon: this.lon,
      fence: this.fence,
      timestamp: this.timestamp
    }
  }

  getJSON() {
    return { lat: this.lat,
             lon: this.lon,
             fence: this.fence,
             timestamp: this.timestamp,
             adress: this.adress }
  }

  parseJSON(location) {
    this.logmodule.writelog('debug', "JSON Location " + JSON.stringify(location));
    if (location !== undefined && location !== null) {
      this.setLocation(location.lat, location.lon, location.timestamp);
      this.fence = location.fence;
    }
  }

  enterFence(fence) {
    for (var i = 0; i < this.fence.length; i++) {
      if (this.fence[i] === fence) {
        return false;
      }
    }
    this.fence.push(fence);
    this.logmodule.writelog('debug', "Current fences: " + this.fence);
    return true;
  }

  leaveFence(fence) {
    for (var i = 0; i < this.fence.length; i++) {
      if (this.fence[i] === fence) {
        var leftfence = this.fence.splice(i, 1);
        this.logmodule.writelog('debug', "Current fences: " + this.fence);
        return leftfence;
      }
    }
    return null;
  }

  inFence(fence) {
    for (var i = 0; i < this.fence.length; i++) {
      if (this.fence[i] === fence) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Location;
