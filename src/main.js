import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";

// Crear una instancia de Impuestos
const impuestosDeOscar = new Impuestos(105000, 5000); // montoBrutoAnual, deducciones

// Crear una instancia de Cliente
const oscar = new Cliente("Oscar Acuna", impuestosDeOscar);

// Mostrar el nombre del cliente
console.log(`Cliente: ${oscar.nombre}`);

// Calcular y mostrar el impuesto a pagar
const resultadoImpuesto = oscar.calcularImpuesto();
console.log(resultadoImpuesto);
