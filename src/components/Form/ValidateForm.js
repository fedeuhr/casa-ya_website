import { useState, useEffect } from "react";

const ValidateForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    comment: "",
    phone: "",
    area_code: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      var boton = document.getElementsByClassName("form-input-btn")[0];

      boton.setAttribute("disabled", true);

      var myHeaders = new Headers();
      myHeaders.append("content-type", "application/x-www-form-urlencoded");
      myHeaders.append(
        "api-key",
        "$2y$10$h4lsR26IxVblvs8SnK1hY.g2SWImJDkgzHQEeJoqhKl2hJYfhYZC."
      );

      var urlencoded = new URLSearchParams();
      urlencoded.append("nombre_apellido", values.name);
      urlencoded.append("email", values.email);
      urlencoded.append("telefono", values.area_code + values.phone);
      urlencoded.append("website", 14);
      urlencoded.append(
        "comentario",
        values.comment +
          " -- telefono: " +
          values.area_code +
          values.phone +
          " -- url: " +
          values.utm_campain
      );
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch(
        "https://sistemacaliva.com/api/clientes/store?_token=$2y$10$h4lsR26IxVblvs8SnK1hY.g2SWImJDkgzHQEeJoqhKl2hJYfhYZC.",
        requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .then(callback)
        .catch((error) => console.log("error", error));
    }
  });

  return { handleChange, values, handleSubmit, errors };
};

export default ValidateForm;
