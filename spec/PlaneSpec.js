describe ('Plane', function(){
  var plane = new Plane();

  it ('changes plane status', function(){
    plane.changeStatus();
    expect(plane.airborne).toBe(false);
  });

});
