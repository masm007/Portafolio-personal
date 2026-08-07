import React from "react";
import { useEffect } from "react";
import { ContactPage } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { LanguageChip } from "../features/profile/LanguageChip.jsx";
import { LanguageBarChart } from "../features/profile/LanguageBarChart.jsx";
import { Card, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../assets/styles/styles.css";
import fotoCv from "../assets/images/linkedin.jpg";
import { EducationCard } from "../features/profile/EducationCard.jsx";
import Box from "@mui/material/Box";
import { education, courses } from "../data/education.js";
import {
  BackendTechnologies,
  FrontendTechnologies,
  DatabaseTechnologies,
  ArchitectureTechnologies,
  DevTools,
} from "../data/technologies.js";
import { SkillsCard } from "../features/profile/SkillsCard.jsx";

export const Information = () => {
  const { proyectos } = useOutletContext();
  const languages = [
    ...new Set(proyectos.map((p) => p.language).filter(Boolean)),
  ];
  const countLanguages = proyectos.map((p) => p.language);

  const showSkill = (title, array) => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "0.5fr 1fr",
        alignItems: "start",
        gap: 2,
        mb: 2,
      }}
    >
      <Typography sx={{ fontWeight: 500 }}>{title}</Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {array.map((tech) => (
          <SkillsCard key={tech} name={tech} />
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      className="infoContent"
      style={{ overflowX: "auto" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        className="infoElement"
        sx={{
          maxWidth: {
            sm: "80vw",
            md: "60vw",
          },
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
          <Typography
            variant="body1"
            className="infoElement"
            sx={{ fontWeight: 500 }}
          >
            Hola, mi nombre es Marco Salazar. Me apasiona el desarrollo de
            aplicaciones web y disfruto trabajar tanto en el frontend como en el
            backend.
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
            href="https://drive.google.com/file/d/1GO7KX9XZ21XtrW3K101ug012b2Ua6ZsZ/view?usp=sharing"
            target="_blank"
            startIcon={<ContactPage />}
          >
            Descargar CV
          </Button>
        </CardContent>
      </Card>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="h6"
            className="infoElement"
            sx={{ fontWeight: 700 }}
          >
            Educación
          </Typography>
          {education.map((item) => (
            <EducationCard key={item.id} data={item}></EducationCard>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="h6"
            className="infoElement"
            sx={{ fontWeight: 700 }}
          >
            Cursos
          </Typography>
          {courses.map((item) => (
            <EducationCard key={item.id} data={item}></EducationCard>
          ))}
        </Box>
      </Box>
      <Box sx={{ maxWidth: "80vw" }}>
        <Typography
          variant="h6"
          className="infoElement"
          sx={{ fontWeight: 700 }}
        >
          Stack tecnológico
        </Typography>
        {showSkill("Backend", BackendTechnologies)}
        {showSkill("Frontend", FrontendTechnologies)}
        {showSkill("Bases de datos y ORM", DatabaseTechnologies)}
        {showSkill("Arquitecturas", ArchitectureTechnologies)}
        {showSkill("Herramientas", DevTools)}
      </Box>

      <Typography variant="h6" className="infoElement" sx={{ fontWeight: 700 }}>
        Lenguajes en los que he desarrollado
      </Typography>
      <Box>
        {languages.map((lang) => (
          <LanguageChip className="infoElement" key={lang} lang={lang} />
        ))}
      </Box>
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
        cuenta de github
      </Typography>
      <LanguageBarChart
        className="infoElement"
        count={countLanguages}
      ></LanguageBarChart>
    </Box>
  );
};
