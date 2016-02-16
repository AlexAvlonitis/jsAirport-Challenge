describe ('Airport', function(){
  var airport1 = new Airport();
  var plane1 = new Plane();
  var plane2 = new Plane();
  // beforeEach(function(){
  //   spyOn(plane2, 'changeStatus');
  // });

  it ('lands a plane', function(){
    airport1.land(plane1);
    expect(airport1.planes).toContain(plane1);
  });

  it ('lands a plane', function(){
    airport1.land(plane2);
    expect(airport1.planes).toContain(plane2);
    //expect(plane2.changeStatus).toHaveBeenCalled();
    //console.log(airport1.planes);
  });

  // it("tracks that the spy was called on landing", function() {
  //   airport1.land(plane2);
  //   expect(plane2.changeStatus).toHaveBeenCalled();
  // });

  it('makes the plane take off', function(){
    airport1.takeoff(plane2);
    expect(airport1.planes).not.toContain(plane2);
    //console.log(airport1.planes);
  });



});
