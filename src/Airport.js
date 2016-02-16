
function Airport(){
  this.planes = [];
}

Airport.prototype.land = function(plane){
  plane.changeStatus();
  this.planes.push(plane);
  //console.log(this.planes);
};


Airport.prototype.takeoff = function(plane){
  plane.changeStatus();
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
  //console.log(plane);


};
