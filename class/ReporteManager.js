export default class ReporteManager{

    constructor(){
        this._reporteid = null;
    };

    set setReporte(reporteId){
        this._reporteid = reporteId;
    }

    get getReporte(){
        return `reporte${this._reporteid}`;
    }

    exe(){
        this._reporteid.exe();
    }
}