import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  background: #333;

  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 0 30px;
  }
  .material-icons {
    color: #eee;
    cursor: pointer;
  }
`;

const Nav = () => {
  const onLogout = () => {
    localStorage.removeItem("user");
    window.location.pathname = "/login";
  };
  return (
    <NavContainer>
      <a href="/">
        <span className="material-icons">home</span>{" "}
      </a>
      <a href="/areas">
        <span className="material-icons">place</span>{" "}
      </a>
      <span className="material-icons" onClick={onLogout}>
        logout
      </span>
    </NavContainer>
  );
};

export default Nav;
