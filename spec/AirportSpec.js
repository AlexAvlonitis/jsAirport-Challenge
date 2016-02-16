describe ('Airport', function(){
  var airport1 = new Airport();
  var plane1 = new Plane();
  var plane2 = new Plane();
  var plane3 = new Plane();

  beforeEach(function(){
    spyOn(airport1, "isWeather").and.returnValue(true);
  });

  it ('lands a plane', function(){
    airport1.land(plane1);
    expect(airport1.planes).toContain(plane1);
  });

  it ('lands a plane', function(){
    airport1.land(plane2);
    expect(airport1.planes).toContain(plane2);
  });

  it ('prevents landing when plane capacity is reached', function(){
    expect(airport1.land(plane3)).toEqual("Can't land, over capacity");
  });

  it ('prevents take off in bad weather', function(){
    airport1.isWeather.and.returnValue(false);
    expect(airport1.takeoff(plane1)).toEqual("Bad weather, can't take off");
  });


  it('makes the plane take off', function(){
    airport1.takeoff(plane2);
    expect(airport1.planes).not.toContain(plane2);
  });

  it ('prevents landing in bad weather', function(){
    airport1.isWeather.and.returnValue(false);
    expect(airport1.land(plane1)).toEqual("Bad weather, can't land");
  });



});
