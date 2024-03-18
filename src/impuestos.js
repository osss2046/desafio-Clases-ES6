class Impuestos{
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual=montoBrutoAnual;
        this._deducciones=deducciones;
    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    get deducciones(){
        return this._deducciones;
    }
    set montoBrutoAnual(nuevo_montoBrutoAnual){
        this._montoBrutoAnual = nuevo_montoBrutoAnual;
    }
    set deducciones(nuevo_deducciones){
        this._deducciones = nuevo_deducciones;
    }

}
export default Impuestos;