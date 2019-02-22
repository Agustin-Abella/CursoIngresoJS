function mostrar()
{
    /*cantidaddl = prompt("cantidad de libros:");
    precio = prompt("indique el precio");
    tarjeta = prompt("paga con tarjeta (si) o (no)");
    descuento1 = precio / 1.10;
    descuento2 = precio / 1.15;

    recargo = 
    tarjeta = confirm(" si paga con tarjeta (aceptar) ");

    if (cantidaddl > 2 && precio < 2000)
    {   
        alert("total es "+ descuento1);

    }if ()

    }if(recargo == true)
    {
        alert("total es: "+total );
    }*/




    valor1 = prompt("indique precio");
    valor2 = prompt("indique precio");
    valor3 = prompt("indique precio");
    valor4 = prompt("indique precio");
    
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    valor3 = parseInt(valor3);
    valor4 = parseInt(valor4);
    
    total = valaor1 + valor2 + valor3 + valor4;
    descuento1 = total /0.10;
    aumento = total *0.15;
    descuento2 = total / 0.5;
    
    
    
    
    if (valor1 > valor2)
    {
        
    }
    else
    {

    }
    
    
    
    
    
    if (total > 100)
    {
        
        alert("superaste los 100 el total es: "+ descuento1 );

    }
        else
        {
            if ( total < 50)
                {
                    alert("superaste los 50 el total es: "+ descuento2  );
            
                }
            else
                {
                    alert("no superaste los 50 el total es: "+ aumento);
                }        


        }
    

}
