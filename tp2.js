var diaEncontrado = false;
var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var dia = prompt("Ingrese dia de la semana")
for (var i = 0; i < semana.length && diaEncontrado = false; i++) {
	if(dia == semana[i] && i <= 4){
		alert("dia habil");		
	}else{
		alert("no habil");
	}
	diaEncontrado = true;
}