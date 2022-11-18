import { useRef } from "react";
import styled from "styled-components";
import { authUser } from "../db/controller";

const LoginContainer = styled.div`
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  font-family: "Calibri";
  margin: 10% auto;
  vertical-align: middle;
  box-shadow: 1px 2px 2px 4px #eee;
  padding: 20px;

  input {
    margin: 10px 0;
    padding: 5px 10px;
  }
`;

const SubmitButton = styled.div`
  background: #378;
  color: #eee;
  padding: 5px 0;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid #eee;
  margin: 10px 0;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    transition: 300ms;
    background: #299;
  }
`;

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const onSubmit = async () => {
    const result = await authUser({
      email: email.current.value,
      password: password.current.value,
    });
    if (result.msg === "logged") window.location.pathname = "/areas";
  };
  return (
    <LoginContainer>
      <h2>Iniciar Sesion</h2>
      <input ref={email} type="email" placeholder="Email" />
      <input ref={password} type="password" placeholder="Contraseña" />
      <SubmitButton onClick={onSubmit}>Iniciar</SubmitButton>
    </LoginContainer>
  );
};

export default Login;
