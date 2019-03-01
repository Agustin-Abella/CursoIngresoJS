function mostrar()
{

	var contador = 0;
	var num;
	var suma = 0,
	var promedio;
while( contador < 5){

  num = prompt("ingrese numero");
  num = parseInt(num);
  suma = (suma + num);
  contador ++;	
}
promedio = suma / contador;
document.getElementById("suma").value = suma;
document.getElementById("promedio").value = promedio;
}
