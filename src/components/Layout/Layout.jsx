import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="contenedor-layout">
        {children}
      </div>
    </>
  );
};

export { Layout };
