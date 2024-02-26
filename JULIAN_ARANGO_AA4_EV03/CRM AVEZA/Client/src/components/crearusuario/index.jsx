import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../../App.css";
import logo from "../../img/logoAveza.png";
const CrearUsuario = (props) => {
  return (
    <div>
      <form method="post" className="formulario">
        <div className="logo-aveza">
          <img
            src={logo}
            alt="logo-aveza"
          />
        </div>
        <h1 className="titulo">Crear Usuario</h1>
        <br />
        <br />
        <div className="nombreapellido">
          <label for="nombre" className="labelcrearusuario">
            Nombre(s):
          </label>
          <input
            type="text"
            name="nombre"
            id="name"
            className="cajascrearusuario"
          />
          <label for="apellidos" className="labelcrearusuario">
            Apellido(s):
          </label>
          <input
            type="text"
            name="apellidos"
            id="lastname"
            className="cajascrearusuario"
          />
        </div>

        <br />
        <br />
        <div className="cedulaemail">
          <label for="numerocedula" className="labelcrearusuario">
            Numero de cédula:
          </label>
          <input
            type="number"
            name="numerocedula"
            id="cedula"
            className="cajascrearusuario"
          />
          <label for="correo" className="labelcrearusuario">
            Email:
          </label>
          <input
            type="email"
            name="correo"
            id="email"
            className="cajascrearusuario"
          />
        </div>

        <br />
        <br />
        <div className="direccioncelular">
          <label for="direccion" className="labelcrearusuario">
            Dirección:
          </label>
          <input
            type="text"
            name="direccion"
            id="address"
            className="cajascrearusuario"
          />
          <label for="telefono" className="labelcrearusuario">
            Celular:
          </label>
          <input
            type="number"
            name="telefono"
            id="celular"
            className="cajascrearusuario"
          />
        </div>

        <br />
        <br />
        <div className="ciudadcontrasena">
          <label for="ciudad" className="labelcrearusuario">
            Ciudad:
          </label>
          <input
            type="text"
            name="ciudad"
            id="city"
            className="cajascrearusuario"
          />
          <label for="contrasena" className="labelcrearusuario">
            Contraseña:
          </label>
          <input
            type="password"
            name="contrasena"
            id="password"
            className="cajascrearusuario"
          />
        </div>
        <br />
        <br />
        <div className="repetircontrasena">
          <label for="repetircontrasena" className="labelrepetircontrasena">
            Repetir contraseña:
          </label>
          <input
            type="password"
            name="repetircontrasena"
            id="passwordver"
            className="cajascrearusuario"
          />
        </div>
        <br />
        <br />
        <div className="botonescrearusuario">
          <input
            type="submit"
            name="guardar"
            value="Guardar"
            className="botones"
          />
          <input
            type="button"
            name="cancelar"
            value="Cancelar"
            className="botones"
          />
        </div>
        <br />
      </form>
    </div>
  );
};
export default CrearUsuario;
