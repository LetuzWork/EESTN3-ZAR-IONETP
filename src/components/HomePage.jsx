import { useEffect, useState } from "react";
import { getReports } from "../db/controller";
import Graficos from "./Graficos";
import ReportsTable from "./ReportsTable";

const HomePage = () => {
  const [reports, setReports] = useState([]);
  const fetchData = async () => {
    const reports = await getReports();
    setReports(reports);
    console.log(reports);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Graficos reports={reports} />
      <ReportsTable reports={reports} />
    </div>
  );
};

export default HomePage;
