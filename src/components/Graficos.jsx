// import { useRef } from "react";
import { Chart } from "react-google-charts";

const Graficos = ({ reports }) => {
  // const GraficoDeBarras = useRef();
  // const myBarChart = new Chart(GraficoDeBarras, {
  //   type: "horizontalBar",
  //   data: [
  //     reports.filter((x) => x.urgente).length,
  //     reports.filter((x) => !x.urgente).length,
  //     reports.filter((x) => x.enfermero).length,
  //     reports.filter((x) => !x.enfermero).length,
  //   ],
  //   options: {},
  // });
  const data = [
    ["Llamadas", "Si", "No "],
    // ["Total", reports.length],
    [
      "Urgentes",
      reports.filter((x) => x.urgente).length,
      reports.filter((x) => !x.urgente).length,
    ],
    [
      "Atendidas",
      reports.filter((x) => x.enfermero).length,
      reports.filter((x) => !x.enfermero).length,
    ],
  ];

  const options = {
    title: "Estadisticas de reportes de llamadas",
    chartArea: { width: "100%" },
    hAxis: {
      title: "Total Population",
      minValue: 0,
    },
    vAxis: {
      title: "Reportes",
    },
  };
  console.log(data);
  return (
    <div /* ref={GraficoDeBarras} */ className="root">
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Graficos;
