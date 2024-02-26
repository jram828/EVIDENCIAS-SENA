import React, { useState, useEffect} from "react";
import { validar } from "../../utils/validacion";
import "../../App.css";
import { Link } from "react-router-dom";
import { Button } from "../Mystyles";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import logo from "../../img/logoAveza.png";

const Form = ({ login, clickHandlerRecordatorio,clickHandlerCrear }) => {
  
  const location = useLocation();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    usuario: "",
    password: "",
  });

  const [errores, setErrores] = useState({
    usuario: "",
    password: "",
  });


  const handleChange = (e) => {
    setErrores(validar({ ...userData, [e.target.name]: e.target.value }));

    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className="containerLogin">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={submitHandler}>
        <table>
          <tr>
            <td></td>
            <td colSpan={2} className="celdas">
              <img
                src={logo}
                alt="Logo Aveza"
                style={{ height: "100px", marginBottom: "50px", width: "60%" }}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="usuario" className="label">
                Usuario:
              </label>
            </td>
            <td>
              <input
                type="number"
                name="usuario"
                id="username"
                //className="cajausuario"
                placeholder="Ingrese su Usuario"
                value={userData.usuario}
                onChange={handleChange}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>
              {errores.usuario !== "" && (
                <h5 className="errores">{errores.usuario}</h5>
              )}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label className="label" htmlFor="password">
                Contraseña:
              </label>
            </td>
            <td>
              <input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                value={userData.password}
                onChange={handleChange}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>
              {errores.password !== "" && (
                <h5 className="errores">{errores.password}</h5>
              )}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="tipodeusuario">Tipo de usuario:</label>
            </td>
            <td>
              <select name="tipodeusuario" id="idusuario">
                <option value="">Elija una opcion</option>
                <option value="Administrador">Administrador</option>
                <option value="Cliente">Cliente</option>
              </select>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <br></br>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="celdas">
              <input
                type="button"
                name="cancelar"
                value="Cancelar"
                className="botonesiniciosesion"
              />
            </td>
            <td className="celdas">
              {errores.usuario || errores.password ? null : (
                <input
                  type="submit"
                  value="Ingresar"
                  className="botonesiniciosesion"
                />
              )}
            </td>
            <td className="celdas">
              <Link to={"/crearusuario"} onClick={clickHandlerCrear}>
                <button className="botonesiniciosesion">Crear Usuario</button>
              </Link>
            </td>
            <td className="celdas">
              <Link
                to={"/recordatoriocontrasena"}
                onClick={clickHandlerRecordatorio}
              >
                <button className="botonesiniciosesion">
                  ¿Olvidó su contraseña?
                </button>
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default Form;


