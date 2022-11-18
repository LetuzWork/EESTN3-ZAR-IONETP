const { addReport, addEnfermero } = require("./controller.js");

// addReport({
//   momento_llamada: new Date().toISOString(),
//   momento_atencion: new Date().toISOString(),
//   paciente: "45600768",
//   enfermero: "37890678",
//   area: "areaid02",
//   habitacion: 201,
//   origenDeLlamada: "cama",
//   urgente: false,
// });
console.log(addEnfermero);

addEnfermero({
  id: "37890678",
  nombre: "Juan gomez",
  jornada: ["9:00", "18:00"],
});
