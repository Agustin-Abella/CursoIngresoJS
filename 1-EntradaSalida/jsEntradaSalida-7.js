/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{valor1= document.getElementById("numeroUno").value;
valor2= document.getElementById("numeroDos").value;
valor1=parseInt(valor1);
valor2=parseInt(valor2);
suma = valor1 + valor2;
alert("la suma es " + suma);	
	
}

function restar()
{valor1= document.getElementById("numeroUno").value;
valor2= document.getElementById("numeroDos").value;
valor1=parseInt(valor1);
valor2=parseInt(valor2);
resta = valor1 - valor2;
alert("la resta es " + resta);
	
}

function multiplicar()
{ valor1= document.getElementById("numeroUno").value;
valor2= document.getElementById("numeroDos").value;
valor1=parseInt(valor1);
valor2=parseInt(valor2);
multiplicar = valor1 * valor2;
alert("la multipicacion es " + multiplicar);
	
}

function dividir()
{valor1= document.getElementById("numeroUno").value;
valor2= document.getElementById("numeroDos").value;
valor1=parseInt(valor1);
valor2=parseInt(valor2);
dividir = valor1 / valor2;
alert("la divicion es " + dividir);
	
}

