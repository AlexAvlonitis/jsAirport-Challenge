describe ('Airport', function(){
  var airport1 = new Airport();
  var plane1 = new Plane();

  beforeEach(function(){
    spyOn(plane1, 'changeStatus');

    plane1.changeStatus();
  });

  it ('lands a plane', function(){
    airport1.land(plane1);
    expect(airport1.planes).toContain(plane1);
  });

  it("tracks that the spy was called", function() {
    expect(plane1.changeStatus).toHaveBeenCalled();
  });

});
