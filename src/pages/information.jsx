import React from "react";
import { useEffect } from "react";
import { ContactPage } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { LanguageChip } from "../algo/languageChip.jsx";
import { LanguageBarChart } from "../algo/languageBarChart.jsx";
import { Card, CardContent, CardMedia } from "@mui/material";

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
    <div className="infoContent">
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
          image={proyectos[0]?.owner.avatar_url}
          sx={{ width: 200, height: 200, margin: "auto", borderRadius: "50%" }}
        />
        <CardContent>
          <p>
            Hola mi nombre es Marco Salazar, actualmente soy estudiante del 9no
            semestre de la Universidad de Guayaquil en la carrera de Software
          </p>
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
      <h3 className="infoElement">Lenguajes en los que he desarrollado</h3>
      {languages.map((lang) => (
        <LanguageChip className="infoElement" key={lang} lang={lang} />
      ))}
      <h3 className="infoElement">Cantidad de proyectos en cada lenguaje</h3>
      <LanguageBarChart
        className="infoElement"
        count={countLanguages}
      ></LanguageBarChart>
    </div>
  );
};
