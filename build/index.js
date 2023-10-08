"use strict";

var _vorpal = _interopRequireDefault(require("vorpal"));
var _lib = require("./lib");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var vorpal = (0, _vorpal["default"])();
vorpal.command('createOrder <name> <phoneNumber>', 'Create an order and saves it as a JSON file').action(function (args, callback) {
  var _this = this;
  var order = {
    total: 0,
    lemonades: [],
    customer: {
      name: args.name,
      phoneNumber: args.phoneNumber
    },
    lemonadeStand: {
      name: "Cooksys Lemonade Stand"
    }
  };

  //prompt the user for quantity of lemonades
  this.prompt({
    type: 'number',
    name: 'numLemonades',
    "default": 1,
    message: 'How many lemonades would you like to order?'
  }, function (_ref) {
    var numLemonades = _ref.numLemonades;
    var questions = [];
    for (var i = 1; i <= numLemonades; i++) {
      questions.push({
        type: 'number',
        name: 'lemonJuice' + i,
        "default": 1,
        message: "How many cups of lemon juice do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'water' + i,
        "default": 1,
        message: "How many cups of water do you want in lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'sugar' + i,
        "default": 1,
        message: "How many cups of sugar do you want in your lemonade ".concat(i, "?")
      });
      questions.push({
        type: 'number',
        name: 'iceCubes' + i,
        "default": 1,
        message: "How many ice cubes do you want in your lemonade ".concat(i, "?")
      });
    }
    _this.prompt(questions, function (response) {
      //create a lemonade object for each lemonade in the order
      for (var _i = 1; _i <= numLemonades; _i++) {
        order.lemonades.push({
          lemonJuice: Number.parseInt(response)['lemonJuice' + _i],
          water: Number.parseInt(response)['water' + _i],
          sugar: Number.parseInt(response)['sugar' + _i],
          iceCubes: Number.parseInt(response)['iceCubes' + _i]
        });
      }
      //set the price of each lemonade in the order
      var _iterator = _createForOfIteratorHelper(order.lemonades),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var lemonade = _step.value;
          lemonade.price = (0, _lib.calculateLemonadePrice)(lemonade);
        }
        //set total price of order
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      order.total = (0, _lib.calculateOrderTotal)(order);

      //writes order to JSON file
      (0, _lib.writeFileSync)(order.lemonadeStand.name + '/' + order.customer.name + '.json', order);
      callback();
    });
  });
});

//read all orders from JSON file
vorpal.command('getOrders <lemonadeStand>', 'Get all orders for the given lemonade stand').action(function (_ref2, callback) {
  var lemonadeStand = _ref2.lemonadeStand;
  var orders = (0, _lib.readAllFiles)(lemonadeStand);
  this.log("There are ".concat(orders.length, " orders at ").concat(lemonadeStand));
  var _iterator2 = _createForOfIteratorHelper(orders),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var order = _step2.value;
      this.log("".concat(order.customer.name, "'s Order:"));
      this.log("Total Price: ".concat(order.total));
      this.log("Lemonades:");
      this.log(order.lemonades);
      this.log("Customer:");
      this.log(order.customer);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  callback();
});
vorpal.delimiter('lemonade-stand$').show();