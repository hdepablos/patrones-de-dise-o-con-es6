export default class ReportePagoEnLinea {
  constructor() {
    this.data = [];
  }

  execute() {
    const data =
      '[{ "pago_id": 11380, "agencia_id": 31967, "nombre_agencia": "PRUEBA AAA", "email_agencia": null, "nombre_pagador": "Héctor Iván Depablos Torres", "email_cli": "h.depablos@allseasons.com.ar", "fecha_nac_cli": "1980-03-23", "des_tipo_iden": "DNI", "nro_doc": "88778877", "direccion": "asdfasdfasdf", "telefono": "1133275281", "monto_i": 25000, "interes": 14, "monto_t": 28500, "nro_cuotas": 6, "app_id": 8, "des_app": "Asback", "cod_producto": 14, "des_tarjeta": "Visa", "cod_promocion": "visa_icbc_6", "nro_file": "150", "forma_pago_id": 1, "psp_merchordenid": "AS-0000011380", "fecha_sol": "2019-08-06 17:42:29", "pago_in": 9, "psp_merchantid": "allseason_icbc", "des_tipo_operacion": "Compra en linea", "psp_merchtxref": "AS-0000011380", "des_bco": "ICBC", "monto_efectivo": 28500, "usuario": "hector depablos" }, { "pago_id": 11377, "agencia_id": 31967, "nombre_agencia": "PRUEBA AAA", "email_agencia": null, "nombre_pagador": "Héctor Iván Depablos Torres", "email_cli": "h.depablos@allseasons.com.ar", "fecha_nac_cli": "1980-03-23", "des_tipo_iden": "DNI", "nro_doc": "95897257", "direccion": "Alberti 928", "telefono": "1133275281", "monto_i": 80000, "interes": 14, "monto_t": 91200, "nro_cuotas": 6, "app_id": 8, "des_app": "Asback", "cod_producto": 14, "des_tarjeta": "Visa", "cod_promocion": "visa_icbc_6", "nro_file": "150", "forma_pago_id": 1, "psp_merchordenid": "AS-0000011377", "fecha_sol": "2019-08-06 16:45:03", "pago_in": 9, "psp_merchantid": "allseason_icbc", "des_tipo_operacion": "Compra en linea", "psp_merchtxref": "AS-0000011377", "des_bco": "ICBC", "monto_efectivo": 91200, "usuario": "hector depablos" }, { "pago_id": 11369, "agencia_id": 31967, "nombre_agencia": "PRUEBA AAA", "email_agencia": null, "nombre_pagador": "Héctor Iván Depablos Torres", "email_cli": "h.depablos@allseasons.com.ar", "fecha_nac_cli": "1980-03-23", "des_tipo_iden": "DNI", "nro_doc": "88778877", "direccion": "asdfasdf asdf", "telefono": "1133275281", "monto_i": 65000, "interes": 14, "monto_t": 74100, "nro_cuotas": 6, "app_id": 8, "des_app": "Asback", "cod_producto": 14, "des_tarjeta": "Visa", "cod_promocion": "visa_icbc_6", "nro_file": "150", "forma_pago_id": 1, "psp_merchordenid": "AS-0000011369", "fecha_sol": "2019-08-01 08:45:20", "pago_in": 9, "psp_merchantid": "allseason_icbc", "des_tipo_operacion": "Compra en linea", "psp_merchtxref": "AS-0000011369", "des_bco": "ICBC", "monto_efectivo": 74100, "usuario": "hector depablos" }]';

    return JSON.parse(data);
  }
}
