import React from "react";
import { useOutletContext } from "react-router-dom";
import { Carta } from "../features/projects/card.jsx";

export const Projects = () => {
  const { proyectos } = useOutletContext();
  const backend = proyectos.filter((pj) =>
    pj.name.toLowerCase().includes("backend"),
  );
  const frontend = proyectos.filter((pj) =>
    pj.name.toLowerCase().includes("frontend"),
  );
  const other = proyectos.filter(
    (pj) =>
      !pj.name.toLowerCase().includes("frontend") &&
      !pj.name.toLowerCase().includes("backend"),
  );
  const renderCards = (arr) =>
    arr.map((p) => (
      <Carta proyecto={p} key={p.id} />
      //<div style={{ display: "flex", textAlign: "center", alignContent: "center" }} key={p.id}>
      //<Carta proyecto={p} key={p.id} />
      //</div>
    ));
  return (
    <div className="cardMainContainer">
      <h2 className="cardElement">Backend</h2>
      <div className="carrouselCards">{renderCards(backend)}</div>
      <h2 className="cardElement">Frontend</h2>
      <div className="carrouselCards">{renderCards(frontend)}</div>
      <h2 className="cardElement">Varios</h2>
      <div className="carrouselCards">{renderCards(other)}</div>
    </div>
  );
};
