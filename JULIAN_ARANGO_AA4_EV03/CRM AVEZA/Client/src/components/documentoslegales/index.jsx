import logo from "../../img/logoAveza.png";
const DocumentosLegales = (props) => {
  return (
    <div>
      <div className="logo-aveza">
        <img
          src={logo}
          alt="logo-aveza"
          title="AVEZA SAS"
        />
      </div>
      <h1 className="titulo">Generar Documentos Legales</h1>
      <br />

      <form>
        <br />
        <div className="documentoagenerar">
          <br />
          <label for="tipodocumento" className="labelgenerardocumento">
            Documentos a generar:
          </label>
          <select
            className="cajagenerardocumento"
            name="tipodocumento"
            id="document"
          >
            <option value="">Elija una opcion</option>
            <option value="Poder">Poder</option>
            <option value="Demanda">Demanda</option>
            <option value="Autorización">Autorización</option>
            <option value="oficio">Oficio</option>
            <option value="impulsoprocesal">Impulso procesal</option>
            <option value="sucesiones">Sucesiones</option>
          </select>
        </div>
        <br />
        <br />

        <div className="documentoagenerar">
          <label className="labelgenerardocumento"> Enviar a:</label>
          <div>
            <label for="email">Email</label>
            <input
              className="inputbox"
              type="checkbox"
              id="email"
              checked="checked"
            />
          </div>
          <div>
            <label for="sms">SMS </label>
            <input className="inputbox" type="checkbox" id="sms" />
          </div>
        </div>

        <div className="documentoagenerar">
          <input
            className="inputbox2"
            type="button"
            name="verificardatos"
            value="Verificar datos del cliente"
          />
          <input
            className="inputbox2"
            type="button"
            name="Vistaprevia"
            value="Vista previa del documento"
          />

          <input
            className="inputbox2"
            type="submit"
            name="generar"
            value="Generar y guardar"
          />
        </div>
      </form>
    </div>
  );
};
export default DocumentosLegales;
