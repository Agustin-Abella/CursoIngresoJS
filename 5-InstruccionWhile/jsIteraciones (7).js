function mostrar()
{
  var promedio;
	var contador = 0;
	var acumulador = 0;
  var bandera = true;
  var num;
  while(bandera==true ){
    num = prompt("ingrese numero ");
    num = parseInt(num);
    acumulador = acumulador + num; 
    
  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
