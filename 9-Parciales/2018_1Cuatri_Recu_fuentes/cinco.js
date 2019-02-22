function mostrar()
{
    var precio;
    var metodoDePago;

    precio = prompt("indique precio");
    metodoDePago = prompt("indique metodo de pago");
    total = precio - ((precio/100)*15);



    switch(metodoDePago)
    {
        case "paypal":
            alert("tiene un descuento de %15 el total es:"+ total );
                    break;
        case "mercado pago":
        alert("tiene un descuento de %10 el total es:"+ total );
                break;

        case "tarjeta visa":
        alert("tiene un descuento de %5 el total es:"+ total );
                break;
        case "efetivo":
        alert("tiene un descuento de %25 el total es:"+ total );
                break;
        case "otro medio":
        alert("tiene un descuento de %30 el total es:"+ total );
                break;
        default:
        alert("El metodo de pago no existe");
    }    
        




}