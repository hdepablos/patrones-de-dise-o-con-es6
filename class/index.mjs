import ReporteAuditoria from "./ReporteAuditoria.js";
import ReportePagoEnLinea from "./ReportePagoEnLinea.js";

// import ReporteManager from './ReporteManager.js';
// import Reporte1 from './Reporte1.js';
// import Reporte2 from './Reporte2.js';

// const _reporte = new ReporteManager();
// const reporte1 = new Reporte1();
// const reporte2 = new Reporte2();

// _reporte.setReporte = reporte1;
// _reporte.exe();

// _reporte.setReporte = reporte2;
// _reporte.exe();

const Auditoria = {
  check(id) {
    return id == 1;
  },
  execute() {
    const reporteAuditoria = new ReporteAuditoria();
    const data = reporteAuditoria.execute();
    return data;
  }
};

const PagoEnLinea = {
  check(id) {
    return id == 15;
  },
  execute() {
    const reportePagoEnLinea = new ReportePagoEnLinea();
    const data = reportePagoEnLinea.execute();
    return data;
  }
};

// Reporte seleccionado desde el combo
const reporteId = 1;
const reportes = [Auditoria, PagoEnLinea];
const reporte = reportes.find(x => x.check(reporteId));
const nameReporte = reporte.execute();
console.log("El reporte seleccionado es:");
console.log(nameReporte);
