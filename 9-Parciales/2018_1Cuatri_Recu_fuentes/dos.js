function mostrar()
{
    precio = prompt("indique valor compra " );
    precio = parseInt(precio);
    preciocd = precio / 1.10;
    precioci =  preciocd * 1.21  ;
    
    alert("tu compra es de " + precio + " tenes un descuento del 10% queda en: " + preciocd + "  mas el iva "+precioci);
    
  
}
