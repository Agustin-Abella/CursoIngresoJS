function mostrar()
{
    ndamigos = prompt("cantidad de clientes ");
    precio = prompt("indique precio");
    ndamigos = parseInt(ndamigos);
    //precio = parseInt(precio);
    preciocp = precio * 1.10;
    //preciocp = parseInt(preciocp);
    precioci = preciocp * 1.21;
    //precioci = parseInt(precioci);
    preciocu = precioci / ndamigos;
    alert("el precio es $" +precio + " el precio con propina es: $" +preciocp + " precio con iva es: $"+precioci + " cada cliente debe pagar: $"+ preciocu );


}
