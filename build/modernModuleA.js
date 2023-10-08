"use strict";

var _modernModuleB = require("./modernModuleB.js");
console.log('Running Module A');

//have to update package.JSON to use import statements change extension to .mjs or use babel

//when importing variables, must use curly braces or it will import default object
console.log(_modernModuleB.moduleBvariable);
console.log(_modernModuleB.moduleBvariable2);
console.log('Finished running Module A');