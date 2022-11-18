import styled from "styled-components";

const Table = styled.div`
  font-family: "Calibri";
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderItem = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: capitalize;
`;
const ReportsTable = ({ reports }) => {
  console.log(reports);
  const columns = reports.length && Object.keys(reports[0]).sort();
  if (columns)
    return (
      <Table>
        {/* <Row className="headers">
        {columns.map((c) => (
          <HeaderItem>{c}</HeaderItem>
        ))}
      </Row>
      <div>
        {reports.map((r) => (
          <Row>
            {columns.map((c) => (
              <div>{r[c]}</div>
            ))}
          </Row>
        ))}
      </div> */}
        <Row>
          {columns.map((c) => (
            <Column>
              <HeaderItem>{c}</HeaderItem>
              {reports.map((r) => (
                <div>{r[c]}</div>
              ))}
            </Column>
          ))}
        </Row>
      </Table>
    );
};

export default ReportsTable;
