import React from "react";
import { useOutletContext } from "react-router-dom";
import { CardProject } from "../features/projects/cardProject.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {proyectos} from "../data/Projects.js";
import "../assets/styles/styles.css";

export const FeaturedProjects = () => {
  const renderCards = (arr) =>
    arr.map((p) => <CardProject proyecto={p} key={p.id} />);

  const caja = (projects) => (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 0.5,
        justifyContent: { xs: "center", sm: "center", md: "space-around" },
        alignItems: "flex-start",
      }}
      className="carrouselCards"
    >
      {renderCards(projects)}
    </Box>
  );

  return (
    <Box className="cardMainContainer">
      <Typography variant="h5" sx={{fontWeight: 700, paddingTop: "10px"}} >Proyectos destacados</Typography>
      {caja(proyectos)}
    </Box>
  );
};
