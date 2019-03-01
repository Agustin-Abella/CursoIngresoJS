function mostrar()
{
  var contador = 0;
  var promedio;
  var sexo;
  var notas;
  var acumulador=0;
  var contadorVarones=0;
  var notaMasBaja;
  var sexoMasBajo;
  var flag=0;
 
  while(contador < 5){
    contador++;
    do{
      sexo = prompt("indique sexo f o m ");
     sexo = sexo.toLowerCase();

    }while(sexo !="m" && sexo != "f");
    do{

      notas= prompt("ingresar notas");
      notas = parseInt(notas);
    }while(isNaN(notas) || (notas<0||notas>10));
  acumulador=notas+acumulador;
  if(sexo=="m" && notas>=6){
  contadorVarones++;
  }
  if(notas< notaMasBaja || flag==0){
  notaMasBaja=notas;
  sexoMasBajo=sexo; 
  flag=1; 
  }
  }
  promedio=acumulador/contador;
 alert("el promedio es"+promedio);
 alert("la nota mas baja "+notaMasBaja +"el sexo es: "+sexoMasBajo);
 alert("la canitdad de varosnes con nota mayor a 6: " +contadorVarones);

}
