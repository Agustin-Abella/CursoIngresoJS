function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	nota = Math.floor(Math.random()*10)+1;
	alert("tu nota es " + nota);
	
	if (nota > 8  )
	{
		 alert("Exelente");
	}else

		if (nota > 4){alert("aprobado");
	}else 
		{
	 		alert( "vamos la proxima se puede")
		}

	

}//FIN DE LA FUNCIÓN