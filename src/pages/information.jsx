import React from "react";
import { useEffect } from "react";
import { ContactPage } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { LanguageChip } from "../features/profile/languageChip.jsx";
import { LanguageBarChart } from "../features/profile/languageBarChart.jsx";
import { Card, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../assets/styles/styles.css";
import fotoCv from "../assets/images/linkedin.jpg";

export const Information = () => {
  const { proyectos } = useOutletContext();
  const languages = [
    ...new Set(proyectos.map((p) => p.language).filter(Boolean)),
  ];
  const countLanguages = proyectos.map((p) => p.language);

  useEffect(() => {
    console.log(languages);
  }, [languages]);

  return (
    <div className="infoContent" style={{ overflowX: "auto" }}>
      <Card
        className="infoElement"
        sx={{
          maxWidth: 500,
          margin: "10px auto",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <CardMedia
          component="img"
          //image={proyectos[0]?.owner.avatar_url}
          image={fotoCv}
          sx={{ width: 200, height: 200, margin: "auto", borderRadius: "50%" }}
        />
        <CardContent>
          <Typography variant="body1" className="infoElement" sx={{ fontWeight: 500 }}>
            Hola mi nombre es Marco Salazar, actualmente soy estudiante del 9no
            semestre de la Universidad de Guayaquil en la carrera de Software
          </Typography>
          <Button
            className="infoElement"
            variant="contained"
            sx={{
              backgroundColor: "#4ea664",
              transition: "transform 0.2s ease-in-out",
              color: "white",
              margin: "10px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "darkgreen",
                transform: "scale(1.1)",
              },
            }}
            href="https://drive.google.com/file/d/10-gM0A8Qjwu2HXAJOOgZ7HALJ2hL-lV7/view?usp=sharing"
            target="_blank"
            startIcon={<ContactPage />}
          >
            Descargar CV
          </Button>
        </CardContent>
      </Card>
      <Typography variant="h6" className="infoElement" sx={{ fontWeight: 700 }}>
        Lenguajes en los que he desarrollado
      </Typography>
      {languages.map((lang) => (
        <LanguageChip className="infoElement" key={lang} lang={lang} />
      ))}
      <Typography variant="h6" className="infoElement" sx={{ fontWeight: 700 }}>
        Cantidad de proyectos en cada lenguaje
      </Typography>
      <Typography
        variant="body1"
        className="infoElement"
        sx={{
          fontWeight: 500,
        }}
      >
        Este grafico es generado de los proyectos públicos que existen en mi
        github
      </Typography>
      <LanguageBarChart
        className="infoElement"
        count={countLanguages}
      ></LanguageBarChart>
    </div>
  );
};
