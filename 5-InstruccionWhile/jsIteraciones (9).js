function mostrar()
{
  //var contador=0;
  var max;
  var min;
  var bandera = true;
  var respuesta = true;
  while(respuesta==true){
    do{
      num = prompt("ingresar numero");
      respuesta = confirm("");
        num = parseInt(num);
          }while(isNaN(num))
        }
          if(bandera){
              bandera= false;
                max = num;
                min = num;
          }else
    {
              if(num > max)
          {
            max = num;
          }
          if (num<min)
          {
            min = num;
          }
    }
    document.getElementById("Minimo").value = min;
    document.getElementById("Maximo").value = max;

	}




//FIN DE LA FUNCIÓN
