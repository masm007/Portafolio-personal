import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions, CardHeader, CardMedia, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import front from "../../assets/images/frontend.png";
import back from "../../assets/images/backend.png";
import full from "../../assets/images/Fullstack.png";
import desktop from "../../assets/images/Desktop.png";
import defo from "../../assets/images/default.jpg";
import Typography from "@mui/material/Typography";
import { GitHub } from "@mui/icons-material";
import "../../assets/styles/styles.css";

export const Carta = ({ proyecto }) => {
  const clasificarImg = (name = "") => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes("frontend")) {
      return front;
    }
    if (nameLower.includes("backend")) {
      return back;
    }
    if (nameLower.includes("desktop")) {
      return desktop;
    }
    if (nameLower.includes("fullstack")) {
      return full;
    }
    return defo;
  };

  const formatDate = (dateString) => {
    let date = new Date(dateString);
    date = date.toLocaleDateString();
    return date;
  };

  return (
    <>
      <Card
        className="Card"
        sx={{
          flex: "1 0 auto",
          minHeight: 500,
          minWidth: 280,
          maxWidth: 400,
          width: "80vw",
          //backgroundColor: "#A9D9C2",
          backgroundColor: "#f4ede4",
          boxShadow: "2px 1px 1px black",
        }}
      >
        <CardHeader
          avatar={<Avatar src={clasificarImg(proyecto.name)}></Avatar>}
          //title={proyecto.name}
          title={
            <Typography
              variant="h3"
              sx={{
                textAlign: "left",
                fontWeight: 600,
                fontSize: "16px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              {proyecto.name}
            </Typography>
          }
          subheader={
            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
                fontSize: "14px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              {"Publicado: " + formatDate(proyecto.created_at)}
            </Typography>
          }
        />
        <CardMedia
          component="img"
          height="220px"
          sx={{ objectFit: "contain" }}
          image={clasificarImg(proyecto.name)}
          alt="Frontend"
        />
        <CardContent>
          {/* 20px - 14px */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontWeight: "bold",
              fontSize: "14px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            {proyecto.language}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "14px",
            }}
          >
            {proyecto.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Ver en GitHub">
            <IconButton
              sx={{
                color: "#012619",
                "&:hover": {
                  backgroundColor: "#8250DF",
                  transform: "scale(1.2)",
                  color: "white",
                },
              }}
              component="a"
              href={proyecto.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  );
};
