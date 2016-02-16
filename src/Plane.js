function Plane(){
  this.airborne = true;
}

Plane.prototype.changeStatus = function(){
  if (this.airborne === true) {
    this.airborne = false;
  } else {
    this.airborne = true;
  }
};
