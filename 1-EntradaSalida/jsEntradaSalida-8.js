/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{valor1= document.getElementById("numeroDividendo").value;
valor2= document.getElementById("numeroDivisor").value;
valor1=parseInt(valor1);
valor2=parseInt(valor2);
dividir = valor1 % valor2;
alert("la divicion es " + dividir);
	
}
