function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
        alert("Tiene 31 dias");
              break;
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
        alert("Tiene 30 dias");
        break;
  default:
        alert("tiene 28 dias");
}
//alert (mesDelAño);





}//FIN DE LA FUNCIÓN
