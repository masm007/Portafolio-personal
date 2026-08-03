import {
  restaurantGallery,
  ceragenGallery,
  ceragenBackendGallery,
  ceragen2Gallery,
  tiendaVirtualGallery,
  tiendaVirtualBackendGallery,
  alquilerYatesGallery,
} from "../data/Galleries";

export const createProject = ({
  id,
  name,
  subtitle = "",
  description = "",
  date = "",

  projectType = "Academico",
  category = "Web",

  //image = "",
  gallery = [],
  youtubeUrl = "",
  demoUrl = "",

  technologies = [],
  language = "",
  framework = "",

  githubUrl = "",
  documentationUrl = "",

  status = "Completado",

  features = [],
  tags = [],

  role = "Frontend",
  participation = "Individual",

  duration = "",
  contribution = "",
}) => ({
  id,
  name,
  subtitle,
  description,
  date,

  projectType,
  category,

  //image,
  gallery,
  youtubeUrl,
  demoUrl,

  technologies,
  language,
  framework,

  githubUrl,
  documentationUrl,

  status,

  features,
  tags,

  role,
  participation,

  duration,
  contribution,
});

export const proyectos = [
  createProject({
    id: 1,
    name: "Tienda Virtual (Backend)",
    subtitle: "Sistema de ventas",
    date: "Abril 7, 2026",
    description:
      "Backend para sistema de tienda virtual desarrollado en C#. Implementa gestión de productos, autenticación de usuarios y lógica para procesamiento de pedidos.",
    technologies: [
      "C#",
      ".NET 9",
      "Minimal API",
      "Clean Architecture",
      "MySQL",
      "Entity Framework Core",
      "JWT",
      "Refresh Tokens",
    ],
    language: "C#",
    framework: ".NET",
    githubUrl: "https://github.com/masm007/Sistema-de-tienda-virtual-Backend",
    gallery: tiendaVirtualBackendGallery,
    status: "En desarrollo",
    role: "Backend",
    participation: "Individual",
    duration: "No especificada",
    category: "API",
    tags: ["API", "C#", ".NET", "Backend"],
  }),

  createProject({
    id: 2,
    name: "Tienda Virtual (Frontend)",
    subtitle: "Sistema de ventas",
    date: "Abril 24, 2026",
    description:
      "Frontend de una tienda virtual desarrollado con React y TypeScript. Incluye catálogo de productos, carrito de compras y diseño responsive orientado a experiencia de usuario.",
    technologies: ["TypeScript", "React", "Vite", "Material UI"],
    language: "TypeScript",
    framework: "React",
    githubUrl: "https://github.com/masm007/Sistema-de-tienda-virtual-Frontend",
    gallery: tiendaVirtualGallery,
    status: "En desarrollo",
    role: "Frontend",
    participation: "Individual",
    duration: "No especificada",
    category: "Web",
    tags: ["Ecommerce", "React", "Frontend", "Responsive"],
  }),

  createProject({
    id: 3,
    name: "Gestión de Restaurant",
    date: "Diciembre 12, 2024",
    description:
      "Participé en el desarrollo de los módulos de gestión de menús y pedidos utilizando Spring Boot y Thymeleaf.",
    technologies: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "MySQL",
      "Spring Data JPA",
    ],
    language: "Java",
    framework: "Spring Boot",
    githubUrl: "https://github.com/masm007/Gestion-de-Restaurant",
    gallery: restaurantGallery,
    role: "Fullstack",
    participation: "Equipo",
    duration: "1 mes",
    category: "Web",
    tags: ["Pedidos", "Menús", "Spring"],
  }),

  createProject({
    id: 4,
    name: "Ceragen (Backend)",
    subtitle: "Sistema Médico",
    date: "Junio 19, 2025",
    description:
      "Backend del módulo de facturación desarrollado con Flask. Incluye gestión de facturas, cálculos automáticos y pagos en partes.",
    technologies: ["Python", "Flask", "PostgreSQL", "RESTful", "JWT"],
    language: "Python",
    framework: "Flask",
    githubUrl:
      "https://github.com/masm007/Modulo-de-Facturacion-Sistema-Medico-Backend",
    gallery: ceragenBackendGallery,
    role: "Backend",
    participation: "Equipo",
    duration: "2 meses",
    category: "API",
    tags: ["Django", "REST", "Facturación"],
  }),

  createProject({
    id: 5,
    name: "Ceragen (Frontend)",
    date: "Junio 20, 2025",
    subtitle: "Sistema Médico",
    description:
      "Desarrollo del módulo de facturación utilizando React. Implementé CRUD de facturas, cálculo dinámico de totales y manejo de pagos parciales.",
    technologies: ["JavaScript", "React", "Vite", "Material UI"],
    language: "JavaScript",
    framework: "React",
    githubUrl:
      "https://github.com/masm007/Modulo-de-Facturacion-Sistema-Medico-Frontend",
    gallery: ceragenGallery,
    role: "Frontend",
    participation: "Equipo",
    duration: "2 meses",
    category: "Web",
    tags: ["CRUD", "Facturación", "React"],
  }),

  createProject({
    id: 6,
    name: "Ceragen 2",
    subtitle: "Sistema Médico",
    date: "Octubre 23, 2025",
    description:
      "Aplicación de escritorio desarrollada con JavaFX bajo patrón MVC para la gestión de facturación médica. Incluye registro de facturas, cálculo automático de montos y manejo de datos desde interfaz gráfica.",
    technologies: ["Java", "JavaFX", "MySQL", "MVC"],
    language: "Java",
    framework: "JavaFX",
    githubUrl: "https://github.com/masm007/Modulo-de-Facturacion-Ceragen_2",
    gallery: ceragen2Gallery,
    status: "Completado",
    role: "Fullstack",
    participation: "Equipo",
    duration: "1 mes",
    category: "Desktop",
    tags: ["JavaFX", "MVC", "Facturación", "Desktop"],
  }),

  createProject({
    id: 7,
    name: "Sistema de Alquiler de Yates",
    subtitle: "Aplicación móvil de gestión",
    date: "Febrero 7, 2026",
    description:
      "Aplicación móvil desarrollada con Flutter para la gestión de alquiler de yates. Participé en el desarrollo del módulo de clientes.",
    technologies: ["Dart", "Flutter", "Android", "Material Design 3"],
    language: "Dart",
    framework: "Flutter",
    githubUrl: "https://github.com/masm007/Modulo-de-Clientes-Sistema-de-Yates",
    gallery: alquilerYatesGallery,
    status: "Completado",
    role: "Mobile",
    participation: "Equipo",
    duration: "2 semanas",
    category: "Mobile",
    tags: ["Flutter", "Gestión", "Clientes", "Mobile"],
  }),
];
