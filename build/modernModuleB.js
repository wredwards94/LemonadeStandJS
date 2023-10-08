"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.moduleBFunction = moduleBFunction;
exports.moduleBvariable2 = exports.moduleBvariable = void 0;
console.log('Running Module B');
var moduleBvariable = exports.moduleBvariable = 'Named Variable from Module B';
var moduleBvariable2 = exports.moduleBvariable2 = 50;
function moduleBFunction() {
  console.log('Running Module B');
}
var _default = exports["default"] = {
  a: moduleBvariable,
  b: moduleBvariable2,
  c: moduleBFunction
};
console.log('Finished running Module B');