/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{valor1= document.getElementById("sueldo").value;

valor1=parseInt(valor1);

aumento = valor1 * 1.10;
document.getElementById("resultado").value = aumento;

	
}
