import React, { useState, useEffect } from "react";
import "./FormModal.css";
import ValidateForm from "./ValidateForm";
import validate from "./Validate";
import Gracias from "./Gracias";

const FormModal = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = ValidateForm(
    submitForm,
    validate
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  function submitForm() {
    setIsSubmitted(true);
    setShowForm(false);
    const formSection = document.getElementsByClassName("signupFrmModal")[0];
    formSection.classList.add("hideFormSection");
  }

  return (
    <>
      <div className="signupFrmModal">
        <div className="tituloFormModal">
          <h2>Consultá YA!</h2>
          <h3>Completá el formulario y no te pierdas la<br/> oportunidad de ser propietario</h3>
        </div>

        <form className="form-modal" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              placeholder="a"
              value={values.name}
              onChange={handleChange}
            />
            <label htmlFor="name" className="label">
              Nombre y Apellido
            </label>
            {errors.name && (
              <small className="input-error">{errors.name}</small>
            )}
          </div>

          <div className="inputContainer">
            <input
              type="text"
              name="email"
              id="email"
              className="input"
              placeholder="a"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="email" className="label">
              Email
            </label>
            {errors.email && (
              <small className="input-error">{errors.email}</small>
            )}
          </div>

          <div className="grid-container">
            <div className="inputContainer">
              <input
                type="number"
                name="area_code"
                id="area_code"
                className="input"
                placeholder="a"
                value={values.area_code}
                onChange={handleChange}
                />
              <label htmlFor="phone" className="label">
                Código de área
              </label>
              {errors.area_code && (
                <small className="input-error">{errors.area_code}</small>
              )}
            </div>

            <div className="inputContainer">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="input"
                placeholder="a"
                value={values.phone}
                onChange={handleChange}
                />
              <label htmlFor="phone" className="label">
                Teléfono
              </label>
              {errors.phone && (
                <small className="input-error">{errors.phone}</small>
              )}
            </div>
          </div>

          <div className="inputConsulta">
            <textarea
              name="comment"
              className="input"
              id="comment"
              rows="3"
              minLength="10"
              placeholder="a"
              value={values.comment}
              onChange={handleChange}
            />
            <label htmlFor="comment" className="label">
              Consulta
            </label>
            {errors.comment && (
              <small className="input-error">{errors.comment}</small>
            )}
          </div>
          
          <button type="submit" className="form-input-btn submitBtn">ENVIAR</button>
        </form>
      </div>
      {!showForm && <Gracias />}
    </>
  );
};

export default FormModal;
