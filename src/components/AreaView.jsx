import { useEffect, useState } from "react";
import { getEnfermerosOfArea, getPacientesOfArea } from "../db/controller";
import styled from "styled-components";
import ModalPaciente from "./ModalPaciente";

const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  font-family: "Calibri";
  margin: auto;
  padding: 30px 10px;
  vertical-align: center;
  box-shadow: 2px 2px 2px 3px #3333;
`;

const Heading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #222;
  margin: 15px 0;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${({ bold }) => (bold ? "bold" : "")};
  border: 1px dotted black;
  div {
    min-width: 150px;
    text-align: center;
  }
  ${({ bold }) =>
    bold
      ? ""
      : `&:hover {
    background: #ee6;
    cursor: pointer;
  }`};
`;

export default function AreaView(props) {
  const [pacientes, setPacientes] = useState([]);
  const [enfermeros, setEnfermeros] = useState([]);

  const [pacienteActual, setPacienteActual] = useState("");
  const fetchData = async () => {
    const areaId = window.location.pathname.split("/").at(-1);
    const pacientes = await getPacientesOfArea(areaId);
    setPacientes(pacientes);
    const enfermeros = await getEnfermerosOfArea(areaId);
    setEnfermeros(enfermeros);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AreaContainer>
      <ModalPaciente
        paciente={pacienteActual}
        onClose={() => setPacienteActual(null)}
      />
      <Heading>Pacientes</Heading>
      <Item bold>
        <div>DNI</div>
        <div>Nombre</div>
        <div>Habitación</div>
      </Item>
      {pacientes.map((p) => (
        <Item onClick={() => setPacienteActual(p)}>
          <div>{p.id}</div>
          <div>{p.nombre}</div>
          <div>{p.habitacion}</div>
        </Item>
      ))}
      <Heading>Enfermeros</Heading>
      <Item bold>
        <div>DNI</div>
        <div>Nombre</div>
      </Item>
      {enfermeros.map((e) => (
        <Item>
          <div>{e.id}</div>
          <div>{e.nombre}</div>
        </Item>
      ))}
    </AreaContainer>
  );
}
