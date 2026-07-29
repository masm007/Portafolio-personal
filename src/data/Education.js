export const createEducation = ({
  id,
  name,
  institution,
  level,
  initialDate,
  finalDate = "",
  certificateUrl = "",
}) => ({
  id,
  name,
  institution,
  level,
  initialDate,
  finalDate,
  certificateUrl,
});

export const education = [
  createEducation({
    id: 1,
    name: "Ingeniería en Software",
    institution: "Universidad de Guayaquil",
    level: "9no semestre",
    initialDate: "2021",
    finalDate: "Actualidad",
  }),
];

export const courses = [
  createEducation({
    id: 1,
    name: "Ciberseguridad",
    institution: "Google / Coursera",
    level: "1 de 4 cursos",
    initialDate: "En curso",
  }),
  createEducation({
    id: 2,
    name: "Patrones de diseño en C# Aplicados en ASP .Net",
    institution: "MetalCode",
    level: "1 curso",
    initialDate: "En curso",
  }),
  createEducation({
    id: 3,
    name: "Proramación Backend en .NET",
    institution: "MetalCode",
    level: "1 curso",
    initialDate: "2026",
    certificateUrl:
      "https://drive.google.com/file/d/18yN4rkPM88vxq-McHExSR5wm6PlGWeCO/view?usp=sharing",
  }),
  createEducation({
    id: 4,
    name: "Fundamentos de .NET",
    institution: "MetalCode",
    level: "1 curso",
    initialDate: "2025",
    certificateUrl:
      "https://drive.google.com/file/d/1vWA7aLLI7whQfZ_Pqbf5yx8fewtRCdRS/view?usp=sharing",
  }),
  createEducation({
    id: 5,
    name: "Introducción a Python para Ciencia de Datos",
    institution: "EPICO/Universidad Católica Santiago de Guayaquil",
    level: "1 curso de 20 horas",
    initialDate: "2024",
    certificateUrl:
      "https://drive.google.com/file/d/1jGy2umB7QE-NzZDpxmF3WrsoMD0OZ3ES/view?usp=sharing",
  }),
];
