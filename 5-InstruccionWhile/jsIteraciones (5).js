function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase();
while(sexo != "f" && sexo != "m")
{
  sexo = prompt(" sexo no valido  ingrese f o m.");
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
