function mostrar()
{
  var contador = 0;
  var promedio;
  sexo = sexo toLowerCase();
  while(cont < 5){
    contador++;
    do{
      sexo = prompt("indique sexo f o m ");

    }while(sexo != m && sexo != f);
    do{
      notas= prompt("ingresar notas");
      notas = parseInt(notas);
    }while(isNaN(notas) && (notas<0||notas>10));

  }

}
