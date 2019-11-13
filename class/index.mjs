import ReporteManager from './ReporteManager.js';
import Reporte1 from './Reporte1.js';
import Reporte2 from './Reporte2.js';

const _reporte = new ReporteManager();
const reporte1 = new Reporte1();
const reporte2 = new Reporte2();

_reporte.setReporte = reporte1;
_reporte.exe();

_reporte.setReporte = reporte2;
_reporte.exe();