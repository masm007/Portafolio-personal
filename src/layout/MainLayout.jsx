import React from "react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// Componentes
import { Footer } from "../components/organisms/Footer.jsx";
import { Navbar } from "../components/organisms/Navbar.jsx";
import { Header } from "../components/organisms/Header.jsx";

export const MainLayout = () => {
  const [headerTitle, setHeaderTitle] = useState("Marco Salazar");
  const [proyectos, setProyectos] = useState([]);

  const datos = async () => {
    try {
      let respuesta = await fetch("https://api.github.com/users/masm007/repos");
      let repos = await respuesta.json();
      setProyectos(repos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    datos();
  }, []);

  // Funcion para cambiar el titulo
  const changeHeaderTitle = (newTitle) => {
    setHeaderTitle(newTitle);
  };

  return (
    <div className="App">
      <Header title={headerTitle} />
      <Navbar />
      <Outlet context={{proyectos}}></Outlet>
      <Footer />
    </div>
  );
};
