//Importar modulos necesarios
import { useState, useEffect } from "react";
import "./App.css";
// import Cards from "./components/cards";
import Nav from "./components/nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import PrevisualizarContrato from "./components/previsualizarcontrato";
import Detail from "./components/detail";
import Form from "./components/login";
import Favorites from "./components/favorites";
import GenerarFactura from "./components/generarfactura"
import DocumentosLegales from "./components/documentoslegales";
import Cotizacion from "./components/cotizacion";
import ConocimientoDeLitigios from "./components/conocimientodelitigios";
import Contrato from "./components/contrato";
import ConfigurarRecordatorios from "./components/configurarrecordatorios";
import AgendarCitas from "./components/agendarcitas";
import Financiamiento from "./components/financiamiento";
import RegistroCliente from "./components/registrocliente";
import CrearUsuario from "./components/crearusuario";
import RecordatorioContrasena from "./components/recordatoriocontrasena";
import axios from "axios";
import logo from "./img/logoAveza.png";

export const URL = "http://localhost:3001/crmAveza/";


function App() {
  const [characters, setCharacters] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [access, setAccess] = useState(false);
  const [accessR, setAccessR] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  //Funcion para verificar datos de ingreso
     async function login(userData) {
      const { usuario, password } = userData;
      const URL = "http://localhost:3001/crmAveza/login/";
      try {
        const { data } = await axios(
          URL + `?usuario=${usuario}&password=${password}`
        );
        // console.log("Login 2:", data);
        const { access } = data;
        setAccess(data);
        
          access && navigate("/home");

      } catch (error) {
        window.alert("Usuario o contraseña incorrectos");
        
      }
    }
  
  const logout = () => {
    alert("Ha salido exitosamente");
    setAccess(false);
    navigate("/");
  };

  //Funcion para obtener datos de un cliente
  const onVerificarCliente = async (id) => {
    try {
      const { data } = await axios(`${URL}/contrato`);
      setCliente(...cliente, data);
    } catch (error) {
      window.alert("Cliente No encontrado!");
    }
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFilter);
  };

  //Acceder al modulo de crear usuario
  const clickHandlerCrear = (e) => {
    e.preventDefault();
    setAccess(true);
    navigate("/crearusuario");
  };

  //Acceder al modulo de recordar contraseñas
  const clickHandlerRecordatorio = (e) => {
    e.preventDefault();
    setAccess(true);
    
    navigate("/recordatoriocontrasena");
    
  };

  return (
    //Renderizar menu principal en las rutas correspondientes
    <div className="App">
      {location.pathname !== "/" &&
      location.pathname !== "/crearusuario" &&
      location.pathname !== "/recordatoriocontrasena" ? (
        <Nav onVerificarCliente={onVerificarCliente} logout={logout} />
      ) : undefined}

      {location.pathname === "/home" ? (
        <div className="logo-aveza2">
          <br></br>
          <br></br>
          <br></br>
          <img
            src={logo}
            alt="logo-aveza"
            title="AVEZA SAS"
          />
          <br></br>
          <br></br>
          <br></br>
          <h1 className="titulo">Bienvenido a CRM AVEZA</h1>
        </div>
      ) : undefined}

      <Routes>
        <Route
          path="/"
          element={
            <Form
              login={login}
              clickHandlerRecordatorio={clickHandlerRecordatorio}
              clickHandlerCrear={clickHandlerCrear}
            />
          }
        />
        {/* <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        /> */}
        <Route path="/generarfactura" element={<GenerarFactura />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/configurarrecordatorios"
          element={<ConfigurarRecordatorios />}
        />
        <Route path="/agendarcitas" element={<AgendarCitas />} />
        <Route path="/documentoslegales" element={<DocumentosLegales />} />
        {/* {console.log('Cliente App: ', cliente)} */}
        <Route
          path="/contrato"
          element={
            <Contrato
              cliente={cliente}
              onVerificarCliente={onVerificarCliente}
            />
          }
        />
        <Route
          path="/previsualizarcontrato"
          element={
            <PrevisualizarContrato
              cliente={cliente}
              // onVerificarCliente={onVerificarCliente}
            />
          }
        />
        <Route path="/financiamiento" element={<Financiamiento />} />
        <Route path="/cotizacion" element={<Cotizacion />} />
        <Route path="/crearusuario" element={<CrearUsuario />} />
        <Route path="/registrocliente" element={<RegistroCliente />} />
        <Route
          path="/recordatoriocontrasena"
          element={<RecordatorioContrasena />}
        />
        <Route
          path="/conocimientodelitigios"
          element={<ConocimientoDeLitigios onClose={onClose} />}
        />
      </Routes>
    </div>
  );
}

export default App;
