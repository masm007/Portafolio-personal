import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { LanguageChip } from "./LanguageChip";

export const SkillsCard = ({ name }) => {
  return (
    <Chip
      label={name}
      sx={{
        boxShadow: "1px 1px 1px black",
        margin: "3px",
        backgroundColor: "whitesmoke",
        color: "black"
      }}
    />
  );
};
