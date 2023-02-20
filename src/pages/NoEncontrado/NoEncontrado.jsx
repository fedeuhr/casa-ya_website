import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./NoEncontrado.css";

const NoEncontrado = () => {
  return (
    <>
      <Helmet>
        <title>No encontrado | Casa YA</title>
      </Helmet>
      <div className="contenedor">
        <div className="contenedor-contenido">
          <img
            className="imagen-logo"
            src="/images/icons/logo-only.png"
            alt="Logo Casa Ya"
          />
          <h3 className="titulo">Página no encontrada</h3>
          <p className="parrafo">
            La url de la página que solicitaste no es correcta. Hacé clic en el
            botón para regresar a la página de inicio o buscar nuestros modelos.
          </p>
          <Link className="button" to="/">
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoEncontrado;