import React, { Component } from "react";
import Select from 'react-select';
import "./personal.css";
import "./Editor_style.css";
import mapa from "../../imagenes/mapa.JPG";
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName: null,
      Telefono: null,
      Correo: null,
      formErrors: {
        fullName: "",
        telefono: "",
        correo: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        FullName: ${this.state.FullName}
        Telefono: ${this.state.telefono}
        Correo: ${this.state.correo}
      `);
    } else {
      console.error("Error");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors 
    };

    switch (name) {
      case "FullName":
        formErrors.fullName =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "Telefono":
        formErrors.telefono = 
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      case "Correo":
        formErrors.correo =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

render() {
  const { formErrors } = this.state;
  return (
      <section className="page-section" id="contact">
        <div className="row">
          <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contacto</h2>
          </div>
          </div>
          <div className="about-container" id="personal">
          <div className="about-desc">
                <h3 class = "text">Descripcion</h3>
                <p class= "text">
                Mesas, sillas, bufeteras y todo lo que necesitas para tu 
                comedor y cocina. Sofas, Butacas y Mesas para todo 
                decorar tu sala y dormitorio. Diseños Exclusivos. 
                Envíos a toda Guatemala.
               </p>
                <h4 class = "text">Email</h4>
                <p class= "text">
                Bodega502@gmail.com
                </p>
                <h4 class = "text">Telefono</h4>
                <p class= "text">
                4565-6545
                </p>
                <h4 class = "text">Fax</h4>
                <p class= "text">
                454545454552
                </p>
                <h4 class = "text">Direccion</h4>
                <p class= "text">
                San Jose Pinula, Guatemala, Guatemala
                </p>
                </div>
                <div className="about-img">
                <img className="img1"
                src={mapa}
                alt="about"
                />
            </div>
            </div>
      <div className="wrapper">
      <div className="form-wrapper">
        <h1>Enviame un mensaje</h1>
        <form className="Holas"onSubmit={this.handleSubmit} onSubmit={this.enviarDatos} noValidate>
          <div className="email">
            <label htmlFor="FullName">Ingrese su Nombre Completo</label>
            <input
              className={formErrors.fullName.length > 0 ? "error" : null}
              placeholder="Nombre Completo"
              type="text"
              name="FullName"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.fullName.length > 0 && (
              <span className="errorMessage">{formErrors.fullName}</span>
            )}
          </div>
          <div className="email">
            <label htmlFor="Telefono">Su numero de telefono</label>
            <input
              className={formErrors.telefono.length > 0 ? "error" : null}
              placeholder="telefono"
              type="text"
              name="Telefono"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.telefono.length > 0 && (
              <span className="errorMessage">{formErrors.telefono}</span>
            )}
          </div>
          <div className="commentary">
            <label htmlFor="correo">Ingrese su correo</label>
            <input
              className={formErrors.correo.length > 0 ? "error" : null}
              placeholder="Correo"
              type="text"
              name="correo"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.correo.length > 0 && (
              <span className="errorMessage">{formErrors.correo}</span>
            )}
          </div>
          <label htmlFor="Mensaje">Mensaje</label>
          <div className="mensaje">
            <textarea className="form-control" id="message" placeholder="Ingrese su mensaje *" required="required" data-validation-required-message="Ingrese su mensaje"></textarea>
        </div>
          <div className="YourOpinion">
            <button className="btn" type="submit">Enviar Mensaje</button>
          </div>
        </form>
    </div>
    </div>
  </section>
  );
};
};
export default  Contact;
