function mostrar()
{
  var suma;
	var contador = 0;
	var acumulador = 0;
  var bandera = true;
  var num;
  while(contador ){
    num = prompt("ingrese numero ");
    num = parseInt(num);
    acumulador = acumulador +contador
  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
