function diasHabilesNoHabiles(dia){
	var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
	for (var i = 0; i < semana.length; i++) {
		if(dia == semana[i] && i <= 4){
			semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
			alert(semana);
					
		}else if (dia == semana[i] && i>=5){
			semana = ["sabado", "domingo"];
			alert(semana);
		}
		
	}
}