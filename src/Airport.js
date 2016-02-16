function Airport(){
  this.planes = [];
}

Airport.prototype.land = function(plane){
  var weather = this.isWeather();
  if (weather === true){
    plane.changeStatus();
    this.planes.push(plane);
  } else {
    return "Bad weather, can't land";
  }

  //console.log(this.planes);
};


Airport.prototype.takeoff = function(plane){
  var weather = this.isWeather();
  if (weather === true){
    plane.changeStatus();
    var index = this.planes.indexOf(plane);
    this.planes.splice(index, 1);
    //console.log(plane);
  } else {
    return "Bad weather, can't take off";
  }
};


Airport.prototype.isWeather = function() {
  return [true,false][Math.floor(Math.random() * 2)];
};
