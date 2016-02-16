function Airport(){
  this.planes = [];
}

Airport.prototype.land = function(plane){
  plane.changeStatus();
  this.planes.push(plane);
};
