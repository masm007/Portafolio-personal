import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions, CardHeader, CardMedia, Tooltip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import defo from "../../assets/images/default.jpg";
import Typography from "@mui/material/Typography";
import { GitHub } from "@mui/icons-material";
import Chip from "@mui/material/Chip";
import BuildIcon from "@mui/icons-material/Build";
import Collapse from "@mui/material/Collapse";
import "../../assets/styles/styles.css";

export const CardProject = ({ proyecto }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;

    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  }));

  const createChips = (technologies) => {
    return technologies.map((tec) => (
      <Chip
        key={tec}
        icon={<BuildIcon sx={{ fontSize: "medium" }} />}
        label={tec}
        sx={{
          boxShadow: "4px 2px 2px #012619",
          margin: "4px",
          backgroundColor: "#4EA664",
          color: "white",
          "& .MuiChip-icon": {
            color: "white",
          },
        }}
      />
    ));
  };
  return (
    <>
      <Card
        className="Card"
        sx={{
          flex: "1 0 auto",
          minHeight: 500,
          maxWidth: { xs: "70vw", md: "40vw", lg: "26vw" },
          borderRadius: 1,
          border: "1px solid black",
          boxShadow: "1px 1px 1px black",
        }}
      >
        <CardHeader
          //avatar={<Avatar src={defo}></Avatar>}
          avatar={<Avatar sx={{ bgcolor: "#4EA664" }}>{proyecto.id}</Avatar>}
          title={
            <Typography
              variant="h6"
              sx={{
                textAlign: "left",
                fontWeight: 700,
              }}
            >
              {proyecto.name}
            </Typography>
          }
          subheader={
            <Typography
              variant="subtitle2"
              sx={{
                textAlign: "left",
              }}
            >
              {"Publicado: " + (proyecto.date ? proyecto.date : "Sin fecha")}
            </Typography>
          }
        />
        {proyecto.youtubeId ? (
          <CardMedia
            component="iframe"
            height="220"
            src={`https://www.youtube.com/embed/${proyecto.youtubeId}`}
            title={proyecto.name}
            allowFullScreen
            sx={{ border: "none" }}
          />
        ) : (
          <CardMedia
            component="img"
            image={proyecto.gallery?.[0] ?? defo}
            alt={proyecto.name}
            sx={{
              width: "100%",
              maxHeight: 220,
              objectFit: "contain",
              backgroundColor: "#fafafa",
            }}
          />
        )}
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {/* 20px - 14px */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            {proyecto.language}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            {proyecto.framework}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            {proyecto.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
              marginTop: 1,
              marginBottom: 1,
            }}
          >
            {createChips(proyecto.technologies)}
          </Box>
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
              href={proyecto.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
          </Tooltip>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Mostrar más"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Estado:
              </Box>{" "}
              {proyecto.status}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Desarrollado en:
              </Box>{" "}
              {proyecto.participation}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Duración del proyecto:
              </Box>{" "}
              {proyecto.duration}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Categoría:
              </Box>{" "}
              {proyecto.category}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};
