import React, { useState } from "react";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import { Link, useParams } from "react-router-dom";
import { proyectos } from "../../data/projects";
import { createChips } from "./CardProject";

export const Project = () => {
  const { projectSlug } = useParams();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = proyectos.find((p) => p.slug === projectSlug);

  if (!project) {
    return <Typography>Proyecto no encontrado</Typography>;
  }

  const cols = Math.min(project.gallery.length, 3);

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "20px",
        maxWidth: {
          sm: "90vw",
          md: "80vw",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" fontWeight={700}>
        {project.name}
      </Typography>
      <Typography variant="h4" fontWeight={400}>
        {project.subtitle}
      </Typography>
      <Typography variant="subtitle1">{project.date}</Typography>
      <Box sx={{ maxWidth: { sm: "80vw", md: "50vw" } }}>
        <Typography variant="body1">{project.description}</Typography>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        textAlign={"center"}
      >
        {/*<Typography variant="subtitle1">Tecnologías</Typography>*/}
        <Box>{createChips(project.technologies)}</Box>
      </Box>

      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        <Box component="span" sx={{ fontWeight: "bold" }}>
          Estado:
        </Box>{" "}
        {project.status}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        <Box component="span" sx={{ fontWeight: "bold" }}>
          Desarrollado en:
        </Box>{" "}
        {project.participation}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        <Box component="span" sx={{ fontWeight: "bold" }}>
          Rol en el proyecto:
        </Box>{" "}
        {project.role}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        <Box component="span" sx={{ fontWeight: "bold" }}>
          Duración del proyecto:
        </Box>{" "}
        {project.duration}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        <Box component="span" sx={{ fontWeight: "bold" }}>
          Categoría:
        </Box>{" "}
        {project.category}
      </Typography>
      <Button
        component="a"
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<GitHub />}
        sx={{color: "#8250DF"}}
      >
        Visitar repositorio en GitHub
      </Button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={project.gallery.map((img) => ({ src: img }))}
        plugins={[Zoom, Counter, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
        }}
      />
      <ImageList
        variant="masonry"
        cols={cols}
        gap={12}
        sx={{
          width: "100%",
          maxWidth: 900,
        }}
      >
        {project.gallery.map((img, index) => (
          <ImageListItem key={index}>
            <img
              src={img}
              alt={`${project.name} ${index + 1}`}
              loading="lazy"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
              style={{
                cursor: "pointer",
                borderRadius: "8px",
                transition: "transform .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
