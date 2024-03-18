"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuestos) {
    _classCallCheck(this, Cliente);
    this._nombre = nombre;
    this._impuestos = impuestos;
  }
  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      if (this._impuestos.montoBrutoAnual <= 0 || this._impuestos.deducciones < 0) {
        return 'Los valores deben ser positivos';
      }
      if (this._impuestos.deducciones >= this._impuestos.montoBrutoAnual) {
        return 'Queda exonerado de Impuestos Anuales';
      }
      var impuesto = (this._impuestos.montoBrutoAnual - this._impuestos.deducciones) * 0.21;
      return "El impuesto total a pagar es de ".concat(impuesto);
    }
  }]);
  return Cliente;
}();
var _default = Cliente;
exports["default"] = _default;