import styled from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  left: 50%;
  transform: translate(-50%, 0);
  /* width: 00px; */
  padding: 10px 20px;
  border-radius: 3px;
  vertical-align: middle;
`;
const BluredBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #333c;
  cursor: pointer;
`;

const ModalPaciente = ({ paciente, onClose }) => {
  const formatText = (text) => (
    <div style={{ textTransform: "capitalize" }}>
      {text.split("_").join(" ")}
    </div>
  );
  if (paciente)
    return (
      <>
        <BluredBG onClick={onClose} />
        <StyledModal>
          {Object.keys(paciente).map((k, bold) => {
            const item = (ente, k) => (
              <div
                style={{ display: "flex", fontWeight: bold, marginRight: 10 }}
              >
                {formatText(k + ": ")} <div>{ente[k]}</div>
              </div>
            );
            switch (k) {
              case "credencial_medica":
              case "contacto_emergencia":
                return (
                  <div>
                    {formatText(k, "bold")}
                    <div style={{ marginLeft: 30 }}>
                      {Object.keys(paciente[k]).map((sk) =>
                        item(paciente[k], sk)
                      )}
                    </div>
                  </div>
                );
              case "hist_clinico":
                return "";
              default:
                return item(paciente, k);
            }
          })}
        </StyledModal>
      </>
    );
};

export default ModalPaciente;
