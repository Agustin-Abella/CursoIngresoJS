function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño){
  case "Enero":
  case "Febrero":
  case "Marzo":
  case "Abril":
  case "Mayo":
  case "Junio":
        alert("Falta para el invierno");
              break;
  case " Agosto":
  case "Julio":
        alert("Abrigate hace frio");
        break;
  default:
        alert("Ya pasamos el invierno ahora calor");

}

}//FIN DE LA FUNCIÓN
