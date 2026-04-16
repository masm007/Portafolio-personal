import React from "react";
import { useOutletContext } from "react-router-dom";
import { Carta } from "../features/projects/card.jsx";
import Box from "@mui/material/Box";

export const Projects = () => {
  const { proyectos } = useOutletContext();
  const backend = proyectos.filter((pj) =>
    pj.name.toLowerCase().includes("backend"),
  );
  const frontend = proyectos.filter((pj) =>
    pj.name.toLowerCase().includes("frontend"),
  );
  const other = proyectos.filter(
    (pj) =>
      !pj.name.toLowerCase().includes("frontend") &&
      !pj.name.toLowerCase().includes("backend"),
  );
  const renderCards = (arr) =>
    arr.map((p) => (
      <Carta proyecto={p} key={p.id} />
      //<div style={{ display: "flex", textAlign: "center", alignContent: "center" }} key={p.id}>
      //<Carta proyecto={p} key={p.id} />
      //</div>
    ));

  const caja = (projectType) => (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
        gap: 0.5,
        justifyContent: { xs: "center" , sm: "center", md: "space-evenly"},
        alignItems: "center"
      }}
      className="carrouselCards"
    >
      {renderCards(projectType)}
    </Box>
  );

  return (
    <Box className="cardMainContainer">
      <h2 className="cardElement">Backend</h2>
      {caja(backend)}
      <h2 className="cardElement">Frontend</h2>
      {caja(frontend)}
      <h2 className="cardElement">Otros</h2>
      {caja(other)}
    </Box>
  );
};
