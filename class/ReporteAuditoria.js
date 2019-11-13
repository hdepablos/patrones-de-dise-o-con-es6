export default class ReporteAuditoria {
  constructor() {
    this.data = [];
  }

  execute() {
    const data =
      '[{"auditoria_id":1806,"fecha":"2019-11-12 12:30:28","pantalla_id":33,"des_menu":"Adm de sistemas","rol_id":14,"des_rol":"Aisgnar acceso","detalle_antes":null,"detalle_despues":"Opción menu: Consultas y reportes / Auditorias, Roles:[Todo]","registro_afectado":"id:480, Nombre:Hector Depablos"},{"auditoria_id":2800,"fecha":"2019-11-12 19:07:20","pantalla_id":26,"des_menu":"Externos","rol_id":3,"des_rol":"Modificar","detalle_antes":"id: 8, Des: Nuevo Item, Status: false","detalle_despues":"id: 8, Des: Nuevo Item, Status: true","registro_afectado":"Nuevo Item"},{"auditoria_id":2801,"fecha":"2019-11-12 21:35:44","pantalla_id":45,"des_menu":"Promociones","rol_id":3,"des_rol":"Modificar","detalle_antes":"Id.: 100, fecha: 04-11-2019/04-11-2019, Bco: Tarjeta Shopping, App: Terrestre, Prv: Omnibees, NL: asdf asdf, Cód.C: allseasons, Act: true","detalle_despues":"Id.: 100, fecha: 04-11-2019/04-11-2019, Bco: Tarjeta Shopping, App: Terrestre, Prv: Prestige, NL: asdf asdf, Cód.C: allseasons, Act: true","registro_afectado":"100"}]';

    return JSON.parse(data);
  }
}
