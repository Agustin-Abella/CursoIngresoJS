/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    lar = document.getElementById("Largo").value;
    an = document.getElementById("Ancho").value;
    lar = parseInt(lar);
    an = parseInt(an);
    perimetro = 2 * lar + 2 * an;
    total = perimetro * 3;
    alert("Alambre a comprar: " + total + " metros");
}
function Circulo () 
{
    rad = document.getElementById("Radio").value;
    rad = parseInt(rad);
    peri = (2 * Math.PI) * rad;
    peri = parseInt(peri);
    tot = peri * 3;
    alert("cantidad de alambre a comprar: " + tot);
}
function Materiales () 
{   mc= prompt("ingresar los metros cuadrados")
    lar = document.getElementById("Largo").value;
    an = document.getElementById("Ancho").value;
    lar = parseInt(lar);
    an = parseInt(an);
    perimetro = 2 * lar + 2 * an;
}