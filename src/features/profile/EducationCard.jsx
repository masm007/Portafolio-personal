import React from "react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import { WorkspacePremiumSharp } from "@mui/icons-material";

export const EducationCard = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 1,
        boxShadow: "1px 1px 1px black",
        padding: 2,
        border: "1px solid black",
        minWidth: "40vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          textAlign: "start"
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 700, paddingTop: "10px" }}
        >
          {data.name}
        </Typography>
        <Typography variant="body1">{data.institution}</Typography>
        <Typography variant="body1">{data.level}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Typography variant="hbody15">
          {data.initialDate} {data.finalDate ? ` - ${data.finalDate}` : ""}
        </Typography>
        {data.certificateUrl && (
          <Tooltip title="Certificado del curso">
            <IconButton
              component="a"
              href={data.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WorkspacePremiumSharp />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};
