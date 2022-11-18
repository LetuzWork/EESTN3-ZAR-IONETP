import { db } from "../db/firebase";
//This file will not exist in the repository because it has api credentials c:
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const addReport = async ({
  momento_llamada,
  momento_atencion,
  paciente,
  enfermero,
  area,
  habitacion,
  origenDeLlamada,
  urgente,
}) => {
  try {
    await addDoc(collection(db, "reports"), {
      momento_llamada,
      momento_atencion,
      paciente,
      enfermero,
      area,
      habitacion,
      origenDeLlamada,
      urgente,
    });
  } catch (e) {
    return { error: e };
  }
};

const getReports = async (id) => {
  try {
    const querySnapshot = await getDocs(collection(db, "reports"));
    const reports = [];
    querySnapshot.forEach((d) => reports.push({ id: d.id, ...d.data() }));
    return reports;
  } catch (e) {
    return { error: e };
  }
};

const addEnfermero = async ({ id, nombre, jornada }) => {
  try {
    await setDoc(doc(db, "enfermeros", id), {
      id,
      nombre,
      jornada,
    });
  } catch (e) {
    return { error: e };
  }
};

const addPaciente = async ({
  id,
  nombre,
  direccion,
  fecha_nac,
  telefono,
  contacto_emergencia,
  habitacion,
  tipo_sangre,
  hist_clinico,
  epecificaciones,
  credencial_medica,
}) => {
  try {
    console.log(id);
    await setDoc(doc(db, "pacientes", id), {
      id,
      nombre,
      direccion,
      fecha_nac,
      telefono,
      contacto_emergencia,
      habitacion,
      tipo_sangre,
      hist_clinico,
      epecificaciones,
      credencial_medica,
    });
  } catch (e) {
    return { error: e };
  }
};

const addArea = async ({
  nombre,
  enfermeros,
  pacientes,
  forma_de_llamado,
  activo = true,
}) => {
  try {
    await addDoc(collection(db, "areas"), {
      nombre,
      enfermeros,
      pacientes,
      forma_de_llamado,
      activo,
    });
  } catch (e) {
    return { error: e };
  }
};

const getAreasOfEnfermero = async (id) => {
  const q = query(
    collection(db, "areas"),
    where("enfermeros", "array-contains", id),
    where("activo", "==", true)
  );
  const querySnapshot = await getDocs(q);
  const areasOfEnfermero = [];
  querySnapshot.forEach((d) =>
    areasOfEnfermero.push({ id: d.id, ...d.data() })
  );
  return areasOfEnfermero;
};

const getArea = async (id) => {
  return (await getDoc(doc(db, "areas", id))).data();
};

const getEnfermerosOfArea = async (id) => {
  const area = await getArea(id);
  const q = query(
    collection(db, "enfermeros"),
    where("id", "in", area.enfermeros)
  );
  const querySnapshot = await getDocs(q);
  const enfermeros = [];
  querySnapshot.forEach((d) => enfermeros.push({ id: d.id, ...d.data() }));
  return enfermeros;
};

const getPacientesOfArea = async (id) => {
  const area = await getArea(id);
  console.log(area);
  const q = query(
    collection(db, "pacientes"),
    where("id", "in", area.pacientes)
  );
  const querySnapshot = await getDocs(q);
  const pacientes = [];
  querySnapshot.forEach((d) => pacientes.push({ id: d.id, ...d.data() }));
  return pacientes;
};

const authUser = async ({ email, password }) => {
  try {
    console.log(email, password);
    const docRef = collection(db, "enfermeros");
    const result = [];
    await signInWithEmailAndPassword(auth, email, password);

    const q = query(docRef, where("email", "==", email));
    const snap = await getDocs(q);
    snap.forEach((doc) => result.push({ id: doc.id, ...doc.data() }));
    localStorage.setItem("user", JSON.stringify(result[0]));
    return { msg: "logged", user: result[0] };
  } catch (e) {
    return { error: e };
  }
};

export {
  addReport,
  addEnfermero,
  getReports,
  addPaciente,
  addArea,
  getAreasOfEnfermero,
  getEnfermerosOfArea,
  getPacientesOfArea,
  authUser,
};
