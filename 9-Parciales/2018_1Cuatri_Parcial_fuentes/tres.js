function mostrar()
{var precio = prompt("indique el precio");
var descuento = prompt ("indique el descuento");
precio = parseInt(precio);
descuento = parseInt(descuento);
var total = (descuento / precio) *100;
document.getElementById("elPrecioFinal").value = total;

}
