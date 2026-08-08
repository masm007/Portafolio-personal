import React from "react";
import "../../assets/styles/styles.css"
import { Box, Typography } from "@mui/material";

export const Header = ({title}) => {
  return (
    <Box className="Header">
      <Box className="headerContent">
        {/* <h1 className="titulo">{title ? {title} : 'No disponible'}</h1> */}
        <h1 className="headerElement">{title}</h1>
      </Box>
    </Box>
  );
};