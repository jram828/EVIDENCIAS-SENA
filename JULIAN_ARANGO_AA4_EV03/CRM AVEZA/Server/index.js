const express = require("express");
// const mySql = require('mysql');
const router = require("../Server/routes/clientes.route");
const server = express();
const PORT = 3001;

// const conexion = mySql.createConnection({
//   host: "localhost",
//   database: "crm_aveza",
//   user: "root",
//   password: ""
// });

// conexion.connect(function (error) {
//   if (error) {
//     throw error;
//   } else {
//     const clientes = conexion.query(
//       "select * from tbl_registro_cliente",
//       (error, results) => {
//         if (error) {
//           throw error;
//         } else {
//           const clientes = results[0];
//         }
//       }
//     );
//     console.log('Conexion exitosa a MySQL')
//   }
// });

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/crmAveza", router);

server.listen(PORT, () => {
  console.log("Server en puerto: " + PORT);
});

// module.exports = clientes;