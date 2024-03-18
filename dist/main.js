"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Crear una instancia de Impuestos
var impuestosDeOscar = new _impuestos["default"](105000, 5000); // montoBrutoAnual, deducciones

// Crear una instancia de Cliente
var oscar = new _cliente["default"]("Oscar Acuna", impuestosDeOscar);

// Mostrar el nombre del cliente
console.log("Cliente: ".concat(oscar.nombre));

// Calcular y mostrar el impuesto a pagar
var resultadoImpuesto = oscar.calcularImpuesto();
console.log(resultadoImpuesto);