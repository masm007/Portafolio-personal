import React from "react";
import { BarChart } from "@mui/x-charts";
import { BarPlot } from "@mui/x-charts/BarChart";

export const LanguageBarChart = ({ count }) => {
  const colors = [
    "#A9D9C2",
    "#f1e05a",
    "#3572A5",
    "#b07219",
    "#178600",
    "#3178c6",
    "#e34c26",
    "#563d7c",
    "#89e051",
  ];
  const counts = count.reduce((acc, l) => {
    if (!l) return acc;
    acc[l] = (acc[l] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(counts);
  const data = Object.values(counts);

  return (
    <BarChart
      sx={{ margin: "5px", overflow: "auto" }}
      width={500}
      height={300}
      colors={colors}
      series={[
        {
          data: data,
          label: "Proyectos",
        },
      ]}
      xAxis={[
        {
          scaleType: "band",
          data: labels,
        },
      ]}
    />
  );
};
