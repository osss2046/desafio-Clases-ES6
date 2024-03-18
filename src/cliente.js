class Cliente{
    constructor(nombre, impuestos){
        this._nombre = nombre;
        this._impuestos = impuestos;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    calcularImpuesto() {
        if (this._impuestos.montoBrutoAnual <= 0 || this._impuestos.deducciones < 0) {
            return 'Los valores deben ser positivos';
        }

        if (this._impuestos.deducciones >= this._impuestos.montoBrutoAnual) {
            return 'Queda exonerado de Impuestos Anuales';
        }

        const impuesto = (this._impuestos.montoBrutoAnual - this._impuestos.deducciones)*0.21;
        return `El impuesto total a pagar es de ${impuesto}`;
    }
}

export default Cliente;
