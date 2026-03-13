import React from "react";
import "../assets/styles/styles.css"

export const Header = ({title}) => {
  return (
    <div className="Header">
      <div className="headerContent">
        {/* <h1 className="titulo">{title ? {title} : 'No disponible'}</h1> */}
        <h1 className="headerElement">{title}</h1>
      </div>
    </div>
  );
};