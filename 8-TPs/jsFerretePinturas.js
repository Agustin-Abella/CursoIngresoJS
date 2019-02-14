/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{temp= document.getElementById("Temperatura").value;
temp = parseInt(temp);
cel = (temp - 32) * 5 / 9; 	
alert(temp+" Fahrenheit  es igual a "+ cel +"  grados centigrados")
}

function CentigradosFahrenheit () 
{temp= document.getElementById("Temperatura").value;
temp = parseInt(temp);
far = (temp *9 /5) + 32;	
alert(temp+" Centigrados  es igual a "+ far +"  grados Fahrenheit")
	
}
