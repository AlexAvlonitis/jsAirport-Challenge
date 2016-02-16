function Airport(capacity = 2){
  this.CAPACITY = capacity;
  this.planes = [];
}

Airport.prototype.land = function(plane){
  var weather = this.isWeather();
  if (this.isFull()) return "Can't land, over capacity";
  if (weather === true){
    plane.changeStatus();
    this.planes.push(plane);
  } else {
    return "Bad weather, can't land";
  }
};

Airport.prototype.isFull = function(){
  return this.planes.length >= this.CAPACITY ? true : false;
};


Airport.prototype.takeoff = function(plane){
  var weather = this.isWeather();
  if (weather === true){
    plane.changeStatus();
    var index = this.planes.indexOf(plane);
    this.planes.splice(index, 1);
  } else {
    return "Bad weather, can't take off";
  }
};


Airport.prototype.isWeather = function() {
  return [true,false][Math.floor(Math.random() * 2)];
};
