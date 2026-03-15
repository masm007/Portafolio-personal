import React from "react";
import Chip from "@mui/material/Chip";
import { Language } from "@mui/icons-material";

export const LanguageChip = ({ lang }) => {
  const languageColors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    "C#": "#178600",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
  };
  const color = languageColors[lang] || "#888";
  return (
    <Chip
      icon={<Language sx={{ color: "white" }} />}
      label={lang}
      sx={{
        boxShadow: "4px 2px 2px black",
        margin: "5px",
        backgroundColor: color,
        color: lang === "JavaScript" ? "black" : "white",
        "& .MuiChip-icon": {
          color: "white",
        },
      }}
    />
  );
};
