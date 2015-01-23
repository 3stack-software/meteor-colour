"use strict";
var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    mainRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

function HexColour(hex) {
  this.hex = hex;
  if (!HexColour.isValid(this.hex)) {
    throw new Error("Not a valid hex colour!");
  }
}

HexColour.isValid = function(hex) {
  return mainRegex.test(hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  }));
};

HexColour.prototype.rgb = function() {
  var rgb;
  rgb = mainRegex.exec(this.hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  }));
  if (rgb == null) {
    return null;
  }
  return {
    r: parseInt(rgb[1], 16),
    g: parseInt(rgb[2], 16),
    b: parseInt(rgb[3], 16)
  };
};

HexColour.prototype.rgbString = function() {
  var rgb;
  rgb = this.rgb();
  if (rgb == null) {
    return '';
  }
  return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
};

HexColour.prototype.rgbaString = function(alpha) {
  var rgb;
  rgb = this.rgb();
  if (rgb == null) {
    return '';
  }
  return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + alpha + ")";
};

Colour = {
  HexColour: HexColour
};

