import React from "react";
import "./Buttons.css";

export default function Buttons() {
  const conversion = () => {
    return window.gtag_report_conversion("#");
  };

  return (
    <div className="Buttons">
      <a
        className="whatsapp-btn trigger visible-xs visible-sm wow bounceIn"
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=5493516684151&amp;text=Hola, quisiera realizar una consulta."
        id="whatsapp-btn"
        onClick={conversion}
      >
        <img
          src="/icons/icowpp.svg"
          alt="wpp"
          width="25px"
          height="25px"
          aria-hidden="true"
          className="wppButton"
        />
      </a>
    </div>
  );
}
