import React from "react";
import PropTypes from "prop-types";

export const Home = ({ name, description, url }) => {
  //rafc
  return (
    <>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <a href={url}> Video</a>
      <img
        className="infoElement"
        //src={proyectos[0]?.owner.avatar_url}
        width="200"
        height="200"
      ></img>
      <p className="infoElement">
        Hola mi nombre es Marco Salazar, actualmente soy estudiante del 9no
        semestre de la Universidad de Guayaquil en la carrera de Software
      </p>
    </>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Home.defaultProps = {
  name: "PROYECTO",
  description: "ESTO ES UN PROYECTO",
  url: "NO DISPONIBLE",
};
