import SearchBar from "../searchbar";
import { Link} from "react-router-dom";
import { Button } from "../Mystyles";

const Nav = ({ onVerificarCliente,logout }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
      }}
    >
      {/* <SearchBar onVerificarCliente={onVerificarCliente} /> */}
      <Link to="registrocliente/">
        <Button>Registro de Cliente</Button>
      </Link>
      <Link to="cotizacion/">
        <Button>Cotizacion</Button>
      </Link>
      <Link to="financiamiento/">
        <Button>Financiamiento</Button>
      </Link>
      <Link to="/contrato" onVerificarCliente={onVerificarCliente}>
        <Button>Contrato</Button>
      </Link>
      <Link to="/documentoslegales">
        <Button>Generar Documentos Legales</Button>
      </Link>
      <Link to="/agendarcitas">
        <Button>Agendar Citas</Button>
      </Link>
      <Link to="/configurarrecordatorios">
        <Button>Configurar Recordatorios</Button>
      </Link>
      <Link to="/conocimientodelitigios">
        <Button>Conocimiento de Litigios</Button>
      </Link>
      <Link to="/generarfactura">
        <Button>Generar Factura</Button>
      </Link>
      <Link to="/home" onClick={logout}>
        <Button>Cerrar Sesión</Button>
      </Link>
    </div>
  );
};

export default Nav;

