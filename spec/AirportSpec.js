describe ('Airport', function(){
  var airport1 = new Airport();
  var plane1 = new Plane();

it ('lands a plane', function(){
  airport1.land(plane1);
  expect(airport1.planes).toContain(plane1);
});

});
