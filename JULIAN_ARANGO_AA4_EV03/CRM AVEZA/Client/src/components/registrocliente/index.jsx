import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../../App.css";
import logo from "../../img/logoAveza.png";

const RegistroCliente = (props) => {
  return (
    <div>
      <form className="datos">
        <div className="logo-aveza">
          <img
            src={logo}
            alt="logo-aveza"
          />
        </div>
        <h1 className="titulo">Registro De Cliente</h1>
        <br />
        <br />
        <div className="nombreapellidos">
          <label for="nombre" className="labelregistrodecliente">
            Nombre(s):
          </label>
          <input
            type="text"
            name="nombre"
            id="name"
            className="cajaregistrocliente"
          />
          <label for="apellidos" className="labelregistrodecliente">
            Apellido(s):
          </label>
          <input
            type="text"
            className="cajaregistrocliente"
            name="apellidos"
            id="lastname"
          />
        </div>
        <br />
        <br />
        <div className="numerocedula">
          <label for="numerocedula" className="labelregistrodecliente">
            Numero de cédula:
          </label>
          <input
            type="number"
            className="cajaregistrocliente"
            name="numerocedula"
            id="cedula"
          />
          <label for="correo" className="labelregistrodecliente">
            Email:
          </label>
          <input
            type="email"
            name="correo"
            id="email"
            className="cajaregistrocliente"
          />
        </div>
        <br />
        <br />
        <div className="nombreapellidos">
          <label for="direccion" className="labelregistrodecliente">
            Dirección:
          </label>
          <input
            type="text"
            name="direccion"
            id="address"
            className="cajaregistrocliente"
          />

          <label for="telefono" className="labelregistrodecliente">
            {" "}
            Celular:
          </label>
          <input
            type="number"
            name="telefono"
            id="celular"
            className="cajaregistrocliente"
          />
        </div>

        <br />
        <br />

        <div className="nombreapellidos">
          <label for="ciudad" className="labelregistrodecliente">
            Ciudad:
          </label>
          <input
            type="text"
            name="ciudad"
            id="city"
            className="cajaregistrocliente"
          />
          <label for="tIpo-de-caso" className="labelregistrodecliente">
            Tipo de caso
          </label>{" "}
          <br />
          <select
            name="tIpo-de-caso"
            className="cajaregistrocliente"
            id="casos"
          >
            <option value="">Elija una opcion</option>
            <option value="insolvencia">Insolvencia</option>
            <option value="divorcio">Divorcio</option>
            <option value="proteccion-de-patrimonio">
              {" "}
              Protección de patrimonio
            </option>
            <option value="derecho-laboral">Derecho laboral</option>
            <option value="DCRGE">
              Derecho corporativo y recaudo y gestion de contratación estatal
            </option>
          </select>
        </div>
        <br />
        <br />
        <div className="comentarios">
          <label for="comentarios">Comentarios</label>
          <br />
          <br />
          <textarea
            name="comentarios"
            id="comentarios"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <br />
        <div className="documentoagenerar">
          <input className="botones" type="button" value="Modificar" />
          <input className="botones" type="button" value="Guardar" />
        </div>
      </form>
    </div>
  );
};
export default RegistroCliente;
