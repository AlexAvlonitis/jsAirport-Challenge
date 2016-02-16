function Weather(){}

Weather.prototype.isGood = function() {
  var result = [true,false][Math.floor(Math.random() * 2)];
};
