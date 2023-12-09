<?php
// Se crean variables con datos recibidos para el inicio de sesión
session_start();
$Usuario=$_POST['usuario'];
$Clave=$_POST['contrasena1'];
$user="root";
$pass="";
$server="localhost";
$db="crm_aveza";

// Se realiza conexion a la base de datos
try {
$conn = new PDO('mysql:host='.$server.';dbname='.$db, $user, $pass);
} catch (PDOException $e) {
die('Falló la conexion a la base de datos: ' . $e->getMessage());
}

// Se verifica si los datos recibidos coinciden con los de la base de datos
$records = $conn->prepare('SELECT * FROM tbl_registro_cliente WHERE cedula=:Usuario');
$records->bindParam(':Usuario', $Usuario);
$records->execute();
$results = $records->fetchALL(PDO::FETCH_ASSOC);
$validar = sizeof($results);


if($validar>0){

	$clavebd = $results[0]['contrasena'];
	if ($Clave===$clavebd) {
		//Se accedió correctamente, muestra mensaje
		$mensaje = 'Se ha accedido correctamente a la base de datos!';
		
	}else{
		//Los datos de inicio de sesion son incorrectos, muestra mensaje
		$mensaje = '<div class="alert alert-danger text-center" role="alert">Usuario o contrasena incorrecta';
		}
}else{
	//No se ingresaron datos, muestra mensaje
	$mensaje = '<div class="alert alert-danger text-center" role="alert">Debe diligenciar los campos Usuario y contrasena';
}
echo json_encode($mensaje);
?>