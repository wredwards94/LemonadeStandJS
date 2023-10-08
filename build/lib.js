"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFileSync = exports.readAllFiles = exports.calculateOrderTotal = exports.calculateLemonadePrice = void 0;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var calculateLemonadePrice = exports.calculateLemonadePrice = function calculateLemonadePrice(lemonade) {
  var result = .75;
  for (var key in lemonade) {
    // result += lemonade[key]
    switch (key) {
      case 'lemonJuice':
        result += lemonade[key] * .30;
        break;
      case 'water':
        result += lemonade[key] * .01;
        break;
      case 'sugar':
        result += lemonade[key] * .20;
        break;
      case 'iceCubes':
        result += lemonade[key] * .05;
        break;
      default:
        break;
    }
  }
  return result;
};
var calculateOrderTotal = exports.calculateOrderTotal = function calculateOrderTotal(_ref) {
  var lemonades = _ref.lemonades;
  var result = 0;
  var _iterator = _createForOfIteratorHelper(lemonades),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var lemonade = _step.value;
      result += lemonade.price;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
};
var writeFileSync = exports.writeFileSync = function writeFileSync(fileName, order) {
  _fs["default"].writeFileSync(fileName, JSON.stringify(order), function (err) {
    return console.log(err);
  });
};
var readAllFiles = exports.readAllFiles = function readAllFiles(dirName) {
  var orders = [];
  var _iterator2 = _createForOfIteratorHelper(_fs["default"].readdirSync(dirName)),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var name = _step2.value;
      orders.push(JSON.parse(_fs["default"].readFileSync(dirName + '/' + name)));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return orders;
};