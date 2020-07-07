"use strict";
// "dev": "ts-node-dev --respawn --transpileOnly index"
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
var c = Color.green;
console.log(c);
