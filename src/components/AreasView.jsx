import { useEffect, useState } from "react";
import { getAreasOfEnfermero } from "../db/controller";
import styled from "styled-components";

const StyledArea = styled.div`
  font-family: "Calibri";
  box-shadow: 1px 1px 2px 3px #3333;
  border-radius: 5px;
  position: relative;

  background: #fd98bb;

  width: 180px;
  height: 100px;
  text-align: center;
  margin: 15px;
  .area_name {
    padding-top: 20px;
    font-size: 24px;
    color: white;
    text-shadow: #eee;
  }
  &:hover {
    background: #f8afd9;
    transition: 500ms;
  }
  a {
    color: #333;
    border: 0;
  }
`;

const Solapa = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: 0;
  border-radius: 10% 10% 0 0;
  background: white;
`;

export default function AreasView({ user }) {
  const [areas, setAreas] = useState([]);
  const getDataAreas = async () => {
    console.log(user);
    const x = await getAreasOfEnfermero(user.id);
    setAreas(x);
  };
  useEffect(() => {
    getDataAreas();
  }, []);
  return (
    <div>
      {areas.map((area) => (
        <StyledArea>
          <a href={"/area/" + area.id}>
            <div className="area_name">{area.nombre}</div>
            <Solapa />
          </a>
        </StyledArea>
      ))}
    </div>
  );
}
