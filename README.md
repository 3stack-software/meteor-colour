colour
====================

A basic library for converting a Hex Colour to RGB/ RGBA


Usage
----------------


```js

var colour = new Colour.HexColour('#333');
console.log('rgb: ' + color.rgb());
// {r: .., g: .., b: ...}
console.log('rgb:' + color.rgbString());
// rgb(..,..,..)
console.log('rgba, 0.7:' + color.rgbaString(0.7));
// rgba(..,..,..,0.7)
```
