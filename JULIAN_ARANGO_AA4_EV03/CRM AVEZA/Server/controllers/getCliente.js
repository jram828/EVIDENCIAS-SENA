const axios = require('axios');
const mySql = require("mysql");

const getCliente = async (req, res) => {
  
  try {
    const conexion = mySql.createConnection({
      host: "localhost",
      database: "crm_aveza",
      user: "root",
      password: "",
    });
    
    const doQuery = (query) => {
      return new Promise((resolve, reject) => {
        conexion.query(query, (error, results, fields) => {
          if (error) return reject(error);
          console.log("Consulta correcta");
          return resolve(results);
        });
      });
    };
    
    const selectAllQuery = "select * from tbl_registro_cliente";
    
    // realizo mi consulta aquí y el resultado lo almaceno en una variable
    const clientes = await doQuery(selectAllQuery);
    res.status(200).json(clientes);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
};


module.exports = getCliente;
