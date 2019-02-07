/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{impor = document.getElementById("importe").value;
impor = parseInt(impor);
resul = impor / 1.33;
document.getElementById("resultado").value = resul;
}
